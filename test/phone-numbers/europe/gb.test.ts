import { isPhoneNumber } from "../../../src";

describe("europe/gb", () => {
  const validCases: string[] = [
    "+447123456789",
    "+447912345678",
    "+447612345678",
    "+447512345678",
    "+447412345678",
    "+447312345678",
    "+447212345678",
    "+447112345678",
    "+447012345678",
    "+447000123456",
  ];
  const invalidCases: string[] = [
    "+4471234567",
    "+44791234567",
    "+44761234567",
    "+44751234567",
    "+44741234567",
    "+44731234567",
    "+44721234567",
    "+44711234567",
    "+44701234567",
    "+44700012345",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+44")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+44")).toBe(false);
        }
      );
    });
  });
});
