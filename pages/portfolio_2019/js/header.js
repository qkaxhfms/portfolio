$(document).ready(function(){

    resizeHeader();
    $(window).on('resize',resizeHeader);

    function resizeHeader(){
        //common
        var winW = $(window).width();
        var $header = $('#header');

        //gnbPc
        var $gnb = $header.children('#gnb');
        var $gnbUl = $gnb.children('ul');
        // var $gnbLi = $gnbUl.children('li');
        var $gnbLi = $gnbUl.find('a');

        //gnbLi mouseenter 
        $gnbLi.on('mouseenter',function(){
            $(this).parent('li').addClass('on');
            if(winW > 940){
                $(this).parent('li').children('div').stop().animate({
                    'left':'0'
                },400); 
            }else{
                $(this).parent('li').children('div').stop().animate();
            }
        });
        //gnbLi mouseleave
        $gnbLi.on('mouseleave',function(){
            $(this).parent('li').removeClass('on');            
            if(winW > 940){
                $(this).parent('li').children('div').stop().animate({
                    'left':'-200'
                },200);
            }else{
                $(this).parent('li').children('div').stop().animate();
            }
        });

        //btnMobile
        var $btnMobileOpen = $('.btnMobileOpen');
        var $btnMobileClose = $('.btnMobileClose');

        $btnMobileOpen.on('click',function(e){
            e.preventDefault();
            $('#dimmer').addClass('on');
            $('#gnbMobile').addClass('on').stop().animate({right:'0%'});
        });
        $btnMobileClose.on('click',function(e){
            e.preventDefault();
            $('#dimmer').removeClass('on');
            $('#gnbMobile').stop().animate({right:'-80%'});
        });


        if(winW>940){
            $('#dimmer').removeClass('on');
            $('#gnbMobile').removeClass('on');
        }

    }


    $('.mobile-list li').on('click',function(e){
        var i = $(this).index();

        //
        $('.mobile-list li').removeClass('on');
        $('.mobile-list li').eq(i).addClass('on');

        //
        $('.mobile-content>div').removeClass('on');
        $('.mobile-content>div').eq(i).addClass('on');

        //
        $('#dimmer').removeClass('on');
        $('#gnbMobile').stop().animate({right:'-80%'});


    });


});

