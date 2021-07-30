var Deck = require('./card-deck');
var Hand = require('./hand');

module.exports = class Game {
  constructor(handSize) {
    this.deck = new Deck();
    this.hand = new Hand(handSize, this.deck.cards);
  }

  playRound() {}
}
