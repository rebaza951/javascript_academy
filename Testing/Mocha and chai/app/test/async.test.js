const expect = require("chai").expect;
const axios = require("axios");

/*
    Mocha is able to handle synchronous and asynchronous tests.
    When you run a synchronous test, you can just pass it as an anonymous function to it and you don't have to do anything else: Mocha knows the test is over when the function returns.
    However, if you are running an asynchronous test, you have to tell Mocha that the test is asynchronous. There are two ways to do this:
*/

describe("async suite test cases", () => {
/*
    Return a promise:
    Mocha will wait for the promise to be resolved or rejected. If resolved, the test is successful. If rejected, the test failed.
*/
    it("when we use promises", () => {
        return axios.get("https://reqres.in/api/users/2")
        .then(res => {
            const expected = "janet.weaver@reqres.in";
            const result = res.data.data.email;
            expect(result).to.be.equal(expected)
        })
    })

/*
    Declare that the anonymous function you pass to it takes a parameter.
    Mocha will call your anonymous function with a SINGLE parameter which is a function you must call to indicate that your test is over.
    (This parameter is called done due to tradition. You could call it complete, cb or platypus and it would work just the same.)
    If you call done without a value, the test is successful.
    With a value, the test is a failure and the value should be an Error object or an object derived from Error.
*/
    it("when we use done", (done) => {
        axios.get("https://reqres.in/api/users/2")
        .then(res => {
            const expected = "janet.weaver@reqres.in";
            const result = res.data.data.email;
            expect(result).to.be.equal(expected)
            done();
        }).catch(err => {
            done(err);
        })
    })

    it("when we use async/await", async() => {
        const res = await axios.get("https://reqres.in/api/users/2");
        const expected = "janet.weaver@reqres.in";
        const result = res.data.data.email;
        expect(result).to.be.equal(expected);
    })
})