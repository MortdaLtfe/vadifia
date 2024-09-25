import { isPhoneNumber } from "../../../src";

describe("europe/lv", () => {
  const validCases: string[] = [
    "+37121234567",
    "+37122345678",
    "+37123456789",
    "+37124567890",
    "+37125678901",
    "+37126789012",
    "+37127890123",
    "+37128901234",
    "+37121234568",
    "+37122345679",
  ];
  const invalidCases: string[] = [
    "+37131234567",
    "+37141234567",
    "+37151234567",
    "+37161234567",
    "+37172345678",
    "+37181234567",
    "+37191234567",
    "+37021234567",
    "+37112345678",
    "+3712234567",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+371")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+371")).toBe(false);
        }
      );
    });
  });
});
