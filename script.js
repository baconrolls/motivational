
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
];

function showResult(cardNumber) {
      const resultContainer = document.getElementById("resultContainer");
      const resultMessage = document.getElementById("resultMessage");

      // Show the result message based on the selected card
      resultMessage.textContent = messages[cardNumber];

      // Show the result container
      resultContainer.style.display = "block";
    }

    function backToMain() {
      const resultContainer = document.getElementById("resultContainer");
      resultContainer.style.display = "none";
    }
