function showCard(cardNumber) {
  const resultContainer = document.getElementById("resultContainer");
  const resultMessage = document.getElementById("resultMessage");
  const backButton = document.querySelector('.back-button');

  // Hide all cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.display = "none";
  });

  // Show the selected card
  const selectedCard = document.querySelector(`.card:nth-child(${cardNumber})`);
  selectedCard.style.display = "block";

  // Show the result message based on the selected card
  switch (cardNumber) {
    case 1:
      resultMessage.textContent = "You are adventurous and seeking new experiences!";
      break;
    case 2:
      resultMessage.textContent = "You are a creative and imaginative person!";
      break;
    case 3:
      resultMessage.textContent = "You are wise and have a strong intuition!";
      break;
    default:
      resultMessage.textContent = "Select a card to reveal your result!";
  }

  // Show the result container
  resultContainer.style.display = "block";
}
function backToMain() {
  const resultContainer = document.getElementById("resultContainer");
  const cards = document.querySelectorAll(".card");

  // Hide the "Back to Main" button on the main page
  document.getElementById("back-button").style.display = "none";
// Show the "Back to Main" button on the result page
  document.getElementById("back-button").style.display = "block";

  
// Function to shuffle the cards randomly
function shuffleCards() {
  const cardsContainer = document.querySelector(".card-container");
  for (let i = cardsContainer.children.length; i >= 0; i--) {
    cardsContainer.appendChild(cardsContainer.children[Math.random() * i | 0]);
  }
}

// Call the function to shuffle the cards when the page loads
window.addEventListener("load", shuffleCards);

  // Hide the result container
  resultContainer.style.display = "none";

  // Show all cards again
  cards.forEach((card) => {
    card.style.display = "block";
  });
}
