import { isPhoneNumber } from "../../../src";

describe("europe/nl", () => {
  const validCases: string[] = [
    "+31612345678",
    "+31651234567",
    "+31681234568",
    "+31691234569",
    "+31701234570",
    "+31711234571",
    "+31721234572",
    "+31731234573",
    "+31741234574",
    "+31751234575",
  ];
  const invalidCases: string[] = [
    "+3161234567",
    "+310123456",
    "+3168123456",
    "+3198765432112093",
    "316123456789303",
    "+3168123456",
    "+31612345",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+31")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+31")).toBe(false);
        }
      );
    });
  });
});
