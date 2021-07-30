var Deck = require('./../card-deck');
var Hand = require('./../hand');

describe('Hand', () => {
  it('should be defined', () => {
    const hand = new Hand(1, []);
    expect(hand).toBeDefined();
  });

  it('should draw a starting hand with the correct number of cards', () => {
    const handSize = 4;
    const deck = new Deck();
    const hand = new Hand(handSize, deck.cards);
    expect(hand.currentCards.length).toBe(handSize);
  });

  it('should draw a starting hand from a deck', () => {
    const handSize = 5;
    const deck = new Deck();
    const firstCards = deck.cards.slice(0, handSize);

    const hand = new Hand(handSize, deck.cards);
    expect(hand.currentCards).toEqual(firstCards);
    expect(deck.cards.length).toBe(52 - handSize);
  });

  it('should draw 1 card if hand length >= starting hand size', () => {
    const handSize = 5;
    const deck = new Deck();
    const firstCards = deck.cards.slice(0, handSize);
    const firstCardsPlusDraw = deck.cards.slice(0, handSize + 1);

    const hand = new Hand(handSize, deck.cards);
    expect(hand.currentCards.length).toBe(5);
    expect(hand.currentCards).toEqual(firstCards);

    hand.draw();
    expect(hand.currentCards.length).toBe(6);
    expect(hand.currentCards).toEqual(firstCardsPlusDraw);
    expect(deck.cards.length).toBe(52 - handSize - 1);
  });

  it('should draw up to the hand size if hand length < starting hand size', () => {
    const handSize = 5;
    const deck = new Deck();
    const drawnHand = deck.cards.slice(0, 3);
    drawnHand.push(deck.cards[5]);
    drawnHand.push(deck.cards[6]);

    const hand = new Hand(handSize, deck.cards);
    hand.currentCards.pop();
    hand.currentCards.pop();

    hand.draw();
    expect(hand.currentCards.length).toBe(5);
    expect(hand.currentCards).toEqual(drawnHand);
    expect(deck.cards.length).toBe(52 - handSize - 2);
  });
});
