function revealCard(cardIndex) {
  const cards = [
    "Practice gratitude and write down three things you are grateful for today.",
    "Take a walk in nature and enjoy the fresh air and scenery.",
    "Call or video chat with a friend or family member and catch up.",
    "Try a new recipe and cook a delicious meal for yourself or your loved ones.",
    "Do a random act of kindness for someone else, like paying for someone's coffee or holding the door open.",
   
    // Add more positive activities here
  ];
  const resultText = document.getElementById("resultText");
  resultText.textContent = cards[cardIndex];
}
