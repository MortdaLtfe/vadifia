import { isPhoneNumber } from "../../../src";

describe("europe/ie", () => {
  const validCases: string[] = [
    "+353912345678",
    "+353812345678",
    "+353762345678",
    "+353732345678",
    "+353642345678",
    "+353632345678",
    "+353522345678",
    "+353432345678",
    "+353342345678",
    "+353252345678",
  ];
  const invalidCases: string[] = [
    "+3531234567",

    "+35012345678",
    "+35301234567",
    "+353765432",
    "+3538765432",
    "+35312345",
    "35312345678",
    "+3532345678",
    "+353345678",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+353")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+353")).toBe(false);
        }
      );
    });
  });
});
