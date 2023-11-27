import Random from './Random';
import { Card } from './Card';

class CardNode {
  card: Card;
  next: CardNode | null;

  constructor(card: Card) {
    this.card = card;
    this.next = null;
  }
}

class LinkedList {
  head: CardNode | null;
  tail: CardNode | null;
  
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addCard(card: Card) {
    const newNode = new CardNode(card);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  }

  displayDeck() {
    let current = this.head;
    while (current) {
      current.card.displayCard();
      current = current.next;
    }
  }

  shuffleDeck() {
    if (!this.head || !this.head.next) {
      return;
    }

    let cards: Card[] = [];

    let current: CardNode | null = this.head;
    while (current) {
      cards = [...cards, current.card];
      current = current.next;
    }

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Random.numberGenerator(0, i);
      const temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }

    current = this.head;
    for(let i = 0; i < cards.length; i++) {
      if (current) {
        current.card = cards[i];
        current = current.next;
      }
    }
  }

  drawCard(): Card | null {
    if (!this.head) {
      console.log('No cards left in the deck.');
      return null;
    }

    const drawnCard = this.head.card;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }

    return drawnCard;
  }
}

export default LinkedList;