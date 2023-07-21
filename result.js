// Get the user's score from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const score = parseInt(urlParams.get('score'));

// Display the user's score on the result page
document.getElementById("score").textContent = score;

// Function to show a fun message and emoji based on the user's score
function showResultMessage() {
  let message = '';
  let emoji = '';

  if (score === 0) {
    message = "Oops! You need to step up your skincare game.";
    emoji = "😬";
  } else if (score >= 1 && score <= 5) {
    message = "Not bad! You have some skincare knowledge.";
    emoji = "😊";
  } else if (score >= 6 && score <= 9) {
    message = "Great job! You're doing well with your skincare routine.";
    emoji = "👍";
  } else {
    message = "Wow! You're a skincare expert!";
    emoji = "🎉";
  }

  // Display the message and emoji on the result page
  document.getElementById("message").textContent = message;
  document.getElementById("emoji").textContent = emoji;
}

// Show the result message
showResultMessage();

// Event listener for the "Retake Quiz" button
document.getElementById("retake").addEventListener("click", () => {
  // Redirect the user back to the start of the quiz
  window.location.href = "index.html";
});
