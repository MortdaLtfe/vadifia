import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("south-america/uy", () => {
  const validCases: string[] = [
    "+59891234567",
    "+59898765432",
    "+59897654321",
    "+59894567890",
    "+59893456789",
    "+59892345678",
    "+59896543210",
    "+59895432109",
    "+59898765431",
    "+59891234568",
  ];
  const invalidCases: string[] = [
    "+59881234567",
    "+59871234567",
    "+59791234567",
    "+59861234567",
    "+5981234567",
    "+59801234567",
    "+598123456",
    "59891234567",
    "+598987654321",
    "+59891234",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+598")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+598")).toBe(false);
      });
    });
  });
});
