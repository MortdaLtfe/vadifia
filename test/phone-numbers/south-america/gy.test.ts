import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("south-america/gy", () => {
  const validCases: string[] = [
    "+5921234567",
    "+5929876543",
    "+5928765432",
    "+5927654321",
    "+5923456789",
    "+5924567890",
    "+5925432109",
    "+5922345678",
    "+5923456780",
    "+5921234560",
    "+5923456781",
    "+5927654320",
    "+5929876542",
    "+5928765431",
    "+5926789012",
  ];
  const invalidCases: string[] = [
    "+59212345678",
    "+592123456",
    "+5911234567",
    "+59212345",
    "+592123456789",
    "+5901234567",
    "+5921234567890",
    "+592876543",
    "+592765432",
    "+59234567890",
    "5921234567",
    "+592 123 456 78901234567",
    "+592 123 456 789012345678",
    "+592 123 456 7890123456789",
    "+592 123 456 78901234567890",
    "+592 123 456 789012345678901",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+592")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+592")).toBe(false);
      });
    });
  });
});
