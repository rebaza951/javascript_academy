const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
    test("should print null if they receive a no number", () => {
        const expected = null;
        const result = fizzbuzz("15");
        expect(result).toBe(expected);
    })

    test("should print 1 if they receive 1", () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(result).toBe(expected);
    })

    test("should print fizz if they receive a multiple of 3", () => {
        const expected = "fizz";
        const result = fizzbuzz(3);
        expect(result).toBe(expected);
    })

    test("should print buzz if they receive a multiple of 5", () => {
        const expected = "bazz";
        const result = fizzbuzz(5);
        expect(result).toBe(expected);
    })

    test("should print buzzbazz if they receive a multiple of 3 and 5", () => {
        const expected = "fizzbazz";
        const result = fizzbuzz(15);
        expect(result).toBe(expected);
    })

    test("should print 0 if they receive 0", () => {
        const expected = 0;
        const result = fizzbuzz(0);
        expect(result).toBe(expected);
    })
})