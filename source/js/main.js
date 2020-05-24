var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var button = document.querySelector(".product__link");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");
  overlay.classList.add("overlay--show");
});

overlay.addEventListener("click", function (evt) {
  popup.classList.remove("modal--show");
  overlay.classList.remove("overlay--show");
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal--show") && overlay.classList.contains("overlay--show")) {
      popup.classList.remove("modal--show");
      overlay.classList.remove("overlay--show");
    }
  }
})
