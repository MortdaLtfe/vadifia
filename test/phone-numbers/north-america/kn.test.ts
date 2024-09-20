import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("phone-numbers/north-america/kn", () => {
  const validCases: string[] = [
    "+1-869-123-4567",
    "+1-869-765-4321",
    "+1-869-234-5678",
    "+1-869-345-6789",
    "+1-869-456-7890",
    "+1-869-987-6543",
    "+1-869-654-3210",
    "+1-869-543-2109",
    "+1-869-321-0987",
    "+1-869-210-9876",
    "+1-869-098-7654",
    "+1-869-876-5432",
    "+1-869-543-2198",
    "+1-869-321-9876",
    "+1-869-789-0123",
  ];
  const invalidCases: string[] = [
    "+1-869-123-45",
    "+1-869-123-45678",
    "+1-868-123-4567",
    "+1-869-12",
    "+1-869-123456",
    "+1-870-123-4567",
    "1-869-123-4567",
    "-1-869-1234567",
    "+1-869-123-45678",
    "+1-869-1234",
    "+1-871-765-4321",
    "+1-869-9876",
    "+1-869-1234-5678",
    "+1-869-123-45678",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1869")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1869")).toBe(false);
      });
    });
  });
});
