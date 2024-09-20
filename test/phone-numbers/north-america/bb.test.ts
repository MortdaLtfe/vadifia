import { isPhoneNumber } from "../../../src";

describe("phone-numbers/north-america/bb", () => {
  const validCases: string[] = [
    "+1-246-1234567",
    "+1-246-2345678",
    "+1-246-3456789",
    "+1-246-4567890",
    "+1-246-5678901",
    "+1-246-6789012",
    "+1-246-7890123",
    "+1-246-8901234",
    "+1-246-9012345",
    "+1-246-0123456",
    "+1 246 123 4567",
    "+1 246 234 5678",
    "+1 246 345 6789",
    "+1 246 456 7890",
    "+1 246 567 8901",
    "+1 246 678 9012",
    "+1 246 789 0123",
    "+1 246 890 1234",
    "+1 246 901 2345",
    "+1 246 012 3456",
    "1234567",
  ];
  const invalidCases: string[] = [
    "+1-246-123456",
    "+1-246-12345678",
    "+1-246-123456789",
    "+1-246-12345",
    "+1-246-1234567890",
    "+1 246 12345678",
    "+1 (246) 123456",
    "+1 (246) 12345678",
    "+1-246-1234567890",
  ];

  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it("should return true for a valid phone number: " + phoneNumber, () => {
        expect(isPhoneNumber(phoneNumber, "+1246")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1246")).toBe(false);
      });
    });
  });
});
