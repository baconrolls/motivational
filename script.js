// Array of random messages for each card
    const messages = [
  "Practice daily affirmations to boost your self-confidence.",
  "Spend time in nature and appreciate the beauty around you.",
  "Treat yourself to a relaxing spa day or self-care routine.",
  "Set boundaries and prioritize your needs and well-being.",
  "Practice mindfulness and meditation to stay present in the moment.",
  "Engage in hobbies and activities that bring you joy.",
  "Surround yourself with supportive and positive people.",
  "Celebrate your achievements, no matter how small.",
  "Practice gratitude and focus on the positive aspects of your life.",
  "Write in a journal to express your thoughts and emotions.",
  "Take time for yourself and do things that make you happy.",
  "Learn to say no to things that don't align with your values.",
  "Forgive yourself for past mistakes and embrace self-compassion.",
  "Challenge negative self-talk and replace it with positive affirmations.",
  "Engage in regular exercise to boost your mood and energy.",
  "Nourish your body with healthy and nutritious foods.",
  "Set realistic and achievable goals to build a sense of accomplishment.",
  "Surround yourself with things that inspire and uplift you.",
  "Practice self-acceptance and embrace your uniqueness.",
  "Take breaks and practice self-care when you're feeling stressed.",
  "Learn to love and accept yourself unconditionally.",
  "Engage in acts of kindness and compassion towards yourself.",
  "Prioritize your mental and emotional well-being.",
  "Take time to reflect on your personal growth and progress.",
  "Invest in self-improvement and personal development.",
  "Celebrate your strengths and embrace your flaws as part of who you are.",
  "Remember to take breaks and rest when you need it.",
  "Practice deep breathing to calm your mind and reduce stress.",
  "Indulge in a soothing bath to relax your body and mind.",
  "Treat yourself to a favorite treat or dessert.",
  "Take a walk in nature and enjoy the fresh air.",
  "Read a book or watch a movie that brings you joy.",
  "Write in a journal to express your thoughts and emotions.",
  "Try out a new hobby or creative activity.",
  "Get a good night's sleep to recharge your energy.",
  "Practice mindfulness and stay present in the moment.",
  "Listen to your favorite music and dance like nobody's watching.",
  "Surround yourself with positive and supportive people.",
  "Say 'no' to things that drain your energy and set boundaries.",
  "Do something kind for yourself, like buying flowers or a small gift.",
  "Practice gratitude and focus on the positive aspects of your life.",
  "Spend quality time with loved ones who lift you up.",
  "Nourish your body with healthy and nutritious foods.",
  "Take time to appreciate your achievements, no matter how small.",
  "Practice self-acceptance and embrace your uniqueness.",
  "Learn to forgive yourself and practice self-compassion.",
  "Engage in regular physical activity to boost your mood.",
  "Create a cozy and comforting space for relaxation.",
  "Take a digital detox and disconnect from screens for a while.",
  "Engage in acts of kindness and compassion towards yourself.",
  "Prioritize your mental and emotional well-being.",
  "Take time to reflect on your personal growth and progress.",
  "Remember that it's okay to ask for help and support.",
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

    // Call the function to shuffle the cards after a brief delay when the page loads
    window.addEventListener("load", () => {
      setTimeout(shuffleCards, 1000); // Adjust the delay (in milliseconds) as needed
    });

    function showCard(cardNumber) {
      const resultContainer = document.getElementById("resultContainer");
      const resultMessage = document.getElementById("resultMessage");

      // Hide the <h2> element in the result view
  const resultTitle = document.getElementById("result-title");
  resultTitle.style.display = "none";

      // Hide all cards
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        card.style.display = "none";
     // Remove the onclick event from the card images
        card.removeAttribute("onclick");
      });

      // Show the selected card
      const selectedCard = document.querySelector(`.card:nth-child(${cardNumber})`);
      selectedCard.style.display = "block";
         // Resize the selected card's image
  const imageSize = "300px"; // Adjust the size as needed
  selectedCard.querySelector("img").style.width = imageSize;
  selectedCard.querySelector("img").style.height = "auto";
        
        const transform = "none";
  // Remove the transform effect (zoom) by setting it to "none"
  selectedCard.querySelector("img").style.transform = transform;

      // Show a random message on the selected card
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      resultMessage.textContent = randomMessage;

      // Show the result container
      resultContainer.style.display = "block";
    }

    function backToMain() {
  // Redirect to the index page
  window.location.href = "index.html";

  const resultContainer = document.getElementById("resultContainer");
  const cards = document.querySelectorAll(".card");

  // Hide the result container
  resultContainer.style.display = "none";

  // Show all cards again
  cards.forEach((card) => {
    card.style.display = "block";
    // Reattach the showCard function to the card images
    card.setAttribute("onclick", "showCard(" + card.dataset.cardNumber + ")");
  });
}

