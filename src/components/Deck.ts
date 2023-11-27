import LinkedList from './LinkedList';
import { Suit, Rank, Card } from './Card';

class Deck {
  linkedList: LinkedList;

  constructor() {
    this.linkedList = new LinkedList();
    this._initializeDeck();
  }


  private _initializeDeck() {
    for (const suit of Object.keys(Suit)) {
      for (const rank of Object.keys(Rank)) {
        if (!isNaN(Number(suit)) && !isNaN(Number(rank))) {
          continue;
        }

        const newCard = new Card(
          Suit[suit as keyof typeof Suit],
          Rank[rank as keyof typeof Rank],
        );

        this.linkedList.addCard(newCard);
      }
    }
  }

  displayDeck() {
    this.linkedList.displayDeck();
  }

  shuffleDeck() {
    this.linkedList.shuffleDeck();
  }

  drawCard(): Card | null {
    return this.linkedList.drawCard();
  }
}

export default Deck;