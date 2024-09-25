import { isPhoneNumber } from "../../../src";

describe("europe/ee", () => {
  const validCases: string[] = [
    "+3721234567",
    "+3725123456",
    "+3726123456",
    "+3727123456",
    "+3728123456",
    "+3729123456",
    "+3720123456",
    "+3721123456",
    "+3722123456",
    "+3723123456",
  ];
  const invalidCases: string[] = [
    "+372123456",
    "+372123456789",
    "+3731234567",
    "+37212345678901",
    "+372123456789012",
    "+3721234567890123",
    "+37212345678901234",
    "+372123456789012345",
    "+3721234567890123456",
    "+37212345678901234567",
    "+372123456789012345678",
    "+3721234567890123456789",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+372")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+372")).toBe(false);
        }
      );
    });
  });
});
