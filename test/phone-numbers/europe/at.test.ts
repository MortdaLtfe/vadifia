import { isPhoneNumber } from "../../../src";

describe("europe/at", () => {
  const validCases: string[] = [
    "+4312345678",
    "+43451234567",
    "+43698765432",
    "+43567890123",
    "+436123456789",
    "+43765432109",
    "+431098765432",
    "+431234567891",
    "+43654321098",
    "+431234567800",
  ];
  const invalidCases: string[] = [
    "+431234567",
    "+430123456",
    "+431678901",
    "+4398765432112093",
    "431234567893303",
    "+436543210",
    "+43123456",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+43")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+43")).toBe(false);
        }
      );
    });
  });
});
