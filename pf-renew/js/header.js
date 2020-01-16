$(document).ready(function(){

    resizeHeader();
    $(window).on('resize',resizeHeader);

    function resizeHeader(){
        var winW = $(window).width();
        var $header = $('#header');
        var $gnb = $header.children('.gnb');
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
        //btnOpen
        $btnHopen.on('click',function(e){
            e.preventDefault();         
            if(winW < 939){
                $gnb.slideDown(300,function(){
                    $gnbUl.stop().animate({
                        'left':'0%'
                    },400);
                });
            }
        })
        //btnClose
        $btnHclose.on('click',function(e){
            e.preventDefault();     
            if(winW < 939){
                $gnbUl.stop().animate({
                    'left':'-100%'
                },400,function(){
                    $gnb.slideUp();
                });
            }
        })
        //gnbLi
        $gnbLi.on('click',function(){
             
            if(winW < 939){
                $gnbUl.stop().animate({
                    'left':'-100%'
                },400,function(){
                    $gnb.slideUp();
                });
            }else{
                $gnbUl.stop().animate();
            }
        });

        //header-layout
        if(winW > 940){
            $gnb.show();
        }
    }



});

// window.onload = function(){ 
//     var path2 = document.getElementById('layer_01').querySelector('path');
//     var path = document.querySelector('path');
//     var length = path2.getTotalLength();
//     console.log(length);
//     console.log(path2);
//  }
