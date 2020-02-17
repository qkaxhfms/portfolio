const winW = document.documentElement.offsetWidth;
const body = document.getElementsByTagName("BODY");
const header = document.getElementsByTagName("header");
//   header.background = "#f3f3f3";
// this.console.log(winW);

function layoutAttr() {
  if (winW > 939) {
    body.classList.add("pc");
  }
}

window.onload = function() {
  layoutAttr();
};
