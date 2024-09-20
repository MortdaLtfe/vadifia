import { min } from "../../src";

describe("min function", () => {
  const validTests: [string, number][] = [
    ["Afghanistan", 15],
    ["Albania", 16],
    ["Algeria", 17],
    ["Andorra", 18],
    ["Angola", 19],
    ["Antigua and Barbuda", 20],
    ["Argentina", 21],
    ["Armenia", 22],
    ["Australia", 23],
    ["Austria", 24],
    ["Azerbaijan", 25],
    ["Bahamas", 26],
    ["Bahrain", 27],
    ["Bangladesh", 28],
    ["Barbados", 29],
    ["Belarus", 30],
    ["Belgium", 31],
    ["Belize", 32],
    ["Benin", 33],
    ["Bhutan", 34],
  ];

  const invalidTests: [string, number][] = [
    ["a", 1],
    ["ab", 1],
    ["Ahmed", 5],
    ["Mohammed", 5],
    ["Johny", 5],
    ["Michael", 5],
    ["Sarah", 5],
    ["Elizabeth", 5],
    ["David", 5],
    ["Olivia", 5],
    ["William", 5],
    ["James", 5],
    ["George", 5],
    ["Maryy", 5],
    ["Thomas", 5],
    ["Robert", 5],
    ["Richard", 5],
    ["Charles", 5],
    ["Christopher", 5],
    ["Matthew", 5],
    ["Joshua", 5],
    ["Nicholas", 5],
  ];

  describe("Valid cases", () => {
    validTests.forEach(([value, minmum]) => {
      it(`should return true for string "${value}" with minimum length ${minmum}`, () => {
        expect(min(value, minmum)).toBe(true);
      });
    });
  });

  describe("Invalid cases", () => {
    invalidTests.forEach(([value, minmum]) => {
      it(`should return false for string "${value}" with minimum length ${minmum}`, () => {
        expect(min(value, minmum)).toBe(false);
      });
    });
  });
});
