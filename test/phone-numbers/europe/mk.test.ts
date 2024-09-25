import { isPhoneNumber } from "../../../src";

describe("europe/mk", () => {
  const validCases: string[] = [
    "+38971234567",
    "+38971234568",
    "+38971234569",
    "+38971234570",
    "+38971234571",
    "+38971234572",
    "+38971234573",
    "+38971234574",
    "+38971234575",
    "+38971234576",
  ];
  const invalidCases: string[] = [
    "+3897123456",
    "+389712345678",
    "+38971234567890",
    "+3897123456789012",
    "+389712345678901234",
    "+3897123456789012345",
    "+38971234567890123456",
    "+389712345678901234567",
    "+3897123456789012345678",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+389")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+389")).toBe(false);
        }
      );
    });
  });
});
