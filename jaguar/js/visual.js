//visual
$(document).ready(function(){

    //resize function
    match_height();
    $(window).on('resize', match_height);
    //visual height 100%
    function match_height(){
        var winH = $(window).height();
        $('#visual').height(winH);
    }    
    
    //swiper
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });


});