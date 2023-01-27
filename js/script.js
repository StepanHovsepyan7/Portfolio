'use strict';

AOS.init({
    duration: 2000,
    once: true,
  });



  let fabars = $('.fa-bars');
  let menu = $('.mobileParent');
  let faxmark = $('.fa-xmark');
  let blackdiv = $('.blackdiv');


  if($(window).width() < 1100) {


    fabars.click(function () {
        menu.css({
            display: 'block',
            display: 'flex',
            justifyContent: 'end',
        })

        blackdiv.css({
            display: 'block',
        })

    })  
    
    blackdiv.click(function () {
        menu.css({
            display: 'none',
        })

        blackdiv.css({
            display: 'none',
        })
    })


    faxmark.click(function(){
        menu.css({
            display: 'none',
        })
    })


}
