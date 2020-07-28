window.onload = () => {

    const btnSwitch = document.querySelector("#btnSwitch");
    // const btnMore = document.querySelector(".btnMore");

    btnSwitch.addEventListener("click", logoClick);
    // btnMore.addEventListener("click", btnClick);

    function logoClick(){
        document.querySelector("body").classList.toggle("change");
    }

    // function btnClick(){
    //     document.querySelector(".listCon").classList.toggle("on");
    // }
}