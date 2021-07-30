module.exports = class Hand {
  constructor(size, deck) {
    this.size = size;
    this.deck = deck;
    this.currentCards = this.drawNewHand();
  }

  drawNewHand() {
    this.currentCards = this.deck.splice(0, this.size);

    return this.currentCards;
  }

  draw() {
    this.currentCards.push(this.deck.splice(0, 1)[0]);
  }
}
