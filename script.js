function revealAnswer(card) {
  let answer;
  switch (card) {
    case 'card1':
      answer = "You should try yoga to relax and destress.";
      break;
    case 'card2':
      answer = "Go for a walk in nature to rejuvenate your mind.";
      break;
    // Add more cases for other cards here
    default:
      answer = "Select a card to reveal the positive activity.";
      break;
  }
  document.getElementById('result').textContent = answer;
}
