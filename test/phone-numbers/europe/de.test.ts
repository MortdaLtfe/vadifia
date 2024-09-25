import { isPhoneNumber } from "../../../src";

describe("europe/de", () => {
  const validCases: string[] = [
    "+491234567890",
    "+4915123456789",
    "+491742345678",
    "+4916023456789",
    "+491712345678",
    "+4917623456789",
    "+4917523456789",
    "+4917023456789",
    "+4917923456789",
    "+4915323456789",
  ];
  const invalidCases: string[] = [
    "+491234567",
    "+49123456789",
    "+49123456789012",
    "+4911234567",
    "+49012345678",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+49")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+49")).toBe(false);
        }
      );
    });
  });
});
