function showCard(selectedCard) {
  const cards = document.querySelectorAll('.card');
  const resultContainer = document.getElementById('resultContainer');
  const resultMessage = document.getElementById('resultMessage');
  
  cards.forEach((card, index) => {
    if (index === selectedCard - 1) {
      card.classList.add('active');
      resultContainer.style.display = 'block';
      resultMessage.textContent = getResultMessage(selectedCard);
    } else {
      card.classList.remove('active');
    }
  });
}

function getResultMessage(selectedCard) {
  // Add your result messages for each card here
  switch (selectedCard) {
    case 1:
      return "You chose Card 1! This represents good luck and positive energy.";
    case 2:
      return "You chose Card 2! This symbolizes a period of transition and change.";
    case 3:
      return "You chose Card 3! This signifies a time of new beginnings and opportunities.";
    default:
      return "";
  }
}
