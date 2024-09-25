import { isPhoneNumber } from "../../../src";

describe("europe/cz", () => {
  const validCases: string[] = [
    "+420123456789",
    "+420123456780",
    "+420123456781",
    "+420123456782",
    "+420123456783",
    "+420123456784",
    "+420123456785",
    "+420123456786",
    "+420123456787",
    "+420123456788",
    "+420123456789",
  ];
  const invalidCases: string[] = [
    "+4201234567",
    "+42012345678901",
    "+42123456789",
    "+420123456789012",
    "+4201234567890123",
    "+42012345678901234",
    "+420123456789012345",
    "+4201234567890123456",
    "+42012345678901234567",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+420")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+420")).toBe(false);
        }
      );
    });
  });
});
