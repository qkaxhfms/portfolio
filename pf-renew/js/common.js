$(document).ready(function(){
    //common
    var winH = $(window).height();
    console.log(winH);
    $('.gnb').css({"height":winH});
    $('.gnb-menu-bar').on('click',function(){
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });
});