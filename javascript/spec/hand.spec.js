var cardDeck = require('./../card-deck');
var Hand = require('./../hand');

describe('Hand', () => {
  it('should be defined', () => {
    const hand = new Hand(1, []);
    expect(hand).toBeDefined();
  });

  it('should draw a starting hand with the correct number of cards', () => {
    const handSize = 4;
    const deck = cardDeck.getNewDeck();
    const hand = new Hand(handSize, deck);
    const startingHand = hand.getNewHand();
    expect(startingHand.length).toBe(handSize);
  });

  it('should draw a starting hand from a deck', () => {
    const handSize = 5;
    const deck = cardDeck.getNewDeck();
    const firstCards = deck.slice(0, handSize);

    const hand = new Hand(handSize, deck);
    const startingHand = hand.getNewHand(handSize, deck);
    expect(startingHand).toEqual(firstCards);
    expect(deck.length).toBe(52 - handSize);
  });
});
