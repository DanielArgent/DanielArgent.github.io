var isMobile = {
	    		Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    	},
	    	BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    	},
	    	iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    	},
	    	Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    	},
	    	Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    		},
    		any: function() {
        	return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    		}
			};
      
			if(!isMobile.any()){
			$(function(){
						var h_hght = (333 * document.documentElement.clientWidth) / 1349;
    				var elem = $('nav');
    				var top = $(this).scrollTop();
    				if(top > h_hght){
        				elem.css('top', 0);
    				}	 
    			$(window).resize(function() {
    				var elem = $('nav');
    				var top = $(this).scrollTop();
    				if(top > h_hght){
        				elem.css('top', 0);
    				}	else {
            			elem.css('top', (333 * document.documentElement.clientWidth) / 1349);
            		}
        		});         
     
    			$(window).scroll(function(){
    				var h_hght = (333 * document.documentElement.clientWidth) / 1349;
        			top = $(this).scrollTop();
        			if (top < h_hght) {
         				 elem.css('top', (h_hght-top));
       				} else {
            				elem.css('top', 0);
        			}
    				});
			});
		}
