hand = []

exports.getNewHand = function (handSize) {
  for (i = 0; i < handSize; i++) {
    hand[i] = i;
  }

  return hand;
}
