import { Card } from '../../components/Card';

type FilterCallback = (value: Card, index: number, array: Card[]) => boolean;

class Player {
  hand: Card[] = [];
  total: number = 0;

  constructor (hand: Card[], total: number) {
    this.hand = hand;
    this.total = total;
  }

  showHand() {
    console.log(this.hand);
  }

  addToHand(card: Card | null): void {
    if (card !== null) {
      this.hand = this._filter([...this.hand, card], Boolean);
    }
  }

  private _filter(array: Card[], callback: FilterCallback): Card[] {
    let result: Card[] = [];
  
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result = [...result, array[i]];
      }
    }
  
    return result;
  }
}

export default Player;