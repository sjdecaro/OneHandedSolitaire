hand = []

exports.getNewHand = function (handSize, deck) {
  if(deck) {
    hand = deck.splice(0, handSize);
  }

  return hand;
}
