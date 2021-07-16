var hand = require('./../hand');

describe('Hand', () => {
  it('should be defined', () => {
    expect(hand).toBeDefined();
  });

  it('should draw a starting hand with the correct number of cards', () => {
    const handSize = 4;
    const startingHand = hand.getNewHand(handSize);
    expect(startingHand.length).toBe(handSize);
  });
});
