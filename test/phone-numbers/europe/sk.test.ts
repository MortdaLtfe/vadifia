import { isPhoneNumber } from "../../../src";

describe("europe/sk", () => {
  const validCases: string[] = [
    "+421905123456",
    "+421904123456",
    "+421903123456",
    "+421902123456",
    "+421901123456",
    "+421900123456",
    "+421912345678",
    "+421923456789",
    "+421934567890",
    "+421945678901",
  ];
  const invalidCases: string[] = [
    "+42190512345",
    "+42190412345",
    "+42190312345",
    "+42190212345",
    "+42190112345",
    "+42190012345",
    "+42191234567",
    "+42192345678",
    "+42193456789",
    "+42194567890",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+421")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+421")).toBe(false);
        }
      );
    });
  });
});
