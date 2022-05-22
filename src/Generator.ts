export type TGeneratorOptions = {
  numbers: boolean;
  uppercase: boolean;
  lowercase: boolean;
  symbols: boolean,
  length: number;
  group: number;
};

type TRange = [number, number];
type TRanges = TRange[];
type TRangeCollection = TRanges[];

export class Generator {
  protected options: TGeneratorOptions = {
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: false,
    length: 12,
    group: 4,
  };

  public constructor(options?: Partial<TGeneratorOptions>) {
    this.options = Object.assign({}, this.options, options);
  }

  public generate() {
    const rangeCollections = this.getRangeCollection();
    const charMap = this.getCharMap(rangeCollections);
    const password = [];
    while (password.length < this.options.length) {
      const char = Math.random() * charMap.length | 0;
      password.push(charMap[char]);
    }
    if (!this.options.group) return password.join('');

    const re = new RegExp(`(.{1,${this.options.group}})`, 'g');
    return password.join('').replace(re, '$1-').slice(0, -1);
  }

  protected getRangeCollection(): TRangeCollection {
    const collection = [];
    if (this.options.numbers) collection.push(this.numbersRanges);
    if (this.options.uppercase) collection.push(this.uppercaseRanges);
    if (this.options.lowercase) collection.push(this.lowercaseRanges);
    if (this.options.symbols) collection.push(this.symbolsRanges);
    return collection;
  }

  private get numbersRanges(): TRanges {
    return [[48, 57]];
  }

  private get uppercaseRanges(): TRanges {
    return [[65, 90]];
  }

  private get lowercaseRanges(): TRanges {
    return [[97, 122]];
  }

  private get symbolsRanges(): TRanges {
    return [[33, 44], [58, 64], [94, 96], [123, 126]];
  }

  protected getCharMap(rangeCollection: TRangeCollection) {
    let map: string[] = [];
    rangeCollection.forEach(ranges => {
      map = map.concat(this.getCharsByRanges(ranges));
    });
    return map;
  }

  protected getCharsByRanges(ranges: TRanges) {
    const map: string[] = [];
    ranges.forEach(range => {
      for (let i = range[0]; i <= range[1]; i++) {
        map.push(String.fromCharCode(i));
      }
    });
    return map;
  }
}
