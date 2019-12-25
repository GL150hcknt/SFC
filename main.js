window.onscroll = function() {scrollFunction()};
window.onload = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "0px 0px";
/*    document.getElementById("logo").style.fontSize = "25px";*/
  } else {
    document.getElementById("header").style.padding = "30px 30px";
/*    document.getElementById("logo").style.fontSize = "35px";*/
  }
}