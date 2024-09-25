import { isPhoneNumber } from "../../../src";

describe("europe/is", () => {
  const validCases: string[] = [
    "+3546141234",
    "+3547712345",
    "+3548945678",
    "+3545551234",
    "+3546667890",
    "+3547771234",
    "+3548884567",
    "+3549990123",
    "+3541234567",
    "+3548901234",
  ];
  const invalidCases: string[] = [
    "+35461234",
    "+354771234",
    "+354894567",
    "+354555123",
    "+354666789",
    "+354777123",
    "+354888456",
    "+35499901",
    "+35412345",
    "+35489012",
    "+354123456789012",
    "+3541234567890123",
    "+35412345678901234",
    "+354123456789012345",
    "+3541234567890123456",
    "+35412345678901234567",
    "+354123456789012345678",
    "+3541234567890123456789",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+354")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+354")).toBe(false);
        }
      );
    });
  });
});
