import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("europe/al", () => {
  const validCases: string[] = [
    "+355682047889",
    "+355 682047889",
    "+355-682047889",
    "+355.682047889",
    "0682047889",
    "+355 68 204 7889",
    "+355 (68) 204 7889",
  ];
  const invalidCases: string[] = [
    "+3556820478890",
    "+35568204788901",
    "+355682047889012",
    "+3556820478890123",
    "+35568204788901234",
    "+355682047889012345",
    "+3556820478890123456",
    "+35568204788901234567",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+355")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+355")).toBe(false);
      });
    });
  });
});
