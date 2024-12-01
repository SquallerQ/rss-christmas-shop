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
async function fetchCardsFromJSON() {
  const response = await fetch("../gifts.json");
  try {
    if (!response.ok) {
      throw new Error("Error");
    } else {
      const cards = await response.json();
      displayCards(cards);
    }
  } catch (error) {
    console.error(error);
  }
}
fetchCardsFromJSON();

function displayCards(cards) {
  console.log(cards);

  
}




const allTabButtons = document.querySelectorAll("[data-tab]");
console.log(allTabButtons);
const allTabContent = document.querySelectorAll("[data-tab-content]");
console.log(allTabContent);
allTabButtons.forEach(function (item) {
  item.addEventListener('click', function() {
    allTabContent.forEach(function (item) {
      item.classList.add("gift__cards--hidden");
    });
  })
  
})
