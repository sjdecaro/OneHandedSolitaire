module.exports = class Card {
  constructor(index) {
    this.suit = this.getSuit(index);
    this.value = this.getValue(index);
  }

  getSuit(index) {
    let suitIndex = Math.floor(index / 13);

    switch(suitIndex) {
      case 0:
        return "Clubs";
      case 1:
        return "Diamonds";
      case 2:
        return "Hearts";
      case 3:
        return "Spades";
      default:
        return "";
    }
  }

  getValue(index) {
    let valueIndex = index % 13;

    switch(valueIndex) {
      case 0:
        return "Ace";
      case 10:
        return "Jack";
      case 11:
        return "Queen";
      case 12:
        return "King";
      default:
        return `${valueIndex + 1}`;
    }
  }
}
