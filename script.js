
    // Array of random messages for each card
    const messages = [
      "You are adventurous and seeking new experiences!",
      "You are a creative and imaginative person!",
      "You are wise and have a strong intuition!",
      // Add more messages here as needed
    ];

    // Function to shuffle the cards randomly
    function shuffleCards() {
      const cardsContainer = document.querySelector(".card-container");
      const cards = Array.from(cardsContainer.children);

      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }

      cards.forEach((card) => {
        cardsContainer.appendChild(card);
      });
    }

    // Call the function to shuffle the cards when the page loads
    window.addEventListener("load", shuffleCards);

    function showCard(cardNumber) {
      const resultContainer = document.getElementById("resultContainer");
      const resultMessage = document.getElementById("resultMessage");

      // Hide all cards
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        card.style.display = "none";
      });

      // Show the selected card
      const selectedCard = document.querySelector(`.card:nth-child(${cardNumber})`);
      selectedCard.style.display = "block";

      // Show a random message on the selected card
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      resultMessage.textContent = randomMessage;

      // Show the result container
      resultContainer.style.display = "block";
    }

    function backToMain() {
      const resultContainer = document.getElementById("resultContainer");
      const cards = document.querySelectorAll(".card");

      // Hide the result container
      resultContainer.style.display = "none";

      // Show all cards again
      cards.forEach((card) => {
        card.style.display = "block";
      });
    }
