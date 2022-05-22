import Generator from '../src';

const pgProto = Object.getPrototypeOf(new Generator());
const numbers = pgProto.getCharsByRanges(pgProto.numbersRanges).join('');
const reNumbers = new RegExp(`[${numbers}]+`);
const uppercase = pgProto.getCharsByRanges(pgProto.uppercaseRanges).join('');
const reUppercase = new RegExp(`[${uppercase}]+`);
const lowercase = pgProto.getCharsByRanges(pgProto.lowercaseRanges).join('');
const reLowercase = new RegExp(`[${lowercase}]+`);
const symbols = pgProto.getCharsByRanges(pgProto.symbolsRanges).join('');
const reSymbols = new RegExp(`[${symbols}]+`);

describe("Yet another password generator test", () => {
  describe("Generate password by default", () => {
    const pg = new Generator();
    const password = pg.generate();

    it('Default length', () => expect(password.length).toBe(12 + 2));
    it('Contains numbers', () => expect(password).toMatch(reNumbers));
    it('Contains uppercase', () => expect(password).toMatch(reUppercase));
    it('Contains lowercase', () => expect(password).toMatch(reLowercase));
    it('Does not contains symbols', () => expect(password).not.toMatch(reSymbols));
    it('Contains 3 groups', () => expect(password.split('-').length).toBe(3));
  });
  describe("Generate password by usual options", () => {
    const pg = new Generator({
      numbers: true,
      uppercase: true,
      lowercase: true,
      symbols: true,
      length: 10,
      group: 0,
    });
    const password = pg.generate();

    it('Length have custom value', () => expect(password.length).toBe(10));
    it('Contains numbers', () => expect(password).toMatch(reNumbers));
    it('Contains uppercase', () => expect(password).toMatch(reUppercase));
    it('Contains lowercase', () => expect(password).toMatch(reLowercase));
    it('Contains symbols', () => expect(password).toMatch(reSymbols));
    it('Does not contains groups', () => expect(password.split('-').length).toBe(1));
  });
});
