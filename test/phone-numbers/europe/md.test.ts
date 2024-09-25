import { isPhoneNumber } from "../../../src";

describe("europe/md", () => {
  const validCases: string[] = [
    "+37361234567",
    "+37362345678",
    "+37363456789",
    "+37364567890",
    "+37365678901",
    "+37366789012",
    "+37367890123",
    "+37378901234",
    "+37371234567",
    "+37372345678",
  ];
  const invalidCases: string[] = [
    "+37351234567",
    "+37381234567",
    "+37391234567",
    "+37261234567",
    "+37351234567",
    "+37322345678",
    "+37312345678",
    "+373612345678",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+373")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+373")).toBe(false);
        }
      );
    });
  });
});
