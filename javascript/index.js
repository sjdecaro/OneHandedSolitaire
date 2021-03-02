var cardDeck = require('./card-deck');
const readline = require('readline-sync');

console.log(`Welcome! Let's play One-Handed Solitaire!`);

// Create a new, shuffled deck of cards.
const playDeck = cardDeck.getNewDeck();

// Draw the first 5 cards as the initial hand.
let hand = playDeck.splice(0, 5);

// Draw each remaining card from the deck.

while (playDeck.length > 0) {
    readline.question(`Hit Enter to draw a card. `, foo => {
        readline.close();
    });

    next_card = playDeck.splice(0, 1)[0];
    hand.push(next_card);

    console.log("Your hand:");
    hand.forEach(x => console.log(x.value + " of " + x.suit));

    console.log("You drew the " + next_card.value + " of " + next_card.suit + ".");

    // TODO: Compare the last card drawn to the card 4 positions ahead of it.
    // If the same value, discard all 5 cards.
    // If the same suit, discard middle 3 cards.
    //   Once discarded, run these two comparisons again.
    // If hand size < 5, draw cards until hand size is 5.
    // If different, draw 1 card.

    comparison_card = hand[hand.length - 5];
    console.log("Checking the " + comparison_card.value + " of " + comparison_card.suit + "...");

    if (next_card.suit == comparison_card.suit) {
        console.log("Hey, the suits match! Discard the middle 3 cards.")
    } else if (next_card.value == comparison_card.value) {
        console.log("WOW, the values match!! Discard all 5 cards.")
    } else {
        console.log("Darn, no match. Keep going!");
    }

    // TODO: Repeat steps until all cards have been drawn.

}

if (hand.length > 0) {
    console.log("Aww, bummer, there are " + hand.length + " cards remaining. Try again!")
} else {
    console.log("No cards remaining! YOU WON!!!")
}