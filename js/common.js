window.onload = () => {

    const btnSwitch = document.querySelector("#btnSwitch");
    btnSwitch.addEventListener("click", logoClick);

    function logoClick(){
        document.querySelector("body").classList.toggle("change");
    }

    $('#btnMore').on('click',function(){
        $('.listSlide').stop().slideToggle(200);
    })

}