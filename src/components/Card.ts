enum Suit {
  Spades = "Spades",
  Diamonds = "Diamonds",
  Clubs = "Clubs",
  Hearts = "Hearts",
}

enum Rank {
  Ace = "Ace",
  Two = "Two",
  Three = "Three",
  Four = "Four",
  Five = "Five",
  Six = "Six",
  Seven = "Seven",
  Eight = "Eight",
  Nine = "Nine",
  Ten = "Ten",
  Jack = "Jack",
  Queen = "Queen",
  King = "King",
}

class Card {
  suit: Suit;
  rank: Rank;

  constructor(suit: Suit, rank: Rank) {
    this.suit = suit;
    this.rank = rank;
  }

  displayCard() {
    console.log(`${this.rank} of ${this.suit}`);
  }
}

export { Suit, Rank, Card };