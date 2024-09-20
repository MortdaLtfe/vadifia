import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("north-america/bz", () => {
  const validCases: string[] = [
    "+1501 123 4567",
    "+1501-123-4567",
    "+1501(123)4567",
    "+15011234567",
    "+1501-123-4567",
    "+1501(123)4567",
    "+1501 123 4567",
    "+1501-1234-567",
    "+1501(1234)567",
    "+1501 1234-567",
    "+1501(123) 4567",
    "+1501 1234567",
    "+1501 123-4567",
    "+1501 123 4567",
    "+1501-123-4567",
    "+1501(123) 4567",
    "+1501 1234567",
    "+1501 (123) 4567",
  ];
  const invalidCases: string[] = [
    "+1501 123 456",
    "+1501 12345678",
    "+1501 12345",
    "+1501 123456789",
    "+1501 123 45678",
    "+1501 1234567890",
    "+1501 123-456",
    "+1501 (123) 45678",
    "+1501 1234-56789",
    "+1501-1234-56789",
    "+1501(123)4567 89",
    "+1501 12345-6789",
    "+1501-123456",
    "+1501 (123) 456",
    "+15011234",
    "+1501-123456789",

    "+1501(1234567890)",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1501")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1501")).toBe(false);
      });
    });
  });
});
