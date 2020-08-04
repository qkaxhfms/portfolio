window.onload = function() {

    const btnLogo = document.querySelector("#logo");
    btnLogo.addEventListener("click", logoClick);

    function logoClick(){
        document.querySelector("body").classList.toggle("change");
    }

}

