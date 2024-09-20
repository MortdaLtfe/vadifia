import { isPhoneNumber } from "../../../src";

describe("phone-numbers/north-america/bm", () => {
  const validCases: string[] = [
    "+1-441-1234567",
    "+1-441-2345678",
    "+1-441-3456789",
    "+1-441-4567890",
    "+1-441-5678901",
    "+1-441-6789012",
    "+1-441-7890123",
    "+1-441-8901234",
    "+1-441-9012345",
    "+1-441-0123456",
    "+1 441 123 4567",
    "+1 441 234 5678",
    "+1 441 345 6789",
    "+1 441 456 7890",
    "+1 441 567 8901",
    "+1 441 678 9012",
    "+1 441 789 0123",
    "+1 441 890 1234",
    "+1 441 901 2345",
    "+1 441 012 3456",
    "123-4567",
  ];
  const invalidCases: string[] = [
    "+1-441-123456",
    "+1-441-12345678",
    "+1-441-123456789",
    "+1-441-12345",
    "+1-441-1234567890",
    "+1 441 12345678",
    "+1 (441) 123456",
    "+1 (441) 12345678",
    "+1-441-1234567890",
  ];

  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it("should return true for a valid phone number: " + phoneNumber, () => {
        expect(isPhoneNumber(phoneNumber, "+1441")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1441")).toBe(false);
      });
    });
  });
});
