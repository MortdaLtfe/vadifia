import { isPhoneNumber } from "../../../src";

describe("europe/hr", () => {
  const validCases: string[] = [
    "+385912345678",
    "+385987654321",
    "+385912345679",
    "+385984567890",
    "+385912345688",
    "+385987654322",
    "+385912345677",
    "+385984567891",
    "+385912345666",
    "+385987654333",
  ];
  const invalidCases: string[] = [
    "+3851234567",
    "+3858123459967",
    "+3859123456",
    "+3859123456789",
    "+385912345",
    "38591234567",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+385")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+385")).toBe(false);
        }
      );
    });
  });
});
