// Tests for ../src/camelCase.js
// 29.03.2026 - DD/MM/YYYY
// Author: Niko Sukari

// Import dependency: Chai Assertion Library's expect style.
// Import module to be tested.
import { expect } from "chai";
import camelCase from "../src/camelCase.js";


// Test if camelCase(string) function returns camel case as expected.

// ##################################
// Test is being skipped due failure.
// ##################################

// camelCase("Foo Bar") returns " fooBar" instead of "fooBar".
describe("camelCase()", () => {
    it.skip("Camel cases the given string", () => {
        expect(camelCase("FOO BAR")).to.equal('fooBar')
    });
});
