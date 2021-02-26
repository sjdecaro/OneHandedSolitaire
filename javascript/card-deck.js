exports.getNewDeck = function () {
    // Initialize the deck of cards in standard order
    const deckSize = 52;

    let deck = new Array(deckSize);

    for (i = 0; i < deckSize; i++) {
        let card = { suit: getSuit(i), value: getValue(i) };
        deck[i] = card;
    }

    // Shuffle the deck
    for (idx = deck.length - 1; idx > 0; idx--) {
        const randomIndex = Math.floor(Math.random() * (deckSize));
        [deck[idx], deck[randomIndex]] = [deck[randomIndex], deck[idx]];
    }

    return deck;
}

getSuit = function (idx) {
    suit = "";

    if (idx < 13) {
        suit = "Clubs";
    } 
    else if (idx < 26) {
        suit = "Diamonds";
    }
    else if (idx < 39) {
        suit = "Hearts";
    }
    else {
        suit = "Spades";
    }

    return suit;
}

getValue = function(idx) {
    position = idx % 13;
    value = "";

    if (position == 0) {
        value = "A";
    }
    else if (position == 10) {
        value = "J";
    }
    else if (position == 11) {
        value = "Q";
    }
    else if (position == 12) {
        value = "K";
    }
    else {
        value = position.toString();
    }

    return value;
}