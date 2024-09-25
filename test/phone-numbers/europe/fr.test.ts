import { isPhoneNumber } from "../../../src";

describe("europe/fr", () => {
  const validCases: string[] = [
    "+33123456789",
    "+33765432109",
    "+33612345678",
    "+33234567890",
    "+33598765432",
    "+33712345678",
    "+33198765432",
    "+33456789012",
    "+33212345678",
    "+33876543210",
  ];
  const invalidCases: string[] = [
    "+331234567",
    "+3312345678901",

    "+33123456",
    "+3398765432",
    "+331234567890",
    "33123456789",
    "+334321098765",
    "+3387654321",
    "+337123456",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+33")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+33")).toBe(false);
        }
      );
    });
  });
});
