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
async function fetchCardsFromJSON(container, buttonName) {
  console.log(container);
  console.log(buttonName);
  

  const response = await fetch("../gifts.json");
  try {
    if (!response.ok) {
      throw new Error("Error");
    } else {
      const cards = await response.json();
      filteredCards = cards.filter(card => card.category.toLowerCase() === buttonName)
      if (filteredCards.length > 0) {
        displayCards(filteredCards, container);
        // displayCards(cards, container);
      } else {
        displayCards(cards, container);
        
      }
      // if (buttonName === 'for work') {
      //   console.log(true);
      //   displayCards(filteredCards, container);
        
      // } else if (buttonName === "for health") {
      // }
    }
  } catch (error) {
    console.error(error);
  }
}
fetchCardsFromJSON();

function displayCards(cards, container) {
  const cardsContainer = document.querySelector(".gifts__cards");
  // const cardsContainer = document.getElementById(`tab-${id}`);
  console.log(cardsContainer);

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

    if (container === undefined) {
      cardsContainer.append(card);
    } else {
      container.append(card);
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
     console.log(buttonName);
     
    console.log(thisTabContent);

    thisTabContent.classList.remove("gift__cards--hidden");

    thisTabContent.innerHTML = "";

    fetchCardsFromJSON(thisTabContent, buttonName);
  });
});
