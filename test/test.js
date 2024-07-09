const assert = require('assert');

describe("file to be tested", () => {
    context("function to be tested", () => {
        before(() => {
            console.log("======>Before");
        })

        after(() => {
            console.log("======>After");
        })

        beforeEach(() => {
            console.log("======>Before Each");
        })

        afterEach(() => {
            console.log("======>After Each");
        })

        it("Should be something", () => {
            assert.equal(1, 1);
        });

        it('should be something else', () => {
            assert.deepEqual({ name: 'joe'}, { name: 'joe' });
        });

        it('this is a pending test');
    });

    context("another function", () => {
        it("should be something");
    });
});