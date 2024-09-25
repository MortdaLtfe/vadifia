import { isPhoneNumber } from "../../../src";

describe("europe/ch", () => {
  const validCases: string[] = [
    "+41414234567",
    "+41619876543",
    "+41231234567",
    "+41781234567",
    "+41891234567",
    "+41901234567",
    "+41651234567",
    "+41761234567",
    "+41861234567",
    "+41931234567",
  ];
  const invalidCases: string[] = [
    "+4141423456",
    "+4161987654",
    "+4123123456",
    "+4178123456",
    "+4189123456",
    "+4190123456",
    "+4165123456",
    "+4176123456",
    "+4186123456",
    "+4193123456",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+41")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+41")).toBe(false);
        }
      );
    });
  });
});
