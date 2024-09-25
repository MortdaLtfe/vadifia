import { isPhoneNumber } from "../../../src";

describe("europe/se", () => {
  const validCases: string[] = [
    "+46712345678",
    "+46751234567",
    "+46761234568",
    "+46771234569",
    "+46781234570",
    "+46791234571",
    "+46801234572",
    "+46811234573",
    "+46821234574",
    "+46831234575",
  ];
  const invalidCases: string[] = [
    "+4671234567",
    "+460123456",
    "+4676123456",
    "+4698765432112093",
    "467123456789303",
    "+4676123456",
    "+46712345",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+46")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+46")).toBe(false);
        }
      );
    });
  });
});
