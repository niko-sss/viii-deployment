
import { expect } from "chai";
import clamp from "../src/clamp.js";


describe("lamp()", () => {
    it("Camel cases the given string", () => {
        expect(clamp(-10, -5, 5)).to.equal(-5)
    });
});