import { isPhoneNumber } from "../../../src";

describe("europe/lt", () => {
  const validCases: string[] = [
    "+37061234567",
    "+37061234568",
    "+37061234569",
    "+37061234570",
    "+37061234571",
    "+37061234572",
    "+37061234573",
    "+37061234574",
    "+37061234575",
    "+37061234576",
  ];
  const invalidCases: string[] = [
    "+3706123456",
    "+370612345678",
    "+37061234567890",
    "+3706123456789012",
    "+370612345678901234",
    "+3706123456789012345",
    "+37061234567890123456",
    "+370612345678901234567",
    "+3706123456789012345678",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+370")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+370")).toBe(false);
        }
      );
    });
  });
});
