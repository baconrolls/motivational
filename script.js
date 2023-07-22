// script.js

const cards = document.querySelectorAll('.card');
const resultContainer = document.querySelector('.result-container');
const selectedCard = document.getElementById('selectedCard');
const resultMessage = document.getElementById('result-text');
const indexTitle = document.getElementById('index-title');

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
  indexTitle.style.display = 'none';
  resultContainer.style.display = 'flex';

  // Display the selected card in the result container
  selectedCard.innerHTML = cards[cardNumber - 1].outerHTML;

  // Determine the result based on the card number
  let result;
  if (cardNumber === 1) {
    result = "Practice Gratitude: Take a few moments each day to reflect on the things you are grateful for. Keeping a gratitude journal or simply expressing appreciation for the little things can help shift your focus to the positive aspects of your life.";
  } else if (cardNumber === 2) {
    result = "Spread Kindness: Perform random acts of kindness for others, whether it's helping a stranger, complimenting a friend, or volunteering for a cause you care about. Kindness not only benefits others but also brings joy to your own heart.";
  } else if (cardNumber === 3) {
    result = "Stay Active: Engage in regular physical activity that you enjoy, whether it's going for a walk, dancing, or playing a sport. Exercise releases endorphins, which can boost your mood and overall well-being.";
  } else if (cardNumber === 4) {
    result = "Connect with Loved Ones: Spend quality time with family and friends, either in person or through virtual means. Building and maintaining strong relationships can provide emotional support and a sense of belonging.";
  } else if (cardNumber === 5) {
    result = "Practice Mindfulness: Take time to be present in the moment and practice mindfulness. Whether it's through meditation, deep breathing, or mindful activities like coloring or gardening, being mindful can reduce stress and increase feelings of calmness.";
  } else if (cardNumber === 6) {
    result = "Pursue Your Passions: Engage in activities that bring you joy and fulfillment. Whether it's pursuing a hobby, learning something new, or working towards a personal goal, following your passions can lead to a greater sense of purpose and satisfaction.";
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

// Event listener for the card click event
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    // Remove the "selected" class from all cards
    cards.forEach(c => c.classList.remove('selected'));

    // Add the "selected" class to the clicked card
    card.classList.add('selected');

    // Show the result and hide the index title, and pass the selected card to the showResult function
    revealCard(index + 1);
  });
});

function backToMain() {
  // Hide the result container and show the deck again
  document.getElementById('deck').style.display = 'flex';
  indexTitle.style.display = 'block';
  resultContainer.style.display = 'none';
}
