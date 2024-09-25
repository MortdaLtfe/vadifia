import { isPhoneNumber } from "../../../src";

describe("europe/ba", () => {
  const validCases: string[] = [
    "+38761234567",
    "+38761234568",
    "+38761234569",
    "+38761234570",
    "+38761234571",
    "+38761234572",
    "+38761234573",
    "+38761234574",
    "+38761234575",
    "+38761234576",
  ];
  const invalidCases: string[] = [
    "+3876123456",
    "+387612345678",
    "+38761234567890",
    "+3876123456789012",
    "+387612345678901234",
    "+3876123456789012345",
    "+38761234567890123456",
    "+387612345678901234567",
    "+3876123456789012345678",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+387")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+387")).toBe(false);
        }
      );
    });
  });
});
