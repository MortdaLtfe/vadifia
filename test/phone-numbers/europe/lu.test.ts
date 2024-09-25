import { isPhoneNumber } from "../../../src";

describe("europe/lu", () => {
  const validCases: string[] = [
    "+352621234567",
    "+352691234567",
    "+352651234567",
    "+352661234567",
    "+352641234567",
    "+352631234567",
    "+352671234567",
    "+352681234567",
    "+352691234567",
    "+352701234567",
  ];
  const invalidCases: string[] = [
    "+35262123456",
    "+3526512345690",
    "+35266123456901",
    "+352641234569012",
    "+3526312345690123",
    "+35267123456901234",
    "+352681234569012345",
    "+3526912345690123456",
    "+35270123456901234567",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+352")).toBe(true);
      });
    });
  });
  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+352")).toBe(false);
        }
      );
    });
  });
});
