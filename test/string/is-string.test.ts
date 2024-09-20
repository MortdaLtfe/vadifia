import { isString } from "../../src";

describe("isString", () => {
  let validTests: string[] = [
    "Ahmed",
    "Mohammed",
    "Johny",
    "Michael",
    "Sarah",
    "Elizabeth",
    "David",
    "Olivia",
    "William",
    "James",
    "George",
    "Maryy",
    "Thomas",
    "Robert",
    "Richard",
    "Charles",
    "Christopher",
    "Matthew",
    "Joshua",
    "Nicholas",
  ];

  let invalidTests: any[] = [
    1,
    true,
    false,
    null,
    undefined,
    {},
    [],
    () => {},
    BigInt(1),
  ];

  describe("should return true for a string", () => {
    validTests.forEach((value) => {
      it(`should return true for ${value}`, () => {
        expect(isString(value)).toBe(true);
      });
    });
  });

  describe("should return false for a number", () => {
    invalidTests.forEach((value) => {
      it(`should return false for ${value || "symbol"}`, () => {
        expect(isString(value)).toBe(false);
      });
    });
  });
});
