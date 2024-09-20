import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("north-america/mx", () => {
  const validCases: string[] = [
    "+52 55 1234 5678",
    "+52 33 8765 4321",
    "+52 1 234 567 890",
    "+525512345678",
    "+523387654321",
    "+521234567890",
    "+528134567890",
    "+526629876543",
  ];
  const invalidCases: string[] = [
    "+52551234",
    "+5255123456789",
    "+535512345678",
    "+525512",
    "+5255123456",
    "525512345678",
    "+52551234567",
    "+52551234",
    "+5257123456",
    "+52559876",
    "+52551234567890",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+52")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+52")).toBe(false);
      });
    });
  });
});
