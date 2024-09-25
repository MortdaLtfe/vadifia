import { isPhoneNumber } from "../../../src";

describe("europe/hu", () => {
  const validCases: string[] = [
    "+36234567890",
    "+36345678901",
    "+36456789012",
    "+36567890123",
    "+36678901234",
    "+36789012345",
    "+36890123456",
    "+36901234567",
    "+36123456789",
  ];
  const invalidCases: string[] = [
    "+361234567",
    "+3623456789",
    "+364567890123",
    "+365678901234",
    "+366789012345",
    "+367890123456",
    "+368901234567",
    "+369012345678",
    "+361234567890",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+36")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+36")).toBe(false);
        }
      );
    });
  });
});
