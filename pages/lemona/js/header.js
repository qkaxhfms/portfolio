$(document).ready(function(){

    // nav
    $('nav li a').on('mouseenter',function(e){
        e.preventDefault();
        $(this).addClass('on');
    })
    $('nav li a').on('mouseleave',function(e){
        e.preventDefault();
        $(this).removeClass('on');
    })

    // search-container
    $('.search-container form').on('mouseenter',function(e){
        e.preventDefault();
        $(this).addClass('on');
        $(this).children('button').addClass('on');
    });
    $('.search-container form').on('mouseleave',function(e){
        e.preventDefault();
        $(this).removeClass('on');
        $(this).children('button').removeClass('on');
    });


    resizeAll();

    function resizeAll(){
        var winW = $(window).width();
        var winTablet = 939;
        if(winW < winTablet){
            $('nav').css({'left':'100%'})
            $('nav li').on('click',function(){
                $('nav').stop().animate({'left':'100%'});
                $('.search-container').removeClass('on');
            })
        }
    
        if(winW > winTablet){
            $('nav').css({'left':'13.54%'})
            $('.search-container').removeClass('on');
        }
    }

    // btn-open
    $('.btn-open').on('click',function(){
        $('nav').stop().animate({'left':0});
        $('.search-container').addClass('on');
    })
    // btn-close
    $('.btn-close').on('click',function(){
        $('nav').stop().animate({'left':'100%'});
        $('.search-container').removeClass('on');
    })
    // resize
    $(window).on('resize',function(){
        resizeAll();
    })


});