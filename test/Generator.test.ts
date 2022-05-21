import Generator from '../src';

describe("Testing yet another password generator", () => {
    test("pwassword 123", () => {
        const passgen = new Generator();
        expect(passgen.generate()).toEqual('123');
    });
});
