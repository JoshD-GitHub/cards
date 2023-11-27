class Random {
  private static seed: number = Date.now();

  private static _lcg(): number {
    const a = 1664525;
    const c = 1013904223;
    this.seed = (a * this.seed + c) % 2 ** 32;

    return this.seed / 2 ** 32;
  }

  private static _floor(value: number): number {
    if (value < 0 && value % 1 !== 0) {
      value = value - 1;
    }

    value = value | 0;

    return value | 0;
  }

  static numberGenerator(min: number, max: number): number {
    min = min || 0;
    const range = (max || 0) - min;

    return min + this._floor(this._lcg() * (range + 1));
  }
}

export default Random;