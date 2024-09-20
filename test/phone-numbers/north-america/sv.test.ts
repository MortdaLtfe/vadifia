import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("north-america/sv", () => {
  const validCases: string[] = [
    "+503 1234 5678",
    "+503-1234-5678",
    "+50312345678",
    "+503 1234 5679",
    "+503-1234-5679",
    "+50312345679",
    "+503 1234 5680",
    "+503-1234-5680",
    "+50312345680",
    "+503 1234 5681",
    "+503-1234-5681",
    "+50312345681",
    "+503 1234 5682",
    "+503-1234-5682",
    "+50312345682",
    "+503 1234 5683",
    "+503-1234-5683",
    "+50312345683",
  ];
  const invalidCases: string[] = [
    "+5031234567",
    "+503123456789",
    "+50212345678",
    "+503123456",
    "+5031234567890",
    "+50412345678",
    "50312345678",
    "+503123456789",
    "+5031234",
    "+503876543",

    "+50312345678901",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+503")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+503")).toBe(false);
      });
    });
  });
});
