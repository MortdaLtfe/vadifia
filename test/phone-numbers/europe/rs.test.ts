import { isPhoneNumber } from "../../../src";

describe("europe/rs", () => {
  const validCases: string[] = [
    "+381451234567",
    "+381698765432",
    "+381567890123",
    "+381765432109",
    "+381234567891",
    "+381654321098",
    "+381234567800",
  ];
  const invalidCases: string[] = [
    "+381234567",
    "+380123456",
    "+381678901",
    "+3898765432112093",
    "381234567893303",
    "+3816543210",
    "+38123456",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+381")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+381")).toBe(false);
        }
      );
    });
  });
});
