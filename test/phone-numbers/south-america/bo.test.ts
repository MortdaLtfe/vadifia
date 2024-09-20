import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("south-america/bo", () => {
  const validCases: string[] = [
    "+59112345678",
    "+59187654321",
    "+59123456789",
    "+59134567890",
    "+59145678901",
    "+59198765432",
    "+59165432109",
    "+59154321098",
    "+59132109876",
    "+59121098765",
    "+59109876543",
    "+59187654321",
    "+59154321987",
    "+59132198765",
    "+59178901234",
  ];
  const invalidCases: string[] = [
    "+5911234567",
    "+591123456789",
    "+59012345678",
    "+591123456",
    "+5911234567890",
    "+59212345678",
    "59112345678",
    "+591123456789",
    "+5911234",
    "+591876543",
    "+5911234-53678",
    "+59112345678901",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+591")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+591")).toBe(false);
      });
    });
  });
});
