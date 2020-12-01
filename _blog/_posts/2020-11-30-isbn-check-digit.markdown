---
title: ISBN check digit calculation
layout: post
description: Today we will learn how to calculate SBN, ISBN-10 & ISBN-13 check digit
  and write these algorithms in JavaScript
date: '2020-11-30'
tags: algorithms javascript
comments: true
---

{{ page.description }}

## Introduction

**ISBN (International Standard Book Number)** is a unique numeric book identifier, required for the distribution of the book in retail chains and automation of work with the publication.

ISBN based upon 9-digit **SBN (Standard Book Number)** created in 1965. There are two types of
ISBN. First, called **ISBN-10** (10 means 10-digit) is also deprecated format, developed by ISO was published in 1970. ISBN-10 consists of four parts:

![ISBN-10 structrue]({{site.baseurl}}/assets/images/isbn-1.svg "ISBN-10 structrue")

The most interesting part for us is the last - check digit. A **check digit** is a form of redundancy check used for error detection on identification numbers. It should be noted here that the last digit can be the letter X, which represents the value 10.

Currently active (since 2007) standart, **ISBN-13**, is looks very similar to ISBN-10. The difference is that ISBN-13 also have [EAN prefix][1] (always 978 or 979) and check digit can not be a letter X.

![ISBN-13 structrue]({{site.baseurl}}/assets/images/isbn-2.svg "ISBN-13 structrue")

To learn more about ISBN you can [visit International ISBN Agency site][2]. There is a comparison table of ISBN formats:

Standart     | Length | EAN prefix | X as check digit |
-------------|--------| ---------- | ---------------- |
SBN          | 9      | No         | Yes              |
ISBN-10      | 10     | No         | Yes              |
ISBN-13      | 13     | Yes        | No               |

It is possible to convert SBN to ISBN-10: just add prefix 0 to SBN:

```
SBN: 12345678-9
ISBN-10: 012345678-9
```
Also you can convert ISBN-10 to ISBN-13 by adding prefix 978 and **recalculating check digit**:
```
ISBN-10: 012345678-9
ISBN-13: 978-012345678-6
```

![ISBN coversion scheme]({{ 'assets/images/isbn-conversion-scheme.svg' | relative_url }} "ISBN coversion scheme")
## SBN check digit
To calculate SBN check digit you can convert SBN to ISBN-10 and calculate ISBN-10 check digit 
(it will be the same as SBN check digit).

## ISBN-10 check digit
ISBN-10 check digit must range from 0 to 10 (X). To calculate ISBN-10 check digit you can use following
formula:

<p class="formula">
  @d_10=[11 - (sum_(i=1)^9 (11-i)*d_i) mod 11] mod 11@
</p>

for example, lets eval check digit of ISBN-10 123-456-789-_:

<p class="formula">
  @d_10=[11 - (10 * 1 + 9 * 2 + 8 * 3 + 7 * 4 + 6 * 5 + 5 * 6 + 4 * 7 + 3 * 8 + 2 * 9) mod 11] mod 11@
  @d_10=(11 - 210 mod 11) mod 11 = (11 - 1) mod 11 = 10@
</p>

so check digit is X and ISBN-10 is 123-456-789-X.

JavaScript implementation:
```js
/**
 * Converts ISBN string to digit array (X in ISBN-10 also supported)
 *
 * @param {string} isbn - ISBN string representation
 * @returns {number[]} array of digits, converted to numbers
 */
function toIsbnDigits(isbn) {
    return [...isbn].map(char => 
        char.toLowerCase() === "x" ? 10 : Number.parseInt(char));
}

/**
 * Calculates check digit of ISBN-10
 *
 * @param {number[]} digits - ISBN-10 digit array
 * @returns {number} check digit of ISBN-10
 */
function checkDigitIsbn10(digits) {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += (10 - i) * digits[i];
    }

    let digit = (11 - (sum % 11)) % 11;
    return digit === 10 ? "X" : digit;
}

console.log(checkDigitIsbn10(toIsbnDigits("123456789"))); //=> X
```

## ISBN-13 check digit
Let

<p class="formula">
  @"alter"(x) = {(1, ;, odd),(2, ;, even):}@
</p>

then ISBN-13 check digit equals

<p class="formula">
  @d_13=[10 - (sum_(i=1)^12 "alter"(i)*d_i) mod 10] mod 10@
</p>

JavaScript implementation:

```js
/**
 * Converts ISBN-13 string to digit array
 *
 * @param {string} isbn - ISBN-13 string representation
 * @returns {number[]} array of digits, converted to numbers
 */
function toIsbnDigits(isbn) {
    return [...isbn].map(char => Number.parseInt(char));
}

/**
 * Calculates check sum of ISBN-13
 *
 * @param {number[]} digits - ISBN-13 digit array
 * @returns {number} check sum of ISBN-13
 */
function checksumIsbn13(digits) {
    // Helper function, returns 1 if x is odd, 3 otherwise
    function factor(x) {
        return (x % 2 === 1) ? 1 : 3;
    }

    let sum = 0;
    for (let i = 0; i < 12; i++) {
        sum += factor(i+1) * digits[i];
    }

    return (10 - (sum % 10)) % 10;
}
```


*Thank you for reading!*

[1]: https://en.wikipedia.org/wiki/International_Article_Number
[2]: https://www.isbn-international.org/

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<script>
  MathJax = {
      loader: {
    load: ['input/asciimath']
  },
    asciimath: {
      delimiters: [['@', '@']]
    }
};
</script>
