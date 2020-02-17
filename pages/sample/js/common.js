const body = document.getElementsByTagName("body");
const header = document.getElementsByTagName("header");
//   header.background = "#f3f3f3";
// this.console.log(winW);

function layoutAttr() {
  let winW = document.documentElement.offsetWidth;
  //   console.error(winW);
  if (winW > 939) {
    body[0].classList.add("pc");
    body[0].classList.remove("mobile");
  } else {
    body[0].classList.add("mobile");
    body[0].classList.remove("pc");
  }
}

window.onload = function() {
  layoutAttr();
};

window.onresize = function() {
  layoutAttr();
};
