function showCard(selectedCard) {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    if (index === selectedCard - 1) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}
