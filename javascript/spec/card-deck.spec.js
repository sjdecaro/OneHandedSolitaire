var Deck = require('./../card-deck');
var Card = require('./../card');

describe('Card deck', () => {
  const deckSize = 52;

  it('should be defined', () => {
    const cardDeck = new Deck();
    expect(cardDeck).toBeDefined();
  });

  it('should initialize a 52-card deck', () => {
    const expected = new Array(deckSize);
    const deck = new Deck();
    expect(deck.cards.length).toBe(expected.length);
  });

  it('should not have any duplicate entries', () => {
    const deck = new Deck();
    const distinctCards = [...new Set(deck.cards)];
    expect(distinctCards.length).toBe(deckSize);
  });

  it('should have all elements in a different order', () => {
    const deck = new Deck();
    const deckSize = 52;

    let sortedDeck = new Array(deckSize);

    for (i = 0; i < deckSize; i++) {
      let card = new Card(i);
      sortedDeck[i] = card;
    }

    expect(sortedDeck).not.toEqual(deck.cards);
  });
});
