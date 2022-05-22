var b1 = document.getElementsByClassName("b1")[0];
var b2 = document.getElementsByClassName("b2")[0];
var b3 = document.getElementsByClassName("b3")[0];

var purple = document.getElementsByClassName("purple")[0];
var green = document.getElementsByClassName("green")[0];
var yellow = document.getElementsByClassName("yellow")[0];

b1.addEventListener("click", b1click, false);
function b1click() {
  b1.classList.toggle("clicked");
  purple.classList.toggle("run-animation");

  setTimeout(function() {
    b1.classList.toggle("clicked");
    purple.classList.toggle("run-animation");
  }, 4750);
}

b2.addEventListener("click", b2click, false);
function b2click() {
  b2.classList.toggle("clicked");
  green.classList.toggle("run-animation");

  setTimeout(function() {
    b2.classList.toggle("clicked");
    green.classList.toggle("run-animation");
  }, 4750);
}

b3.addEventListener("click", b3click, false);
function b3click() {
  b3.classList.toggle("clicked");
  yellow.classList.toggle("run-animation");

  setTimeout(function() {
    b3.classList.toggle("clicked");
    yellow.classList.toggle("run-animation");
  }, 4750);
}