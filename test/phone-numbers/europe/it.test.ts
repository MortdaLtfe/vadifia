import { isPhoneNumber } from "../../../src";

describe("europe/it", () => {
  const validCases: string[] = [
    "+390123456789",
    "+391234567890",
    "+392345678901",
    "+393456789012",
    "+394567890123",
    "+395678901234",
    "+396789012345",
    "+397890123456",
    "+398901234567",
    "+399012345678",
  ];
  const invalidCases: string[] = [
    "+3901234567",
    "+39012345678901",
    "+390123456789012",
    "+3901234567890123",
    "+39012345678901234",
    "+390123456789012345",
    "+3901234567890123456",
    "+39012345678901234567",
    "+390123456789012345678",
    "+3901234567890123456789",
    "+39012345678901234567890",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+39")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+39")).toBe(false);
        }
      );
    });
  });
});
