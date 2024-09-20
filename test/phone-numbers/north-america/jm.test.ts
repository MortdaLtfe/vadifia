import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("phone-numbers/north-america/jm", () => {
  const validCases: string[] = [
    "+1-876-123-4567",
    "+1-876-765-4321",
    "+1-876-234-5678",
    "+1-876-345-6789",
    "+1-876-456-7890",
    "+1-876-987-6543",
    "+1-876-654-3210",
    "+1-876-543-2109",
    "+1-876-321-0987",
    "+1-876-210-9876",
    "+1-876-098-7654",
    "+1-876-876-5432",
    "+1-876-543-2198",
    "+1-876-321-9876",
    "+1-876-789-0123",
  ];
  const invalidCases: string[] = [
    "+1-876-123-45",
    "+1-876-2123-45678",
    "+1-875-123-4567",
    "+1-876-12",
    "+1-876-123456",
    "+1-874-123-4567",
    "1-876-123-4567",
    "+1-876-12345678",
    "+1-876-123-45678",
    "+1-876-1234",
    "+1-877-765-4321",
    "+1-876-9876",
    "+1-876-14234-5678",
    "+1-876-4123-45678",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1876")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1876")).toBe(false);
      });
    });
  });
});
