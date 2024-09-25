import { isPhoneNumber } from "../../../src";

describe("europe/me", () => {
  const validCases: string[] = [
    "+38267890123",
    "+38261234567",
    "+38264567890",
    "+38263456789",
    "+38263901234",
    "+38262345678",
    "+38269123456",
    "+38261234567",
    "+38267890123",
    "+38261234567",
  ];
  const invalidCases: string[] = [
    "+3826789012",
    "+3826123456",
    "+3826456789",

    "+3826390123",
    "+3826234567",
    "+3826912345",
    "+3826123456",

    "+3826123456",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+382")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+382")).toBe(false);
        }
      );
    });
  });
});
