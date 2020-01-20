$(document).ready(function(){

    resizeHeader();
    $(window).on('resize',resizeHeader);

    function resizeHeader(){
        var winW = $(window).width();
        var $header = $('#header');
        var $gnb = $header.children('#gnb');
        var $gnbUl = $gnb.children('ul');
        var $gnbLi = $gnbUl.children('li');
        var $btnHopen = $('.btn-open');
        var $btnHclose = $('.btn-close');

        //gnbLi mouseenter 
        $gnbLi.on('mouseenter',function(){
            $(this).addClass('on');
            if(winW > 940){
                $(this).children('div').stop().animate({
                    'left':'0'
                },400); 
            }else{
                $(this).children('div').stop().animate();
            }
        });
        //gnbLi mouseleave
        $gnbLi.on('mouseleave',function(){
            $(this).removeClass('on');            
            if(winW > 940){
                $(this).children('div').stop().animate({
                    'left':'-200'
                },200);
            }else{
                $(this).children('div').stop().animate();
            }
        });

    }



});

