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
menuItemsList.forEach(function (item) {
  item.addEventListener("click", function () {
    // Close menu
    menuHeader.classList.remove("header__menu-list--active");
    // Turn off burger button
    burgerButton.classList.remove("burger-button--active");
    // Enable scroll
    bodyForScroll.style.overflow = "";
  });
});

// Slider
// const oneCard = document.querySelector(".slider__card");
// console.log(cardsContainer.offsetWidth);
// const pageContainer = document.querySelector(".container")
const cardsContainer = document.querySelector(".slider__cards");
const leftButton = document.querySelector(".slider__buttons-left");
const rightButton = document.querySelector(".slider__buttons-right");

let scrollRelativeToStart = 0;
let scrollOnClick = 0;

function calculateScrollProgress(symbol) {
  const screenWidth = window.innerWidth;
  const containerWidth = 1993;

  let pageContainer;

  if (screenWidth > 1400) {
    pageContainer = 41;
    scrollOnClick = (containerWidth - 1440) / 3 + pageContainer;
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

  oneStepScrolling = Math.trunc(scrollOnClick);
  if (symbol === '+') {
    scrollRelativeToStart = scrollRelativeToStart - oneStepScrolling;
    console.log('minus');
    
  } else {
    scrollRelativeToStart = scrollRelativeToStart + oneStepScrolling;
    console.log('plus');

  }

  console.log(screenWidth);
  
  console.log(oneStepScrolling);
  console.log(scrollRelativeToStart);
  cardsContainer.style.marginLeft = `${-scrollRelativeToStart}px`;
}

rightButton.addEventListener("click", function () {
  const _symbol = "-";
  calculateScrollProgress(_symbol);
});


leftButton.addEventListener("click", function () {
  const _symbol = '+'
  calculateScrollProgress(_symbol);
});





// leftButton.addEventListener("click", function () {
//   const screenWidth = window.screen.width;
//   // let clickCounter;
//   let pageContainer;
//   let scrollOnClick;
//   if (screenWidth > 1400) {
//     pageContainer = 41;
//     scrollOnClick = (1993 - 1440) / 3 + pageContainer;
//   } else if (screenWidth > 1200) {
//     pageContainer = 41;
//     scrollOnClick = (1993 - screenWidth) / 3 + pageContainer;
//   } else if (screenWidth > 768) {
//     pageContainer = 8;
//     scrollOnClick = (1993 - screenWidth) / 3 + pageContainer;
//   } else {
//     pageContainer = 4;
//     scrollOnClick = (1993 - screenWidth) / 6 + pageContainer;
//   }
//   console.log(screenWidth);

//   oneStepScrolling = scrollOnClick;

//   scrollRelativeToStart = scrollRelativeToStart + oneStepScrolling;
//   cardsContainer.style.marginLeft = `${scrollRelativeToStart}px`;
// });
