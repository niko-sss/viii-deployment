// Tests for ../src/clamp.js
// 29.03.2026 - DD/MM/YYYY
// Author: Niko Sukari

// Import dependency: Chai Assertion Library's expect style.
// Import module to be tested.
import { expect } from "chai";
import clamp from "../src/clamp.js";

// Test if clamp(number, lower, upper) function:
// 1. returns a correct value with restricted range determined in parameters.
// 2. does not throw an error if 4th parameter is given.
// 3. does not throw an error if only 2 parameters are given.
// 4. returns a value restricted by the given minimal value, eg. (-10, -5) returns
//    -5 as the function determines the lowest value.
describe("clamp()", () => {
    it("returns correct value for given parameters", () => {
        expect(clamp(-10, -5, 5)).to.equal(-5)
    });
    it("does not throw an error when given 4th parameter", () => {
        expect(() => clamp(-10, -5, 5, 100)).to.not.throw()
    });
    it("does not throw an error when a parameter is missing", () => {
        expect(() => clamp(-10, -5)).to.not.throw()
    });
    it("returns a minimal value when only 2 parameters are given", () => {
        expect(clamp(-10, -5)).to.equal(-5)
    });
});
