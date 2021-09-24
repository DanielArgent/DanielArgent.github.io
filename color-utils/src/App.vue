<template>
  <div>
    <div
      class="color-preview"
      :style="{ 'background-color': `rgb(${rgb})` }"
    ></div>

    <label>RGB</label>
    <input type="text" v-model="rgb" />

  <div>{{ lab }}</div>

  </div>
</template>

<script>
import { ref,computed } from "vue";

export default {
  name: "App",
  components: {},
  setup() {
    const rgb = ref("");

    const lab = computed(() => {
      const rgbValues = rgb.value.split(",").map(i => parseInt(i.trim()));

      console.log(rgbValues)

      const linRGB = lin_sRGB(rgbValues);

       console.log(linRGB)

      return XYZ_to_Lab(lin_sRGB_to_XYZ(rgbValues))
    });

    return {
      rgb,
      lab
    };
  },
};

function multiplyMatrices(a, b) {
  var aNumRows = a.length,
    aNumCols = a[0].length,
    bNumCols = b[0].length,
    m = new Array(aNumRows);

  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols);
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}

function lin_sRGB(RGB) {
  // convert an array of sRGB values
  // where in-gamut values are in the range [0 - 1]
  // to linear light (un-companded) form.
  // https://en.wikipedia.org/wiki/SRGB
  // Extended transfer function:
  // for negative values,  linear portion is extended on reflection of axis,
  // then reflected power function is used.
  return RGB.map(function (val) {
    let sign = val < 0 ? -1 : 1;
    let abs = Math.abs(val);

    if (abs < 0.04045) {
      return val / 12.92;
    }

    return sign * Math.pow((abs + 0.055) / 1.055, 2.4);
  });
}

function lin_sRGB_to_XYZ(rgb) {
  // convert an array of linear-light sRGB values to CIE XYZ
  // using sRGB's own white, D65 (no chromatic adaptation)

  var M = [
    [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
    [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
    [0.01933081871559182, 0.11919477979462598, 0.9505321522496607],
  ];
  return multiplyMatrices(M, rgb);
}

// Lab and LCH

function XYZ_to_Lab(XYZ) {
  // Assuming XYZ is relative to D50, convert to CIE Lab
  // from CIE standard, which now defines these as a rational fraction
  var ε = 216 / 24389; // 6^3/29^3
  var κ = 24389 / 27; // 29^3/3^3
  var white = [0.96422, 1.0, 0.82521]; // D50 reference white

  // compute xyz, which is XYZ scaled relative to reference white
  var xyz = XYZ.map((value, i) => value / white[i]);

  // now compute f
  var f = xyz.map((value) =>
    value > ε ? Math.cbrt(value) : (κ * value + 16) / 116
  );

  return [
    116 * f[1] - 16, // L
    500 * (f[0] - f[1]), // a
    200 * (f[1] - f[2]), // b
  ];
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.color-preview {
  height: 100px;
  width: 100px;
}
</style>
