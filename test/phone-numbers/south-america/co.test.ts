import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("south-america/co", () => {
  const validCases: string[] = [
    "+57 123 456 7890",
    "+57 876 543 2109",
    "+57 234 567 8901",
    "+57 345 678 9012",
    "+57 456 789 0123",
    "+57 567 890 1234",
    "+57 678 901 2345",
    "+57 789 012 3456",
    "+57 890 123 4567",
    "+57 901 234 5678",
    "+57 012 345 6789",
    "+57 098 765 4321",
    "+57 135 792 4680",
    "+57 246 813 5749",
    "+57 357 924 6875",
  ];
  const invalidCases: string[] = [
    "+57 123 456 789",
    "+57 123 456 78901",
    "+57 123 4567",
    "+57 123 456789100",
    "+57 123 456 789012",
    "+57 123 456 7890123",
    "+57 123 456 78901234",
    "+57 123 456 789012345",
    "+57 123 456 7890123456",
    "+57 123 456 78901234567",
    "+57 123 456 789012345678",
    "+57 123 456 7890123456789",
    "+57 123 456 78901234567890",
    "+57 123 456 789012345678901",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+57")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+57")).toBe(false);
      });
    });
  });
});
