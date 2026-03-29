
import { expect } from "chai";
import camelCase from "../src/camelCase.js";


describe("camelCase()", () => {
    it.skip("Camel cases the given string", () => {
        expect(camelCase("__FOO_BAR__")).to.equal('fooBar')
    });
});