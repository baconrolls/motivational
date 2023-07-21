// Global variables
let currentQuestion = 1;
let score = 0;

// Function to show the next question
function showNextQuestion(nextQuestion) {
  const selectedAnswer = document.querySelector(`input[name=q${currentQuestion}]:checked`);
  if (!selectedAnswer) {
    alert("Please select an answer before proceeding to the next question.");
    return;
  }

  // Add score based on selected answer
  score += parseInt(selectedAnswer.value);

  // Hide the current question and show the next question
  document.getElementById(`question${currentQuestion}`).style.display = "none";
  document.getElementById(nextQuestion).style.display = "block";

  // Update current question
  currentQuestion++;
}

// Function to show the result
function showResult() {
  const selectedAnswer = document.querySelector(`input[name=q${currentQuestion}]:checked`);
  if (!selectedAnswer) {
    alert("Please select an answer before viewing the result.");
    return;
  }

  // Add score based on selected answer
  score += parseInt(selectedAnswer.value);

  // Hide the current question and show the result
  document.getElementById(`question${currentQuestion}`).style.display = "none";
  document.getElementById("result").style.display = "block";

  // Display the user's score
  document.getElementById("score").textContent = score;
}

// Event listeners for the "Next" buttons
document.getElementById("next1").addEventListener("click", () => showNextQuestion("question2"));
document.getElementById("next2").addEventListener("click", () => showNextQuestion("question3"));

// Add more event listeners for other questions

// Event listener for the "Result" button
document.getElementById("result-button").addEventListener("click", () => showResult());
