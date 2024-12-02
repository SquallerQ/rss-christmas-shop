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

// Gift Cards
async function fetchCardsFromJSON(tabContainer, tabName) {
  const response = await fetch("../gifts.json");
  try {
    if (!response.ok) {
      throw new Error("Error");
    } else {
      const cards = await response.json();
      filteredCards = cards.filter(card => card.category.toLowerCase() === tabName)
      if (filteredCards.length > 0) {
        displayCards(filteredCards, tabContainer);
      } else {
        displayCards(cards, tabContainer); 
      }





    }
  } catch (error) {
    console.error(error);
  }
}
fetchCardsFromJSON();

function displayCards(cards, tabContainer) {
  const cardsContainer = document.querySelector(".gifts__cards");

  for (let i = 0; i < cards.length; i++) {
    let cardSubtitleColorClass;
    let cardImagePath;
    if (cards[i].category === "For Health") {
      cardSubtitleColorClass = "gifts__card-subtitle--health";
      cardImagePath = "../../assets/images/gift-for-health.png";
    } else if (cards[i].category === "For Harmony") {
      cardSubtitleColorClass = "gifts__card-subtitle--harmony";
      cardImagePath = "../../assets/images/gift-for-harmony.png";
    } else {
      cardSubtitleColorClass = "";
      cardImagePath = "../../assets/images/gift-for-work.png";
    }

    const card = document.createElement("div");

    card.innerHTML = `<div class="gifts__card">
                  <div class="gifts__card-image">
                    <img src="${cardImagePath}" alt="card img">
                  </div>
                  <div class="gifts__card-info">

                    <h4 class="gifts__card-subtitle ${cardSubtitleColorClass}">${cards[i].category}</h4>
                    <h3 class="gifts__card-title">${cards[i].name}</h3>
                  </div>
                </div>`;

                card.addEventListener("click", function () {
                  openModal(cards[i]);
                });
    if (tabContainer === undefined) {
      cardsContainer.append(card);
    } else {
      tabContainer.append(card);
    }
  }
}

const allTabButtons = document.querySelectorAll("[data-tab]");
const allTabContent = document.querySelectorAll("[data-tab-content]");
allTabButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    allTabButtons.forEach((button) => button.classList.remove("gift__tab--active"));
    this.classList.add("gift__tab--active");

    allTabContent.forEach(function (container) {
      container.classList.add("gift__cards--hidden");
    });
    const thisTabContent = document.querySelector("#" + this.dataset.tab);
    const buttonName = this.innerHTML;

    thisTabContent.classList.remove("gift__cards--hidden");
    thisTabContent.innerHTML = "";

    fetchCardsFromJSON(thisTabContent, buttonName);
  });
});


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

  modal.style.display = "block";

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
  modalLive.textContent = cardData.superpowers.live
  modalCreate.textContent = cardData.superpowers.create;
  modalLove.textContent = cardData.superpowers.love;
  modalDream.textContent = cardData.superpowers.dream;

  let numberToStarDream = modalDream.textContent[1]
  let numberToStarLove = modalLove.textContent[1]
  let numberToStarCreate = modalCreate.textContent[1]
  let numberToStarLive = modalLive.textContent[1]
  console.log(numberToStarDream);
  
  
  const dreamStars = document.querySelectorAll('.dream')
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
  numberToStar = ''
}

closeModalBtn.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
