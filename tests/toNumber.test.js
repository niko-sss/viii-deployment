
import { expect } from "chai";
import toNumber from "../src/toNumber.js";


describe("toNumber()", () => {
    it("returns a number of given parameter", () => {
        expect(toNumber(3.2)).to.equal(3.2)
    });
});