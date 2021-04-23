var cardDeck = require('./../card-deck');

describe('Card deck', () => {
    const deckSize = 52;

    it('should be defined', () => {
        expect(cardDeck).toBeDefined();
    });

    it('should initialize a 52-card deck', () => {
        const expected = new Array(deckSize);
        const actual = cardDeck.getNewDeck();
        expect(actual.length).toBe(expected.length);
    });

    it('should not have any duplicate entries', () => {
        const actual = cardDeck.getNewDeck();
        const distinctCards = [...new Set(actual)];
        expect(distinctCards.length).toBe(deckSize);
    });

    it('should have all elements in a random order', () => {
        const actual = cardDeck.getNewDeck();
        const deckSize = 52;

        let sortedDeck = new Array(deckSize);

        for (i = 0; i < deckSize; i++) {
            let card = { suit: getSuit(i), value: getValue(i) };
            sortedDeck[i] = card;
        }

        expect(sortedDeck).not.toEqual(actual);
    });
});
