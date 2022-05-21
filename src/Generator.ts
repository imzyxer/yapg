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
        if (this.options.numbers) collection.push([[48, 57]] as TRanges);
        if (this.options.uppercase) collection.push([[65, 90]] as TRanges);
        if (this.options.lowercase) collection.push([[97, 122]] as TRanges);
        if (this.options.symbols) collection.push([[33, 46], [58, 64], [94, 96], [123, 126]] as TRanges);
        return collection;
    }

    protected getCharMap(rangeCollection: TRangeCollection) {
        const map: string[] = [];
        rangeCollection.forEach(ranges => {
            ranges.forEach(range => {
                for (let i = range[0]; i <= range[1]; i++) {
                    map.push(String.fromCharCode(i));
                }
            })
        })
        return map;
    }
}
