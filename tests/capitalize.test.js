// Tests for ../src/capitalize.js
// 29.03.2026 - DD/MM/YYYY
// Author: Niko Sukari

// Import dependency: Chai Assertion Library's expect style.
// Import module to be tested.
import { expect } from "chai";
import capitalize from "../src/capitalize.js";

// Test if capitalize(string) function:
// 1. returns a string that is capitalized.
// 2. returns a string with first word capitalized if the given string has spaces.
// 3. does not throw an error when given parameter is type of null, undefined or a list.
describe("capitalize()", () => {
    it("capitalizes given string", () => {
        expect(capitalize("FREDEric")).to.equal("Frederic")
    });
    it("capitalizes the first word in the string", () => {
        expect(capitalize("FREDEric DOMinic")).to.equal("Frederic dominic")
    });
    it("does not throw an error when type is not a string", () => {
        expect(() => capitalize(null)).to.not.throw()
        expect(() => capitalize(undefined)).to.not.throw()
        expect(() => capitalize([1, "w", 3])).to.not.throw()
    });
});
