import { isPhoneNumber } from "../../../src";

describe("phone-numbers/north-america/ag", () => {
  const validCases: string[] = [
    "+1-268-1234567",
    "+1-268-2345678",
    "+1-268-3456789",
    "+1-268-4567890",
    "+1-268-5678901",
    "+1-268-6789012",
    "+1-268-7890123",
    "+1-268-8901234",
    "+1-268-9012345",
    "+1-268-0123456",
    "+1 268 123 4567",
    "+1 268 234 5678",
    "+1 268 345 6789",
    "+1 268 456 7890",
    "+1 268 567 8901",
    "+1 268 678 9012",
    "+1 268 789 0123",
    "+1 268 890 1234",
    "+1 268 901 2345",
    "+1 268 012 3456",
    "+1 (268) 123-4567",
  ];
  const invalidCases: string[] = [
    "+1-268-123456",
    "+1-268-12345678",
    "+1-268-123456789",
    "+1-268-12345",
    "+1-268-1234567890",
    "+1 268 12345678",
    "+1 (268) 123456",
    "+1 (268) 12345678",
    "1234567890",
  ];

  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it("should return true for a valid phone number: " + phoneNumber, () => {
        expect(isPhoneNumber(phoneNumber, "+1268")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1268")).toBe(false);
      });
    });
  });
});
