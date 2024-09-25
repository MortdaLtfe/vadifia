import { isPhoneNumber } from "../../../src";

describe("europe/ua", () => {
  const validCases: string[] = [
    "+380501234567",
    "+380631234567",
    "+380941234567",
    "+380501234568",
    "+380631234569",
    "+380941234570",
    "+380501234571",
    "+380631234572",
    "+380941234573",
    "+380501234574",
  ];
  const invalidCases: string[] = [
    "+38050123456",
    "+3805012345678",
    "+38050123456789",
    "+3805012345678901",
    "+38050123456789012",
    "+380501234567890123",
    "+3805012345678901234",
    "+38050123456789012345",
    "+380501234567890123456",
    "+3805012345678901234567",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+380")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+380")).toBe(false);
        }
      );
    });
  });
});
