import { isPhoneNumber } from "../../../src";

describe("europe/ru", () => {
  const validCases: string[] = [
    "+74951234567",
    "+79567890123",
    "+79251234567",
    "+79012345678",
    "+79231234567",
    "+79567890123",
    "+79023456789",
    "+79231234567",
    "+79012345678",
    "+79023456789",
  ];
  const invalidCases: string[] = [
    "+749512",
    "+7956789012",
    "+792512",
    "+790123456",
    "+792312",
    "+7956789012",
    "+790234567",
    "+792312",
    "+790123456",
    "+790234567",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+7")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+7")).toBe(false);
        }
      );
    });
  });
});
