import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("north-america/gd", () => {
  const validCases: string[] = [
    "+1-473-123-4567",
    "+1-473-765-4321",
    "+1-473-234-5678",
    "+1-473-345-6789",
    "+1-473-456-7890",
    "+1-473-987-6543",
    "+1-473-654-3210",
    "+1-473-543-2109",
    "+1-473-321-0987",
    "+1-473-210-9876",
    "+1-473-098-7654",
    "+1-473-876-5432",
    "+1-473-543-2198",
    "+1-473-321-9876",
    "+1-473-789-0123",
  ];
  const invalidCases: string[] = [
    "+1-473-123-456",
    "+1-473-123-45678",
    "+1-474-123-4567",
    "+1-473-12",
    "+1-473-123456",
    "+1-475-123-4567",
    "1-473-123-4567",
    "+1-473-123-45678",
    "+1-473-1234",
    "+1-474-765-4321",
    "+1-473-9876",
    "+1-473-1234-5678",
    "+1-473-123-45678",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1473")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1473")).toBe(false);
      });
    });
  });
});
