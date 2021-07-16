module.exports = class Card {
  constructor(index) {
    this.suit = this.getSuit(index);
  }

  getSuit(index) {
    let suitIndex = index / 13;

    if(Math.floor(suitIndex) == 0) {
      return "Clubs";
    }

    if(Math.floor(suitIndex) == 1) {
      return "Diamonds";
    }

    if(Math.floor(suitIndex) == 2) {
      return "Hearts";
    }

    if(Math.floor(suitIndex) == 3) {
      return "Spades";
    }
  }
}
