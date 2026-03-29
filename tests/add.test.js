// Tests for ../src/add.js
// 29.03.2026 - DD/MM/YYYY
// Author: Niko Sukari

// Import dependency: Chai Assertion Library's expect style.
// Import module to be tested.
import { expect } from "chai";
import add from "../src/add.js";

// Test if function for addition:
// 1. returns correct result as number when adding a number to a number.
// 2. does not return false result as number when adding a number to a number.
// 3. does not return correct result as number when adding a stringified number to a stringified number.
// 4. does not throw an error when given 3 parameters as the source code is structured to ignore third parameter.
describe("add()", () => {
  it("adds two numbers correctly", () => {
    expect(add(3, 2)).to.equal(5);
  });
  it("not result 20 when adding 3 to 2", () => {
    expect(add(3, 2)).to.not.equal(20)
  });
  it("does not add string typed numbers", () => {
    expect(add("3", "2")).to.not.equal(5)
  });
  it("does not throw an error when 3rd parameter is given", () => {
    expect(() => add(3, 2, 1)).to.not.throw()
  });
  it("does not throw an error when one parameter of the two is undefined", () => {
    expect(() => add(undefined, 2)).to.not.throw()
    expect(() => add(2, undefined)).to.not.throw()
  });
  it("returns the defined parameter as result when one of the two parameters is defined and one is undefined", () => {
    expect(add(2, undefined)).to.equal(2)
    expect(add(undefined, 2)).to.equal(2)
  });
});
