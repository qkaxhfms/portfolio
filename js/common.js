window.onload = () => {
    document.getElementById("logo").addEventListener("click", logoClick);
    function logoClick(){
        document.querySelector("body").classList.toggle('change');
    }
}