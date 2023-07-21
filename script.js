function revealCard(cardNumber) {
  // Replace the cardNumber with the actual content or activity for each card.
  let positiveActivities = {
    1: "Go for a nature walk and appreciate the beauty around you.",
    2: "Try a new hobby or activity that interests you.",
    // Add more positive activities for each card number.
  };

  let resultText = positiveActivities[cardNumber];
  if (resultText) {
    window.location.href = `result.html?activity=${encodeURIComponent(resultText)}`;
  }
}
