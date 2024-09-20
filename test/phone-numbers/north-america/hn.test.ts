import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("north-america/hn", () => {
  const validCases: string[] = [
    "+504 1234 5678",
    "+504-8765-4321",
    "+50412345678",
    "+504 2345 6789",
    "+504-3456-7890",
    "+50498765432",
    "+504 6543 2109",
    "+50443210987",
    "+504-5432-1098",
    "+50432109876",
    "+504-2109-8765",
    "+50410987654",
    "+504 0987 6543",
    "+504-9876-5432",
    "+50476543210",
  ];
  const invalidCases: string[] = [
    "+50412345",
    "+504123456789",
    "+50587654321",
    "+50412",
    "+5041234567890",
    "+50612345678",
    "50412345678",
    "+50465432",
    "+5049999999999",
    "+50454321",
    "+50312345678",
    "+504987654",
    "+50212345678",
    "+50498765",
    "+504765432109",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+504")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+504")).toBe(false);
      });
    });
  });
});
