import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("north-america/ha", () => {
  const validCases: string[] = [
    "+509 1234 5678",
    "+509-8765-4321",
    "+50912345678",
    "+509 2345 6789",
    "+509-3456-7890",
    "+50998765432",
    "+509 6543 2109",
    "+50943210987",
    "+509-5432-1098",
    "+50932109876",
    "+509-2109-8765",
    "+50910987654",
    "+509 0987 6543",
    "+509-9876-5432",
    "+50976543210",
    "+50912345678",
  ];
  const invalidCases: string[] = [
    "+50912345",
    "+509123456789",
    "+50887654321",
    "+50912",
    "+5091234567890",
    "+50712345678",
    "50912345678",
    "+50965432",
    "+5099999999999",
    "+50954321",
    "+50612345678",
    "+509987654",
    "+50998765",
    "+509765432109",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+509")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+509")).toBe(false);
      });
    });
  });
});
