
exports.getNewDeck = function () {
    // Initialize the deck of cards in standard order
    const deckSize = 52;

    let deck = new Array(deckSize);

    for (i = 0; i < deckSize; i++) {
        deck[i] = i;
    }

    // Shuffle the deck
    for (idx = deck.length - 1; idx > 0; idx--) {
        const randomIndex = Math.floor(Math.random() * (deckSize));
        [deck[idx], deck[randomIndex]] = [deck[randomIndex], deck[idx]];
    }
    return deck;
}