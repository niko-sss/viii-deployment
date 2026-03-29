import { expect } from "chai";
import add from "../src/add.js";

describe("add()", () => {
  it("adds two numbers", () => {
    expect(add(3, 2)).to.equal(5);
  });
});