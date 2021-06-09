const { sum, sub, user } = require("../src/app");
const expect = require("chai").expect;

// BDD - Behavior Driven Development
describe("@v1 Suit Mathematics Operations", () => {
    // we use "describe to define blocks of test linked each other
    it("2 + 3 should return 5", () => {
        // each "it" element, represents a test
        const expected = 5;
        const result = sum(2,3);
        expect(result).to.be.equal(expected);
    })
})

context("@v1 Suit User services", () => {
    //
    it("should get user data", () => {
        // each "it" element, represents a test
        expect(typeof user().name).to.be.equal("string");
    })
})

// TDD
const { suite, test } = require("mocha");

suite("@v2 Suit User services", () => {
    //
    test("should get user data", () => {
        // each "it" element, represents a test
        expect(typeof user().name).to.be.equal("string");
    })
})