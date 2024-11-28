// Burger
const menuHeader = document.querySelector(".header__menu-list");
const burgerButton = document.querySelector(".burger-button");
const bodyForScroll = document.querySelector("body");
const menuItemsList = document.querySelectorAll(".header__menu-item");

//Click on burger button
burgerButton.addEventListener("click", function () {
  // If menuHeader havent class active, add this class. Open menu
  if (!menuHeader.classList.contains("header__menu-list--active")) {
    // Open menu
    menuHeader.classList.add("header__menu-list--active");
    // Turn burger button
    burgerButton.classList.add("burger-button--active");
    // Disable scrolling
    bodyForScroll.style.overflow = "hidden";
  } else {
    // Close menu
    menuHeader.classList.remove("header__menu-list--active");
    // Turn off burger button
    burgerButton.classList.remove("burger-button--active");
    // Enable scroll
    bodyForScroll.style.overflow = "";
  }
});
menuItemsList.forEach(function(item) {
  item.addEventListener('click', function() {
    // Close menu
    menuHeader.classList.remove("header__menu-list--active");
    // Turn off burger button
    burgerButton.classList.remove("burger-button--active");
    // Enable scroll
    bodyForScroll.style.overflow = "";
  })
}) 
