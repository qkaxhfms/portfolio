$(document).ready(function() {

    $('.btnMore').on('click',function(){
        $('.listSlide').stop().slideToggle(200);
    });

    $(window).on('scroll',function(){

        var scroll = $(this).scrollTop();
        var footerHeight = $('footer').offset().top;

        if(scroll > footerHeight/2 ){
            $('#btnTop').addClass("fixed");
        }else{
            $('#btnTop').removeClass("fixed");
        }

        if(scroll > 100){
            $('#btnTop').addClass("on");
            $('#logo').addClass("bgTr");
        }else{
            $('#btnTop').removeClass("on");
            $('#logo').removeClass("bgTr");
        }

        $('#btnTop').on('click',function(){
            $('html,body').stop().animate({ scrollTop: 0},220);
        });

        if(scroll > 1){
            $('header').addClass("scroll");
        }else{
            $('header').removeClass("scroll");
        }


    });

});

