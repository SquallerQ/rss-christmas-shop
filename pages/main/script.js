// Burger
const menuHeader = document.querySelector(".header__menu-list");
const burgerButton = document.querySelector(".burger-button");
const bodyForScroll = document.querySelector("body");
const menuItemsList = document.querySelectorAll(".header__menu-item");

burgerButton.addEventListener("click", function () {
  if (!menuHeader.classList.contains("header__menu-list--active")) {
    menuHeader.classList.add("header__menu-list--active");
    burgerButton.classList.add("burger-button--active");
    bodyForScroll.style.overflow = "hidden";
  } else {
    menuHeader.classList.remove("header__menu-list--active");
    burgerButton.classList.remove("burger-button--active");
    bodyForScroll.style.overflow = "";
  }
});
menuItemsList.forEach(function (item) {
  item.addEventListener("click", function () {
    menuHeader.classList.remove("header__menu-list--active");
    burgerButton.classList.remove("burger-button--active");
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
  const newYear = new Date(Date.UTC(2026, 0, 1, 0, 0, 0, 0));
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
  const fourRandomNumbersArray = [];
  for (let i = 0; i < 4; i++) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const randomNumber = getRandomInt(cards.length);
    console.log(randomNumber);

    if (!fourRandomNumbersArray.includes(cards[randomNumber])) {
      fourRandomNumbersArray.push(cards[randomNumber]);
    } else {
      i--;
    }
  }
  const cardsContainer = document.querySelector(".best-gifts__cards");

  for (let i = 0; i < fourRandomNumbersArray.length; i++) {
    let cardSubtitleColorClass;
    let cardImagePath;
    if (fourRandomNumbersArray[i].category === "For Health") {
      cardSubtitleColorClass = "best-gifts__card-subtitle--health";
      cardImagePath = "../../assets/images/gift-for-health.png";
    } else if (fourRandomNumbersArray[i].category === "For Harmony") {
      cardSubtitleColorClass = "best-gifts__card-subtitle--harmony";
      cardImagePath = "../../assets/images/gift-for-harmony.png";
    } else {
      cardSubtitleColorClass = "";
      cardImagePath = "../../assets/images/gift-for-work.png";
    }

    const card = document.createElement("div");

    card.innerHTML = `<div class="best-gifts__card">
                  <div class="best-gifts__card-image">
                    <img src="${cardImagePath}" alt="card img">
                  </div>
                  <div class="best-gifts__card-info">

                    <h4 class="best-gifts__card-subtitle ${cardSubtitleColorClass}">${fourRandomNumbersArray[i].category}</h4>
                    <h3 class="best-gifts__card-title">${fourRandomNumbersArray[i].name}</h3>
                  </div>
                </div>`;

    cardsContainer.append(card);
                    card.addEventListener("click", function () {
                      openModal(fourRandomNumbersArray[i]);
                    });
  }
}

fetchCardsFromJSON();


// Modal
const modal = document.getElementById("modal");

const modalSubtitle = document.getElementById("modal-subtitle");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalLive = document.getElementById("rating__container--live");
const modalCreate = document.getElementById("rating__container--create");
const modalLove = document.getElementById("rating__container--love");
const modalDream = document.getElementById("rating__container--dream");

const closeModalBtn = document.querySelector(".modal-close");

function openModal(cardData) {
  console.log(cardData);

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollbarWidth + 'px';
  
  modal.style.display = "flex";

  modalSubtitle.textContent = cardData.category;
  if (cardData.category.toLowerCase() === "for work") {
    modalSubtitle.style.color = "#4361ff";
    modalImg.src = "../../assets/images/gift-for-work.png";
  } else if (cardData.category.toLowerCase() === "for health") {
    modalSubtitle.style.color = "#06a44f";
    modalImg.src = "../../assets/images/gift-for-health.png";
  } else if (cardData.category.toLowerCase() === "for harmony") {
    modalSubtitle.style.color = "#ff43f7";
    modalImg.src = "../../assets/images/gift-for-harmony.png";
  }
  modalTitle.textContent = cardData.name;
  modalDescription.textContent = cardData.description;
  modalLive.textContent = cardData.superpowers.live;
  modalCreate.textContent = cardData.superpowers.create;
  modalLove.textContent = cardData.superpowers.love;
  modalDream.textContent = cardData.superpowers.dream;

  let numberToStarDream = modalDream.textContent[1];
  let numberToStarLove = modalLove.textContent[1];
  let numberToStarCreate = modalCreate.textContent[1];
  let numberToStarLive = modalLive.textContent[1];
  console.log(numberToStarDream);

  const dreamStars = document.querySelectorAll(".dream");
  for (let i = 0; i < numberToStarDream; i++) {
    dreamStars[i].style.opacity = "1";
  }
  const loveStars = document.querySelectorAll(".love");
  for (let i = 0; i < numberToStarLove; i++) {
    loveStars[i].style.opacity = "1";
  }
  const createStars = document.querySelectorAll(".create");
  for (let i = 0; i < numberToStarCreate; i++) {
    createStars[i].style.opacity = "1";
  }

  const liveStars = document.querySelectorAll(".live");
  for (let i = 0; i < numberToStarLive; i++) {
    liveStars[i].style.opacity = "1";
  }

  document.body.classList.add("scroll-block");
}

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("scroll-block");
  
  document.body.style.paddingRight = '';

  const dreamStars = document.querySelectorAll(".dream");
  for (let i = 0; i < dreamStars.length; i++) {
    dreamStars[i].style.opacity = "0.1";
  }
  const loveStars = document.querySelectorAll(".love");
  for (let i = 0; i < loveStars.length; i++) {
    loveStars[i].style.opacity = "0.1";
  }
  const createStars = document.querySelectorAll(".create");
  for (let i = 0; i < createStars.length; i++) {
    createStars[i].style.opacity = "0.1";
  }

  const liveStars = document.querySelectorAll(".live");
  for (let i = 0; i < liveStars.length; i++) {
    liveStars[i].style.opacity = "0.1";
  }
}

closeModalBtn.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
