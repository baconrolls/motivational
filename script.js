let currentQuestion = 1;
let answers = [];

function showQuestion(questionNumber) {
  document.querySelectorAll('.question').forEach((question) => {
    question.style.display = 'none';
  });

  document.querySelector(`#question${questionNumber}`).style.display = 'block';
}

function nextQuestion(answer) {
  answers.push(answer);

  if (currentQuestion < 10) {
    currentQuestion++;
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('loading').style.display = 'block';

  setTimeout(() => {
    const resultText = document.getElementById('resultText');
    const totalA = answers.filter((answer) => answer === 'A').length;
    const totalB = answers.filter((answer) => answer === 'B').length;
    const totalC = answers.filter((answer) => answer === 'C').length;

    if (totalA > totalB && totalA > totalC) {
      resultText.innerText = 'Your Skincare Personality: You have Dry Skin!';
    } else if (totalB > totalA && totalB > totalC) {
      resultText.innerText = 'Your Skincare Personality: You have Oily Skin!';
    } else {
      resultText.innerText = 'Your Skincare Personality: You have Combination Skin!';
    }

    document.getElementById('loading').style.display = 'none';
    document.getElementById('result').style.display = 'block';
  }, 2000);
}

showQuestion(currentQuestion);
