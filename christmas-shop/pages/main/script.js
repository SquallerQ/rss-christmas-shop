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
const cardsContainer = document.querySelector(".slider__cards");
const leftButton = document.querySelector(".slider__buttons-left");
const rightButton = document.querySelector(".slider__buttons-right");

let scrollRelativeToStart = 0;
let scrollOnClick = 0;
let clickCounter = 0;
let clickCounterMax = 0;

function calculateScrollProgress(symbol) {
  const screenWidth = window.innerWidth;
  const containerWidth = 1993;
  let clickNeedToScrollEnd;
  let pageContainer;

  if (screenWidth > 1400) {
    clickNeedToScrollEnd = 3;
    pageContainer = 82;
    scrollOnClick =
      (containerWidth - 1440) / clickNeedToScrollEnd + pageContainer;
  } else if (screenWidth > 1200) {
    clickNeedToScrollEnd = 3;
    pageContainer = 82;
    scrollOnClick = (1993 - screenWidth) / clickNeedToScrollEnd + pageContainer;
  } else if (screenWidth > 768) {
    clickNeedToScrollEnd = 3;
    pageContainer = 8;
    scrollOnClick = (1993 - screenWidth) / clickNeedToScrollEnd + pageContainer;
  } else {
    clickNeedToScrollEnd = 6;
    pageContainer = 4;
    scrollOnClick = (1993 - screenWidth) / clickNeedToScrollEnd + pageContainer;
  }

  oneStepScrolling = Math.trunc(scrollOnClick);
  if (symbol === "+") {
    scrollRelativeToStart = scrollRelativeToStart - oneStepScrolling;
  } else {
    scrollRelativeToStart = scrollRelativeToStart + oneStepScrolling;
  }

  cardsContainer.style.marginLeft = `${-scrollRelativeToStart}px`;
}
function buttonsUpdate(maxClick) {
  // for Left button
  if (clickCounter === 0) {
    leftButton.classList.add("slider__button--disabled");
  } else {
    leftButton.classList.remove("slider__button--disabled");
  }
  // for Right button
  if (clickCounter === maxClick) {
    rightButton.classList.add("slider__button--disabled");
  } else {
    rightButton.classList.remove("slider__button--disabled");
  }
}

rightButton.addEventListener("click", function () {
  const _symbol = "-";
  const screenWidth = window.innerWidth;
  if (screenWidth > 768) {
    clickCounterMax = 3;
  } else {
    clickCounterMax = 6;
  }

  if (clickCounterMax > clickCounter) {
    clickCounter = clickCounter + 1;
    calculateScrollProgress(_symbol);
    buttonsUpdate(clickCounterMax);
  }
});

leftButton.addEventListener("click", function () {
  const _symbol = "+";
  if (clickCounter > 0) {
    clickCounter = clickCounter - 1;
    calculateScrollProgress(_symbol);
    buttonsUpdate();
  }
});

window.addEventListener("resize", function () {
  scrollRelativeToStart = 0;
  clickCounter = 0;
  cardsContainer.style.marginLeft = "0px";

  const screenWidth = window.innerWidth;
  clickCounterMax = screenWidth > 768 ? 3 : 6;

  buttonsUpdate(clickCounterMax);
});

// Timer
const NYDays = document.querySelector(".cta__timer-number--days");
const NYHours = document.querySelector(".cta__timer-number--hours");
const NYMinutes = document.querySelector(".cta__timer-number--minutes");
const NYSeconds = document.querySelector(".cta__timer-number--seconds");

function updateTimer() {
  const now = new Date();
  const newYear = new Date(Date.UTC(2025, 0, 1, 0, 0, 0, 0));
  const untilNY = newYear - now;

  const days = Math.floor(untilNY / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (untilNY % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((untilNY % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((untilNY % (1000 * 60)) / 1000);

  if (untilNY > 0) {
    NYDays.textContent = days;
    NYHours.textContent = hours;
    NYMinutes.textContent = minutes;
    NYSeconds.textContent = seconds;
  } else {
    NYDays.textContent = 0;
    NYHours.textContent = 0;
    NYMinutes.textContent = 0;
    NYSeconds.textContent = 0;
  }
}
setInterval(updateTimer, 1000);
updateTimer();

// Gifts
async function fetchCardsFromJSON() {
  try {
    const response = await fetch("../gifts.json");
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const cards = await response.json();
    displayCards(cards);
  } catch (error) {
    console.error(error);
  }
}

function displayCards(cards) {
  const randomNumbersArray = [];
  for (let i = 0; i < 4; i++) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const randomNumber = getRandomInt(cards.length);
    console.log(randomNumber);

    if (!randomNumbersArray.includes(randomNumber)) {
      randomNumbersArray.push(randomNumber);
    } else {
      i--
    }
  }
  console.log(randomNumbersArray);
}

fetchCardsFromJSON();
