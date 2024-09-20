import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("north-america/do", () => {
  const validCases: string[] = [
    "+1-809-1234567",
    "+1-809-2345678",
    "+1-809-3456789",
    "+1-809-4567890",
    "+1-809-5678901",
    "+1-809-6789012",
    "+1-809-7890123",
    "+1-809-8901234",
    "+1-809-9012345",
    "+1-809-0123456",
    "+1 809 123 4567",
    "+1 809 234 5678",
    "+1 809 345 6789",
    "+1 809 456 7890",
    "+1 809 567 8901",
    "+1 809 678 9012",
    "+1 809 789 0123",
    "+1 809 890 1234",
    "+1 809 901 2345",
    "+1 809 012 3456",
  ];
  const invalidCases: string[] = [
    "+1-809-123456",
    "+1-809-12345678",
    "+1-809-123456789",
    "+1-809-12345",
    "+1-809-1234567890",
    "+1 809 12345678",
    "+1 (809) 123456",
    "+1 (809) 12345678",
    "+1-809-1234567890",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1809")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1809")).toBe(false);
      });
    });
  });
});
