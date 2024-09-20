import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("south-america/sr", () => {
  const validCases: string[] = [
    "+5971234567",
    "+5979876543",
    "+5977654321",
    "+5973456789",
    "+5974567890",
    "+5972345678",
    "+5978765432",
    "+5975432109",
    "+5978901234",
  ];
  const invalidCases: string[] = [
    "+59712345678",
    "+597123456",
    "+5961234567",
    "+597123456789",
    "+597876543",
    "+597234567890",
    "+59787654321",
    "5971234567",
    "+5971234567890",
    "+59712345",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+597")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+597")).toBe(false);
      });
    });
  });
});
