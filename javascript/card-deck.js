var Card = require('./card');

module.exports = class Deck {
  constructor() {
    this.cards = this.shuffleCards();
  }

  shuffleCards() {
    // Initialize the deck of cards in standard order
    const deckSize = 52;

    let deck = new Array(deckSize);

    for (let i = 0; i < deckSize; i++) {
      let card = new Card(i);
      deck[i] = card;
    }

    // Shuffle the deck
    for (let idx = deck.length - 1; idx > 0; idx--) {
      const randomIndex = Math.floor(Math.random() * (deckSize));
      [deck[idx], deck[randomIndex]] = [deck[randomIndex], deck[idx]];
    }

    return deck;
  }
}
