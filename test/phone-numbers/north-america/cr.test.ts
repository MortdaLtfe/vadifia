import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("north-america/cr", () => {
  const validCases: string[] = [
    "+1506 1234 5678",
    "+1506-8765-4321",
    "+150612345678",
    "+1506 2345 6789",
    "+1506-3456-7890",
    "+150698765432",
    "+1506 6543 2109",
    "+150643210987",
    "+1506-5432-1098",
    "+150632109876",
    "+1506-2109-8765",
    "+150610987654",
    "+1506 0987 6543",
    "+1506-9876-5432",
    "+150676543210",
  ];
  const invalidCases: string[] = [
    "+150612345",
    "+1506123456789",
    "+150487654321",
    "+150612",
    "+15061234567890",
    "+150712345678",
    "150612345678",
    "+150665432",
    "+15069999999999",
    "+150654321",
    "+150812345678",
    "+1506987654",
    "+150512345678",
    "+150698765",
    "+1506765432109",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1506")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1506")).toBe(false);
      });
    });
  });
});
