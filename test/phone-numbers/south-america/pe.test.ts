import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("south-america/pe", () => {
  const validCases: string[] = [
    "+51912345678",
    "+51987654321",
    "+51923456789",
    "+51934567890",
    "+51945678901",
    "+51956789012",
    "+51967890123",
    "+51978901234",
    "+51989012345",
    "+51990123456",
    "+51901234567",
    "+51934567890",
    "+51945678901",
    "+51956789012",
    "+51967890123",
  ];
  const invalidCases: string[] = [
    "+5112345678",
    "+5191234567",
    "+519123456",
    "+519123456789",
    "+5101234567",
    "+51912345",
    "+511234567890",
    "+5198765432",
    "+519876543210",
    "+519012345",
    "51912345678",
    "+51912345678-20",
    "+5192345678901",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+51")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+51")).toBe(false);
      });
    });
  });
});
