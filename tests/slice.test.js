// Tests for ../src/slice.js
// 29.03.2026 - DD/MM/YYYY
// Author: Niko Sukari

// Import dependency: Chai Assertion Library's expect style.
// Import module to be tested.
import { expect } from "chai";
import slice from "../src/slice.js";

// Test if slice(array, start, end) function:
// 1. returns correctly sliced array when start point and end point of the slice is
//    also given as parameter.
// 2. does not throw an error if 3rd parameter (end point of slice) is not given.
// 3. returns correctly if 3rd parameter (end point of slice) is not given.
// 4. returns the given array when no slicing points are given.
describe("slice()", () => {
    it("returns correct value for given parameters", () => {
        expect(slice([1, 2, 3, 4, 5], 2, 4)).to.deep.equal([3, 4])
    });
    it("does not throw an error when only 2 parameters are given (end point not given)", () => {
        expect(() => slice([1, 2, 3, 4, 5], 2)).to.not.throw()
    });
    it("returns correct calue when last parameter (end point) is not given", () => {
        expect(slice([1, 2, 3, 4, 5], 2)).to.deep.equal([3, 4, 5])
    });
    it("returns unsliced array when only first parameter (array) is given", () => {
        expect(slice([1, 2, 3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5])
    });
});
