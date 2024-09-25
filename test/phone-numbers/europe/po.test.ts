import { isPhoneNumber } from "../../../src";

describe("europe/po", () => {
  const validCases: string[] = [
    "+48231234567",
    "+48251234567",
    "+48261234567",
    "+48271234567",
    "+48281234567",
    "+48291234567",
    "+48301234567",
    "+48311234567",
    "+48321234567",
    "+48331234567",
  ];
  const invalidCases: string[] = [
    "+4823123456",
    "+4801234567",
    "+4826123456",
    "+4898765432112093",
    "4823123456789303",
    "+4826123456",
    "+48231245",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+48")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+48")).toBe(false);
        }
      );
    });
  });
});
