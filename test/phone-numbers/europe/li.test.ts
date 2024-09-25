import { isPhoneNumber } from "../../../src";

describe("europe/li", () => {
  const validCases: string[] = [
    "+4237123456",
    "+4237234567",
    "+4237345678",
    "+4237456789",
    "+4237567890",
    "+4237678901",
    "+4237789012",
    "+4237890123",
    "+4237123457",
    "+4237234568",
  ];
  const invalidCases: string[] = [
    "+423234567",
    "+420123456",
    "+421678901",
    "+4298765432112093",
    "421234567893303",
    "+426543210",
    "+42123456",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+423")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+423")).toBe(false);
        }
      );
    });
  });
});
