window.onload = () => {
    document.getElementById("change").addEventListener("click", logoClick);
    function logoClick(){
        document.querySelector("body").classList.toggle('change');
    }
}