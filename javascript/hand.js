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
    let card1 = cardsInPlay[0];
    let card2 = cardsInPlay[this.size - 1];

    if(card1.suit === card2.suit) {
      cardsInPlay.splice(1, 3);
    }

    if(card1.value === card2.value) {
      cardsInPlay = [];
    }

    this.currentCards = this.currentCards.concat(cardsInPlay);
  }
}
