import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("north-america/ni", () => {
  const validCases: string[] = [
    "+505 1234 5678",
    "+505-8765-4321",
    "+50512345678",
    "+505 2345 6789",
    "+505-3456-7890",
    "+50598765432",
    "+505 6543 2109",
    "+50543210987",
    "+505-4321-0987",
    "+50532109876",
    "+505-2109-8765",
    "+50510987654",
    "+505 0987 6543",
    "+505-9876-5432",
    "+50576543210",
  ];
  const invalidCases: string[] = [
    "+50512345",
    "+505123456789",
    "+505487654321",
    "+50512",
    "+5051234567890",
    "+505712345678",
    "50512345678",
    "+505665432",
    "+50569999999999",
    "+505654321",
    "+505812345678",
    "+505987654",
    "+505512345678",
    "+50598765",
    "+505765432109",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+505")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+505")).toBe(false);
      });
    });
  });
});
