var hand = require('./../hand');
var cardDeck = require('./../card-deck');

describe('Hand', () => {
  it('should be defined', () => {
    expect(hand).toBeDefined();
  });

  it('should draw a starting hand with the correct number of cards', () => {
    const handSize = 4;
    const deck = cardDeck.getNewDeck();
    const startingHand = hand.getNewHand(handSize, deck);
    expect(startingHand.length).toBe(handSize);
  });

  it('should draw a starting hand from a deck', () => {
    const handSize = 5;
    const deck = cardDeck.getNewDeck();

    const firstCards = deck.slice(0, handSize);
    const startingHand = hand.getNewHand(handSize, deck);
    expect(startingHand).toEqual(firstCards);
    expect(deck.length).toBe(52 - handSize);
  });
});
