var Card = require('./../card');

describe('Card', () => {
  it('should be defined', () => {
    const card = new Card();
    expect(card).toBeDefined();
  });

  it('should return the correct suit for clubs', () => {
    const club = new Card(1);
    expect(club.suit).toBe('Clubs');
  });

  it('should return the correct suit for diamonds', () => {
    const diamond = new Card(14);
    expect(diamond.suit).toBe('Diamonds');
  });

  it('should return the correct suit for hearts', () => {
    const heart = new Card(27);
    expect(heart.suit).toBe('Hearts');
  });

  it('should return the correct suit for spades', () => {
    const spade = new Card(40);
    expect(spade.suit).toBe('Spades');
  });
});
