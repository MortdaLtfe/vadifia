import { isPhoneNumber } from "../../../src";

describe("europe/gr", () => {
  const validCases: string[] = [
    "+302107654321",
    "+302107654322",
    "+302107654323",
    "+302107654324",
    "+302107654325",
    "+302107654326",
    "+302107654327",
    "+302107654328",
    "+302107654329",
    "+302107654330",
  ];
  const invalidCases: string[] = [
    "+3021076543",
    "+3021076543211",
    "+30210765432101",
    "+302107654321012",
    "+3021076543210123",
    "+30210765432101234",
    "+302107654321012345",
    "+3021076543210123456",
    "+30210765432101234567",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+30")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+30")).toBe(false);
        }
      );
    });
  });
});
