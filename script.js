let scoreA = 0;
let scoreB = 0;
let scoreC = 0;
let currentQuestion = 1;

function selectAnswer(answer) {
  if (answer === 'A') {
    scoreA++;
  } else if (answer === 'B') {
    scoreB++;
  } else if (answer === 'C') {
    scoreC++;
  }

  showNextQuestion();
}

function showNextQuestion() {
  document.getElementById('question' + currentQuestion).style.display = 'none';
  currentQuestion++;

  if (currentQuestion <= 10) {
    document.getElementById('question' + currentQuestion).style.display = 'block';
  } else {
    showResult();
  }
}

function showResult
