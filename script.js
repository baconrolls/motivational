function revealCard(cardIndex) {
  const cards = [
    "Practice gratitude and write down three things you are grateful for today.",
    "Take a walk in nature and enjoy the fresh air and scenery.",
    "Call or video chat with a friend or family member and catch up.",
    // Add more positive activities here
  ];
  const resultText = document.getElementById("resultText");
  resultText.textContent = cards[cardIndex];
}
