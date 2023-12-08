class Queue <Player> {
  private items: Player[] = [];

  enqueue(item: Player): void {
    this.items = [...this.items, item];
  }

  dequeue(): Player | undefined {
    return this._shift();
  }
  
  private _shift(): Player | undefined {
    if (this.items.length === 0) {
      return undefined;
    }

    if (this.items.length === 1) {
      const removedItem = this.items[0];
      this.items = [];
      return removedItem;
    }

    let tempArr: Player[] | undefined = [];
    const removedItem = this.items[0];
    for (let i = 1; i < this.items.length; i++) {
      tempArr = [...tempArr, this.items[i]];
    }

    this.items = tempArr;
    return removedItem;
  }
}

export default Queue;