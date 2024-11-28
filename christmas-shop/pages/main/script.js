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
const oneCard = document.querySelector(".slider__card");
const leftButton = document.querySelector(".slider__buttons-left");
const rightButton = document.querySelector(".slider__buttons-right");

let b = 0;
rightButton.addEventListener('click', function () {
  const screenWidth = window.screen.width;
  // const cardWidth = oneCard.offsetWidth;
  const sliderWidth = cardsContainer.offsetWidth;
  
  // console.log(sliderWidth);
  // console.log(screenWidth);

  const scroll = (1993 - screenWidth) / 4;
  let a = scroll;
  
  // console.log(screenWidth);
  // console.log(cardWidth);
  console.log(scroll);
  
  
  // if (screenWidth > 768) {
  //   a = screenWidth / 3 - 16;
  // }
  // console.log(b);
  
  // b = b + a;
  // cardsContainer.style.marginLeft = `${-b}px`
  cardsContainer.style.marginLeft = `${-a}px`;
  // console.log(a);
  // console.log(b);
  a = scroll + scroll;
  b = b + 135;
  
  
})

