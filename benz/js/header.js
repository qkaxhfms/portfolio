//header
$(document).ready(function(){


    var gnb_li = $('#gnb>li');
    var gnb_li_ul = gnb_li.children('div');
    var gnbMega = $('.gnb_mega_wrapper');
    var gnbMegaOpen = $('.gnb_mega_open');
    

    //function_menu_option
    gnb_li_down();
    gnb_li_up();
    gnb_li_click();
    gnb_mega_open_down();
    gnb_mega_open_up();

    //gnb_li
    function gnb_li_down(){
    //gnb_li_down
        gnb_li.on('mouseenter',function(){
            $(this).children('div').stop().slideDown();
        });
    }
    function gnb_li_up(){
        gnb_li.on('mouseleave',function(){
            $(this).children('div').slideUp();
        });
    }
    //gnb_li_click
    function gnb_li_click(){
        gnb_li.on('click',function(e){
            e.stopPropagation();
            gnb_li.children('a').removeClass('on');
            $(this).children('a').addClass('on');
        })
    }

    $('#header>h1>a').on('click',function(e){
        e.stopPropagation();
    });



    //gnb_mega
    function gnb_mega_open_down (){
        gnbMegaOpen.on("mouseenter",function(){
            gnbMega.stop().slideDown();
        });
    }
    function gnb_mega_open_up(){
        gnbMega.on('mouseleave',function(){
            $(this).stop().slideUp();
            gnb_li_ul.slideUp();
        });
    }





});