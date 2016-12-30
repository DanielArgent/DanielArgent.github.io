$(
    function(){
    var hei = (333 * document.documentElement.clientWidth) / 1349;
    var elem = $('nav');
    var top = $(this).scrollTop();
    if(!device.mobile()){
        if(top > hei){
            elem.css('top', 0);
        }    
    } else {
          $('nav').('position', 'relative'); 
    }

    $(window).resize(function() {
        var elem = $('nav');
        var top = $(this).scrollTop();
        if(!device.mobile()){
            if(top > (333 * document.documentElement.clientWidth) / 1349){
                elem.css('top', 0);
            } else {
                elem.css('top', (333 * document.documentElement.clientWidth) / 1349);
            }
        }
    });         
     
    $(window).scroll(function(){
        var hei = (333 * document.documentElement.clientWidth) / 1349;
        top = $(this).scrollTop();
        if(!device.mobile()){
            if (top < hei) {
                elem.css('top', (hei - top));
            } else {
                elem.css('top', 0);
            }
        }
    });
});
