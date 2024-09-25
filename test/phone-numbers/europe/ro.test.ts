import { isPhoneNumber } from "../../../src";

describe("europe/ro", () => {
  const validCases: string[] = [
    "+40712345678",
    "+40723456789",
    "+40734567890",
    "+40745678901",
    "+40756789012",
    "+40767890123",
    "+40778901234",
    "+40789012345",
    "+40791234567",
    "+40702345678",
  ];
  const invalidCases: string[] = [
    "+40612345678",
    "+40812345678",
    "+40912345678",
    "+4071234567",
    "+407234567890",
    "+40123456789",
    "+4073456789",
    "+40512345678",
    "+4077123456",
  ];

  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+40")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+40")).toBe(false);
      });
    });
  });
});
