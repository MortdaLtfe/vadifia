import { isPhoneNumber } from "../../../src";

describe("europe/tr", () => {
  const validCases: string[] = [
    "+905307654321",
    "+905307654322",
    "+905307654323",
    "+905307654324",
    "+905307654325",
    "+905307654326",
    "+905307654327",
    "+905307654328",
    "+905307654329",
    "+905307654330",
  ];
  const invalidCases: string[] = [
    "+9053076543",
    "+9053076543211",
    "+90530765432101",
    "+905307654321012",
    "+9053076543210123",
    "+90530765432101234",
    "+905307654321012345",
    "+9053076543210123456",
    "+90530765432101234567",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+90")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+90")).toBe(false);
        }
      );
    });
  });
});
