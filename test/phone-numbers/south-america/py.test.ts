import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("south-america/py", () => {
  const validCases: string[] = [
    "+595912345678",
    "+595987654321",
    "+595934567890",
    "+595945678901",
    "+595956789012",
    "+595967890123",
    "+595978901234",
    "+595989012345",
    "+595990123456",
    "+595901234567",
  ];
  const invalidCases: string[] = [
    "+59512345678",
    "+595123456789",
    "+594123456789",
    "+59587654321",
    "+595234567890",
    "+595456789012",
    "+595123456",
    "59591234567",
    "+595876543210",
    "+595234567",
    "+594567890",
    "+5958765432",
    "+595901234",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+595")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+595")).toBe(false);
      });
    });
  });
});
