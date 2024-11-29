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

// Slider
const cardsContainer = document.querySelector(".slider__cards");
// const oneCard = document.querySelector(".slider__card");
const leftButton = document.querySelector(".slider__buttons-left");
const rightButton = document.querySelector(".slider__buttons-right");
// const pageContainer = document.querySelector(".container")  
// console.log(cardsContainer.offsetWidth);


let scrollRelativeToStart = 0;
rightButton.addEventListener('click', function () {
  const screenWidth = window.screen.width;
  // let clickCounter;
  let pageContainer;
  let scrollOnClick;
  if (screenWidth > 1400) {
    pageContainer = 41;
    scrollOnClick = (1993 - 1440) / 3 + pageContainer;
  } else if (screenWidth > 1200) {
    pageContainer = 41;
    scrollOnClick = (1993 - screenWidth) / 3 + pageContainer;
  } else if (screenWidth > 768) {
    pageContainer = 8;
    scrollOnClick = (1993 - screenWidth) / 3 + pageContainer;
  } else {
    pageContainer = 4;
    scrollOnClick = (1993 - screenWidth) / 6 + pageContainer;
  }
  console.log(screenWidth);

  oneStepScrolling = scrollOnClick;

 
  scrollRelativeToStart = scrollRelativeToStart + oneStepScrolling;

  cardsContainer.style.marginLeft = `${-scrollRelativeToStart}px`;

  
  
})

