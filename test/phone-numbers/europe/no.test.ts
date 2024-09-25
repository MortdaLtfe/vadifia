import { isPhoneNumber } from "../../../src";

describe("europe/no", () => {
  const validCases: string[] = [
    "+4798765432",
    "+4798765433",
    "+4798765434",
    "+4798765435",
    "+4798765436",
    "+4798765437",
    "+4798765438",
    "+4798765439",
    "+4798765440",
    "+4798765441",
  ];
  const invalidCases: string[] = [
    "+479876543",
    "+47987654321",
    "+4798765432101",
    "+47987654321012",
    "+479876543210123",
    "+4798765432101234",
    "+47987654321012345",
    "+479876543210123456",
    "+4798765432101234567",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+47")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+47")).toBe(false);
        }
      );
    });
  });
});
