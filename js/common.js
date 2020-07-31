window.onload = () => {

    const btnLogo = document.querySelector("#logo");
    btnLogo.addEventListener("click", logoClick);

    function logoClick(){
        document.querySelector("body").classList.toggle("change");
    }

    // const btnSwitch = document.querySelector("#btnSwitch");
    // btnSwitch.addEventListener("click", switchClick);

    // function switchClick(){
    //     document.querySelector("#btnSwitch").classList.toggle("rotate");
    // }

    $('.btnMore').on('click',function(){
        $('.listSlide').stop().slideToggle(200);
    })



    $(window).on('scroll',function(){
        var scroll = $(this).scrollTop();

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

}

