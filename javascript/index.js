var cardDeck = require('./card-deck');
const readline = require('readline-sync');

console.log(`Welcome! Let's play One-Handed Solitaire!`);

// Create a new, shuffled deck of cards.
const playDeck = cardDeck.getNewDeck();

// Draw the first 5 cards as the initial hand.
let hand = playDeck.splice(0, 5);

// Draw each remaining card from the deck.

while (playDeck.length > 0) {
    readline.question(`Hit Enter to draw a card.`, foo => {
        readline.close();
    });

    next_card = playDeck.splice(0, 1);
    hand = hand.concat(next_card);

    console.log("You drew the " + next_card[0].value + " of " + next_card[0].suit + ".");

    // TODO: Compare the last card drawn to the card 4 positions ahead of it.
    // If the same value, discard all 5 cards.
    // If the same suit, discard middle 3 cards.
    //   Once discarded, run these two comparisons again.
    // If hand size < 5, draw cards until hand size is 5.
    // If different, draw 1 card.

    // TODO: Repeat steps until all cards have been drawn.

}

if (hand.length > 0) {
    console.log("Aww, bummer, there are " + hand.length + " cards remaining. Try again!")
} else {
    console.log("No cards remaining! YOU WON!!!")
}