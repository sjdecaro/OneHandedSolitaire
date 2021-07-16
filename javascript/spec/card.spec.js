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

  it('should return the correct value for aces', () => {
    const aceOfClubs = new Card(0);
    expect(aceOfClubs.suit).toBe('Clubs');
    expect(aceOfClubs.value).toBe('Ace');
  });

  it('should return the correct value for jacks', () => {
    const jackOfDiamonds = new Card(23);
    expect(jackOfDiamonds.suit).toBe('Diamonds');
    expect(jackOfDiamonds.value).toBe('Jack');
  });

  it('should return the correct value for queens', () => {
    const queenOfHearts = new Card(37);
    expect(queenOfHearts.suit).toBe('Hearts');
    expect(queenOfHearts.value).toBe('Queen');
  });

  it('should return the correct value for kings', () => {
    const kingOfSpades = new Card(51);
    expect(kingOfSpades.suit).toBe('Spades');
    expect(kingOfSpades.value).toBe('King');
  });

  it('should return the numeric value for non-special cards', () => {
    const twoOfDiamonds = new Card(14);
    expect(twoOfDiamonds.suit).toBe('Diamonds');
    expect(twoOfDiamonds.value).toBe('2');
  });
});
