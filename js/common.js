window.onload = () => {

    const btnSwitch = document.querySelector("#btnSwitch");
    btnSwitch.addEventListener("click", logoClick);

    function logoClick(){
        document.querySelector("body").classList.toggle("change");
    }

    $('#btnMore').on('click',function(){
        $('.listSlide').stop().slideToggle(200);
    })



    $(window).on('scroll',function(){
        var scroll = $(this).scrollTop();

        if(scroll > 1000){
            console.log("dsdfsd");
            $('#btnTop').addClass("on");
        }else{
            $('#btnTop').removeClass("on");
        }

        $('#btnTop').on('click',function(){
            $('html,body').stop().animate({ scrollTop: 0},220);
        });
    });

}

