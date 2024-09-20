import { isInteger } from "../../src";

describe("isInteger", () => {
  describe("returns true for integers", () => {
    for (let i = 0; i < 100; i++) {
      const num = Math.floor(Math.random() * 200) - 100;
      it(`returns true for ${num}`, () => {
        expect(isInteger(num)).toBe(true);
      });
    }
  });

  describe("returns false for non-integer numbers", () => {
    for (let i = 0; i < 100; i++) {
      const num = Math.random() * 200 - 100;
      if (num % 1 !== 0) {
        it(`returns false for ${num}`, () => {
          expect(isInteger(num)).toBe(false);
        });
      }
    }
  });

  describe("returns false for non-number values", () => {
    const nonNumberValues = [
      null,
      undefined,
      "hello",
      "123",
      true,
      false,
      {},
      [],
    ];
    nonNumberValues.forEach((value) => {
      it(`returns false for ${value}`, () => {
        expect(isInteger(value)).toBe(false);
      });
    });
  });
});
