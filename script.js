// script.js

const cards = document.querySelectorAll('.card');
const resultContainer = document.getElementById('result');
const resultMessage = document.getElementById('resultMessage');

function shuffleCards() {
  // Shuffle the cards array using the Fisher-Yates algorithm
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cards[i].innerHTML;
    cards[i].innerHTML = cards[j].innerHTML;
    cards[j].innerHTML = temp;
  }
}

function revealCard(cardNumber) {
  // Hide the deck and show the result container
  document.getElementById('deck').style.display = 'none';
  resultContainer.style.display = 'block';

  // Determine the result based on the card number
  let result;
  if (cardNumber === 1) {
    result = "You are destined for a relaxing beach vacation!";
  } else if (cardNumber === 2) {
    result = "You are meant to explore a vibrant city!";
  } else if (cardNumber === 3) {
    result = "You are going on an adventurous mountain trip!";
  }

  // Display the result message
  resultMessage.textContent = result;
}

function showDeck() {
  // Hide the result container and show the deck again
  document.getElementById('deck').style.display = 'flex';
  resultContainer.style.display = 'none';
}

// Shuffle the cards when the page loads
shuffleCards();


function backToMain() {
  window.location.href = "index.html";
}

