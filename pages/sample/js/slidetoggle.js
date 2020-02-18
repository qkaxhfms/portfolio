window.onload = function() {
  //   const gnbList = document.getElementsByClassName("gnb-list");
  // let i;
  // for(i=0; i<gnbList.length; i++){
  //     console.log(i);
  // }
  // gnbList[0].onclick = function(){
  //     console.log(this);
  //     this.classList.toggle('active');
  // }
  // gnbList[1].onclick = function(){
  //     console.log(this);
  //     this.classList.toggle('active');
  // }
  // gnbList[2].onclick = function(){
  //     console.log(this);
  //     this.classList.toggle('active');
  // }
  //   let i;
  //   for (i = 0; i < gnbList.length; i++) {
  //     gnbList[i].onclick = function() {
  //       console.log(this);
  //       this.classList.toggle("active");
  //     };
  //   }

  const gnbList = document.querySelectorAll(".gnb-list");
  let openMenu = document.querySelectorAll(".open-menu");

  const slideUp = (tar, dur) => {
    tar.style.height = `${tar.offsetHeight}px`;
    console.log(tar.offsetHeight);
    tar.style.transitionDuration = `${dur}ms`;
    tar.style.transitionProperty = "height,padding,margin";
    tar.style.overflow = "hidden";
    tar.style.height = 0;
    tar.style.padding = 0;
    tar.style.margin = 0;
    setTimeout(() => {
      tar.style.display = "none";
      tar.style.removeProperty("height");
      tar.style.removeProperty("padding");
      tar.style.removeProperty("margin");
      tar.style.removeProperty("overflow");
      tar.style.removeProperty("transition-duration");
      tar.style.removeProperty("transition-property");
    }, dur);
  };

  // const slideDown = (tar, dur) => {};

  const slideDown = (tar, dur) => {
    // if (window.getComputedStyle(tar).display === "none") {
    //   tar.style.display = "block";
    // }

    console.log(dur);
    tar.style.removeProperty("display");
    let display = window.getComputedStyle(tar).display;
    if (display === "none") {
      display = "block";
    }
    let height = tar.offsetHeight;
    tar.style.display = display;
    tar.style.height = 0;
    tar.style.padding = 0;
    tar.style.margin = 0;
    tar.style.overflow = "hidden";

    tar.style.transitionDuration = `${dur}ms`;
    tar.style.transitionProperty = "height,padding,margin";
    setTimeout(() => {
      tar.style.height = `${height}px`;
      tar.style.removeProperty("padding");
      tar.style.removeProperty("margin");
      //   tar.style.display = "block";
    }, 1);

    setTimeout(() => {
      tar.style.removeProperty("height");
      tar.style.removeProperty("padding");
      tar.style.removeProperty("margin");
      tar.style.removeProperty("overflow");
      tar.style.removeProperty("transition-duration");
      tar.style.removeProperty("transition-property");
    }, dur);
  };

  gnbList.forEach((btn, index) => {
    btn.addEventListener("click", function() {
      if (window.getComputedStyle(openMenu[index]).display === "none") {
        return slideDown(openMenu[index], 500);
      } else {
        return slideUp(openMenu[index], 500);
      }
    });
  });

  //   for (var i = 0; i < gnbList.length; i++) {
  //     btn[i].addEventListener("click", function() {
  //       if (window.getComputedStyle(openMenu[i]).display === "none") {
  //         return slideDown(openMenu[i], 500);
  //       } else {
  //         return slideUp(openMenu[i], 500);
  //       }
  //     });
  //   }
};
