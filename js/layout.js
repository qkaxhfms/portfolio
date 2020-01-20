$(document).ready(function(){

    $('.gnb li').on('click',function(){
        var class_name = $(this).children('a').attr('id');
        // console.log(class_name);
        var i = $(this).index();
        $('#boxGroup').removeClass().addClass(class_name);
        $('.gnb li').removeClass('rotate');
        $(this).addClass('rotate');
    });
    
    // mobile
    resizeAll();
    $(window).on('load',resizeAll);
    $(window).on('resize',resizeAll);

    function resizeAll(){
        var winW = $(window).width();
        var winH = $(window).height();
        var headerH = $('#header').height();
        // console.log(moHeadherH);
        $('#container').height(winH);

        
        if(winW < 939){
            // devide layout
            $('.wrapper').addClass('mobile');
            $('.wrapper').removeClass('pc');
            // resposive layout
            $('#container').height(winH - headerH);
        }else{
            // devide layout
            $('.wrapper').removeClass('mobile');
            $('.wrapper').addClass('pc');
        }

    }


    $('.list-item').on('mouseenter',function(){
        $(this).children('.list-item-mockup').stop().fadeOut();
    });
    $('.list-item').on('mouseleave',function(){
        $(this).children('.list-item-mockup').stop().fadeIn();
    });

});