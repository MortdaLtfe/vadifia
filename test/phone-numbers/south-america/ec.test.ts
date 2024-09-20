import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("south-america/ec", () => {
  const validCases: string[] = [
    "+593 123 456 7890",
    "+593 876 543 2109",
    "+593 234 567 8901",
    "+593 345 678 9012",
    "+593 456 789 0123",
    "+593 567 890 1234",
    "+593 678 901 2345",
    "+593 789 012 3456",
    "+593 890 123 4567",
    "+593 901 234 5678",
    "+593 135 792 4680",
    "+593 246 813 5749",
    "+593 357 924 6875",
  ];
  const invalidCases: string[] = [
    "+593 123 456 789",
    "+593 123 456 78901",
    "+593 123 4567",
    "+593 123 456789100",
    "+593 123 456 789012",
    "+593 012 345 6789",
    "+593 123 456 7890123",
    "+593 123 456 78901234",
    "+593 098 765 4321",
    "+593 123 456 789012345",
    "+593 123 456 7890123456",
    "+593 123 456 78901234567",
    "+593 123 456 789012345678",
    "+593 123 456 7890123456789",
    "+593 123 456 78901234567890",
    "+593 123 456 789012345678901",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+593")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+593")).toBe(false);
      });
    });
  });
});
