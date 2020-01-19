$(document).ready(function(){

    var base_line = -300;
    
    //
    var pos1 = $('.section1').offset().top;
    var pos2 = $('.section2').offset().top;
    var pos3 = $('.section3').offset().top;
    var pos4 = $('.section4').offset().top;
    // var pos1H = $('.section-about').height();
    // console.log(pos1H);
    console.log(pos1);
    console.log(pos2);
    console.log(pos3);
    console.log(pos4);
    
    //  
    $(window).on('scroll',function(){
        var scroll = $(this).scrollTop();
        // $('h1').text(scroll);
        // $('.navi>li>a').removeClass('on');
        // $('#wrap>div').removeClass('on');

        if(scroll>=pos1+base_line && scroll<pos2+base_line){
            // $('.navi>li').eq(0).children('a').addClass('on');
            $('#boxGroup>div').eq(0).addClass('on');
        }
        if(scroll>=pos2+base_line && scroll<pos3+base_line){
            // $('.navi>li').eq(1).children('a').addClass('on');
            $('#boxGroup>div').eq(1).addClass('on');
        }
        if(scroll>=pos3+base_line && scroll<pos4+base_line){
            // $('.navi>li').eq(2).children('a').addClass('on');
            $('#boxGroup>div').eq(2).addClass('on');
        }
        if(scroll>=pos4+base_line ){
            // $('.navi>li').eq(3).children('a').addClass('on');
            $('#boxGroup>div').eq(3).addClass('on');
        }
    });

    //
    $('#mobile-header .gnb li').on('click',function(){
        // e.preventDefault();
        var target = $(this).find('a').attr('id');
        // console.log(target);
        var target_pos = $(target).offset().top;
        $('html,body').stop().animate({'scrollTop':target_pos},1000);
    });

});