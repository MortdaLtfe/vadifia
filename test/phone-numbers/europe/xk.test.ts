import { isPhoneNumber } from "../../../src";

describe("europe/xk", () => {
  const validCases: string[] = [
    "+38344123456",
    "+38344234567",
    "+38344345678",
    "+38344456789",
    "+38344567890",
    "+38344678901",
    "+38344789012",
    "+38344890123",
    "+38344901234",
  ];
  const invalidCases: string[] = [
    "+3834412345",
    "+3834423456789",
    "+38344345678901",
    "+383444567890123",
    "3834412345678",
    "+3834423456",
    "+3834434567890123",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+383")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+383")).toBe(false);
        }
      );
    });
  });
});
