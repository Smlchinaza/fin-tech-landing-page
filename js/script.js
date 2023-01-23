// Header
const menuBtn = document.querySelector(".menu-btn");
const toggleMenu = document.querySelector(".toggle-menu");
// Header

// Landing Section
const landingImage = document.querySelector(".landing .image img");
// Landing Section

// Services Section
const servicesArticle = document.querySelector(".services-wrapper");
const servicesCols = document.querySelectorAll(".services-wrapper .col");
const arrayOfServCols = Array.from(servicesCols);
// Services Section

// Features Section
const featuresArticle = document.querySelector(".features-wrapper");
const featuresCols = document.querySelectorAll(".features-wrapper .col");
const arrayOfFeaturesCols = Array.from(featuresCols);
// Features Section

// #Events
disableLinksHover();

// Header
menuBtn.onclick = function () {
  showMenu();
};
// Header

// Landing Section
window.onload = function () {
  landingImage.classList.add("show-landing-img");
};
// Landing Section

window.onscroll = function () {
  // Services
  servicesMoveUp();
  // Features
  featuresMoveHorizontal();
};

// #Functions
function showMenu() {
  menuBtn.classList.toggle("show-menu");
  if (!toggleMenu.classList.contains("show-above")) {
    setTimeout(function () {
      toggleMenu.classList.add("show-above");
    }, 500);
  } else {
    toggleMenu.classList.remove("show-above");
  }
}
// This Function Disable Links Hover In Touch Devices
function disableLinksHover() {
  const allLinks = document.querySelectorAll("a");
  const arrayOfLinks = Array.from(allLinks);

  arrayOfLinks.forEach(function (btn) {
    btn.addEventListener("mouseover", function () {
      if (window.navigator.maxTouchPoints > 0) {
        arrayOfLinks.forEach(function (btn) {
          btn.classList.add("no-hover");
        });
      } else {
        arrayOfLinks.forEach(function (btn) {
          btn.classList.remove("no-hover");
        });
      }
    });
  });
}
function servicesMoveUp() {
  arrayOfServCols.forEach(function (col) {
    if (
      scrollY >=
      col.offsetTop +
        servicesArticle.parentElement.parentElement.offsetTop -
        540
    ) {
      col.classList.add("move-to-up");
    }
  });
}
function featuresMoveHorizontal() {
  arrayOfFeaturesCols.forEach(function (col) {
    if (
      scrollY >=
      col.offsetTop +
        featuresArticle.parentElement.parentElement.offsetTop -
        500
    ) {
      col.classList.add("move-horizontal");
    }
  });
}
