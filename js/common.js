window.onload = () => {
    document.getElementById("btnSwitch").addEventListener("click", logoClick);
    function logoClick(){
        document.querySelector("body").classList.toggle("change");
    }
}