import { isPhoneNumber } from "../../../src";

describe("phone-numbers/north-america/bs", () => {
  const validCases: string[] = [
    "+1-242-1234567",
    "+1-242-2345678",
    "+1-242-3456789",
    "+1-242-4567890",
    "+1-242-5678901",
    "+1-242-6789012",
    "+1-242-7890123",
    "+1-242-8901234",
    "+1-242-9012345",
    "+1-242-0123456",
    "+1 242 123 4567",
    "+1 242 234 5678",
    "+1 242 345 6789",
    "+1 242 456 7890",
    "+1 242 567 8901",
    "+1 242 678 9012",
    "+1 242 789 0123",
    "+1 242 890 1234",
    "+1 242 901 2345",
    "+1 242 012 3456",
    "+1 (242) 123-4567",
    "123-4567",
  ];
  const invalidCases: string[] = [
    "+1-242-123456",
    "+1-242-12345678",
    "+1-242-123456789",
    "+1-242-12345",
    "+1-242-1234567890",
    "+1 242 12345678",
    "+1 (242) 123456",
    "+1 (242) 12345678",
    "+1-242-1234567890",
  ];

  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it("should return true for a valid phone number: " + phoneNumber, () => {
        expect(isPhoneNumber(phoneNumber, "+1242")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1242")).toBe(false);
      });
    });
  });
});
