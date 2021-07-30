var Game = require('./../game');

describe('Game', () => {
  it('is defined', () => {
    const game = new Game(1);
    expect(game).toBeDefined();
  });

  it('plays a round', () => {
    const game = new Game(5);
    game.playRound();
    expect(game.hand.currentCards).toBeDefined();
  });
});
