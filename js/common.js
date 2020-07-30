window.onload = () => {

    const btnSwitch = document.querySelector("#btnSwitch");
    btnSwitch.addEventListener("click", logoClick);

    function logoClick(){
        document.querySelector("body").classList.toggle("change");
    }

    $('.btnMore').on('click',function(){
        $('.listSlide').stop().slideToggle(200);
    })



    $(window).on('scroll',function(){
        var scroll = $(this).scrollTop();

        if(scroll > 100){
            $('#btnTop').addClass("on");
        }else{
            $('#btnTop').removeClass("on");
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

}

