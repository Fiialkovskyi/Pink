var pageHeaderLogoWrapper = document.querySelector(".page-header__logo-wrapper");
var mainNavToggle = document.querySelector(".main-nav__toggle");
var mainNavList = document.querySelector(".main-nav__list");

pageHeaderLogoWrapper.classList.add("page-header__logo-wrapper--closed");
mainNavToggle.classList.add("main-nav__toggle--closed");
mainNavList.classList.add("main-nav__list--closed");

mainNavToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (mainNavToggle.classList.contains("main-nav__toggle--closed")) {
    mainNavToggle.classList.remove("main-nav__toggle--closed");
    mainNavToggle.classList.add("main-nav__toggle--open");
    pageHeaderLogoWrapper.classList.remove("page-header__logo-wrapper--closed");
    mainNavList.classList.remove("main-nav__list--closed")
  } else {
    mainNavToggle.classList.add("main-nav__toggle--closed");
    mainNavToggle.classList.remove("main-nav__toggle--open");
    pageHeaderLogoWrapper.classList.add("page-header__logo-wrapper--closed");
    mainNavList.classList.add("main-nav__list--closed")
  }
});
