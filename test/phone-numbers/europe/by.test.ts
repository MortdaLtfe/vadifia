import { isPhoneNumber } from "../../../src";

describe("europe/by", () => {
  const validCases: string[] = [
    "+375291234567",
    "+375292345678",
    "+375293456789",
    "+375294567890",
    "+375295678901",
    "+375296789012",
    "+375297890123",
    "+375298901234",
    "+375299012345",
  ];
  const invalidCases: string[] = [
    "+3752912345",
    "+3752923456789",
    "+37529345678901",
    "+375294567890123",
    "3752912345678",
    "+37529234567",
    "+3752934567890123",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+375")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+375")).toBe(false);
        }
      );
    });
  });
});
