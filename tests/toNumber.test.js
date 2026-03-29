// Tests for ../src/toNumber.js
// 29.03.2026 - DD/MM/YYYY
// Author: Niko Sukari

// Import dependency: Chai Assertion Library's expect style.
// Import module to be tested.
import { expect } from "chai";
import toNumber from "../src/toNumber.js";

// Test if toNumber(value) function:
// 1. returns a correct floating point numeral when floating point numeral is given.
// 2. returns a correct scientific numeral when a floating point numeral is given.
// 3. does not throw an error when wrong type of parameter is given. Types of
//    null, undefined and string are tested.
describe("toNumber()", () => {
    it("returns a floating point numeral as expected", () => {
        expect(toNumber(3.2)).to.equal(3.2)
    });
    it("returns a scientific numeral as floating point numeral as expected", () => {
        expect(toNumber(5e3)).to.equal(5000)
        expect(toNumber(5e-3)).to.equal(0.005)
    });
    it("does not throw an error when wrong type of parameter is given", () => {
        expect(() => toNumber(null)).to.not.throw()
        expect(() => toNumber(undefined)).to.not.throw()
        expect(() => toNumber("a")).to.not.throw()
    });
});
