module.exports = class Hand {
  constructor(handSize, deck) {
    this.handSize = handSize;
    this.deck = deck;
    this.hand = [];
  }

  getNewHand() {
    this.hand = this.deck.splice(0, this.handSize);

    return this.hand;
  }
}
