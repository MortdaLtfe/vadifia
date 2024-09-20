import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("north-america/gt", () => {
  const validCases: string[] = [
    "+502 1234 5678",
    "+502-8765-4321",
    "+50212345678",
    "+502 2345 6789",
    "+502-3456-7890",
    "+50298765432",
    "+502 6543 2109",
    "+50243210987",
    "+502-5432-1098",
    "+50232109876",
    "+502-2109-8765",
    "+50210987654",
    "+502 0987 6543",
    "+50212345678",
    "+502-9876-5432",
    "+50276543210",
  ];
  const invalidCases: string[] = [
    "+50212345",
    "+502123456789",
    "+50387654321",
    "+50212",
    "+5021234567890",
    "+50412345678",
    "50212345678",
    "+50265432",
    "+5029999999999",
    "+50254321",
    "+50512345678",
    "+502987654",
    "+50298765",
    "+502765432109",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+502")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+502")).toBe(false);
      });
    });
  });
});
