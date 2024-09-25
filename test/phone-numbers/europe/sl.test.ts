import { isPhoneNumber } from "../../../src";

describe("europe/sl", () => {
  const validCases: string[] = [
    "+38631234567",
    "+38632345678",
    "+38633456789",
    "+38634567890",
    "+38651234567",
    "+38652345678",
    "+38653456789",
    "+38641456789",
    "+38642456789",
    "+38643456789",
  ];
  const invalidCases: string[] = [
    "+386212345673",
    "+386612345673",
    "+3863123456",
    "+386523456789",
    "+38731234567",
    "+3863456789",
    "+386434567890",
    "+3865345678",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+386")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+386")).toBe(false);
        }
      );
    });
  });
});
