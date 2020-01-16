//header
$(document).ready(function(){
    //menu slidedown
    $('#gnb>li').on('mouseenter',function(){
        $(this).children('ul').stop().slideDown();
    });

    $('#gnb>li').on('mouseleave',function(){
        $(this).children('ul').slideUp();
    });

    $('#gnb>li').on('mouseenter',function(){
        $(this).children('a').addClass('on');
    });
    
    $('#gnb>li').on('mouseleave',function(){
        $(this).children('a').removeClass('on');
    });


    //btn click menu open
    $('.btnBar').on('click',function(e){
        e.preventDefault();
        $("#headerMobile").fadeIn(500);
    });

    $('.btnOff').on('click',function(e){
        e.preventDefault();
        $("#headerMobile").stop().fadeOut(500);
    });


    //mobile click & menu in
    $(window).on('resize',function(){
        var winW = $(this).width();

        if(winW>=940){
            $('#headerMobile').stop().fadeOut(0);
        }
    })

});