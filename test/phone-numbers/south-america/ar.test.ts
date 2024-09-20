import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("south-america/ar", () => {
  const validCases: string[] = [
    "+541123456789",
    "+542223456789",
    "+543334567890",
    "+544445678901",
    "+545556789012",
    "+546667890123",
    "+547778901234",
    "+548889012345",
    "+549990123456",
    "+541098765432",
    "+542109876543",
    "+543210987654",
    "+544321098765",
    "+545432109876",
    "+546543210987",
  ];
  const invalidCases: string[] = [
    "+54112345",
    "+5411234567890",
    "+535123456789",
    "+5411234567",
    "+541123456789012",
    "+541234567",
    "541123456789",
    "+54112345678901",
    "+541123",
    "+5419876543",
    "+5411234-567829",
    "+5411234567890123",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+54")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+54")).toBe(false);
      });
    });
  });
});
