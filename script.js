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

  if (currentQuestion <= 2) {
    document.getElementById('question' + currentQuestion).style.display = 'block';
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('loading').style.display = 'block';
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';

    let resultText = '';

    if (scoreA >= scoreB && scoreA >= scoreC) {
      resultText = 'You are a Beach Resort Lover!';
    } else if (scoreB >= scoreA && scoreB >= scoreC) {
      resultText = 'You are an Adventure Seeker in the Mountains!';
    } else {
      resultText = 'You are a Cultural City Explorer!';
    }

    document.getElementById('resultText').innerText = resultText;
    document.getElementById('result').style.display = 'block';
  }, 2000);
}
