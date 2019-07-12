var cardDeck = require('./card-deck');

console.log(`Welcome! Let's play One-Handed Solitaire!`);

// TODO: Create a new, shuffled deck of cards.
const playDeck = cardDeck.getNewDeck();
console.log(playDeck);

// TODO: Draw the first 5 cards as the initial hand.

// TODO: Compare the last card drawn to the card 4 positions ahead of it.
// If the same value, discard all 5 cards.
// If the same suit, discard middle 3 cards.
//   Once discarded, run these two comparisons again.
// If hand size < 5, draw cards until hand size is 5.
// If different, draw 1 card.

// TODO: Repeat steps until all cards have been drawn.

// TODO: Return a message letting the player know if they have won or lost.