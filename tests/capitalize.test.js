
import { expect } from "chai";
import capitalize from "../src/capitalize.js";


describe("capitalize()", () => {
    it("capitalizes given string", () => {
        expect(capitalize("FREDEric")).to.equal("Frederic")
    });
});