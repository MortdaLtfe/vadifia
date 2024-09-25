import { isPhoneNumber } from "../../../src";

describe("europe/pt", () => {
  const validCases: string[] = [
    "+351912345678",
    "+351812345678",
    "+351762345678",
    "+351732345678",
    "+351642345678",
    "+351632345678",
    "+351522345678",
    "+351432345678",
    "+351342345678",
    "+351252345678",
  ];
  const invalidCases: string[] = [
    "+3511234567",
    "+35012345678",
    "+35101234567",
    "+351765432",
    "+3518765432",
    "+35112345",
    "35112345678",
    "+3512345678",
    "+351345678",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+351")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+351")).toBe(false);
        }
      );
    });
  });
});
