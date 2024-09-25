import { isPhoneNumber } from "../../../src";

describe("europe/sm", () => {
  const validCases: string[] = [
    "+3783612345678",
    "+3783623456789",
    "3612345678",
    "3623456789",
  ];
  const invalidCases: string[] = [
    "+378512345678",
    "+378712345678",
    "+378812345678",
    "+378912345678",
    "+37861234567",

    "36123456789",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+378")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+378")).toBe(false);
        }
      );
    });
  });
});
