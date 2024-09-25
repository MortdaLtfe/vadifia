import { isPhoneNumber } from "../../../src";

describe("europe/mc", () => {
  const validCases: string[] = [
    "+37761234567",
    "+37762345678",
    "+37763456789",
    "+37764567890",
    "+37765678901",
    "+37766789012",
    "+37767890123",
    "+37761234568",
    "+37762345679",
    "+37763456780",
  ];
  const invalidCases: string[] = [
    "+37771234567",
    "+37781234567",
    "+37791234567",
    "+37661234567",
    "+37751234567",
    "+37772345678",
    "+37712345678",
    "+377612345678",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+377")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+377")).toBe(false);
        }
      );
    });
  });
});
