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
    if(this.currentCards.length < this.size) {
      while(this.currentCards.length < this.size) {
        this.currentCards.push(this.deck.splice(0, 1)[0]);
      }
    } else {
      this.currentCards.push(this.deck.splice(0, 1)[0]);
    }
  }

  compareAndDiscard() {
    const currentHandSize = this.currentCards.length;
    let cardsInPlay = this.currentCards.splice(currentHandSize - this.size, this.size);

    if(cardsInPlay[0].suit === cardsInPlay[this.size - 1].suit) {
      cardsInPlay.splice(1, 3);
    }

    this.currentCards = this.currentCards.concat(cardsInPlay);
  }
}
