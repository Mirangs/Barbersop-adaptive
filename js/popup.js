"use-strict"

var loginPopupOpen = document.querySelector(".main-nav__user-login");
var loginPopup = document.querySelector(".popup-login");
var loginPopupClose = loginPopup.querySelector(".close-modal");

loginPopupOpen.addEventListener("click", function(e) {
  e.preventDefault();
  loginPopup.classList.remove("popup-login--closed");
});

loginPopupClose.addEventListener("click", function(e) {
  e.preventDefault();
  loginPopup.classList.add("popup-login--closed");
});
