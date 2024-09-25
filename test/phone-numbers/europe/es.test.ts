import { isPhoneNumber } from "../../../src";

describe("europe/es", () => {
  const validCases: string[] = [
    "+34901234567",
    "+34901234568",
    "+34901234569",
    "+34901234570",
    "+34901234571",
    "+34901234572",
    "+34901234573",
    "+34901234574",
    "+34901234575",
    "+34901234576",
  ];
  const invalidCases: string[] = [
    "+3490123456",
    "+3490123456789",
    "+3490123456789012",
    "+349012345678901234",
    "+3490123456789012345",
    "+34901234567890123456",
    "+349012345678901234567",
    "+3490123456789012345678",
    "+34901234567890123456789",
    "+349012345678901234567890",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+34")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+34")).toBe(false);
        }
      );
    });
  });
});
