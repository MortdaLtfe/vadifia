import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("south-america/br", () => {
  const validCases: string[] = [
    "+551112345678",
    "+552198765432",
    "+553199876543",
    "+554112345678",
    "+555198765432",
    "+556312345678",
    "+557798765432",
    "+558198765432",
    "+559112345678",
    "+551998765432",
    "+552512345678",
    "+553312345678",
    "+554812345678",
    "+555512345678",
    "+556212345678",
  ];
  const invalidCases: string[] = [
    "+5511234567",
    "+55111234567890",
    "+55411234567",
    "+55123456789",

    "+55631234567890",
    "+551234567",
    "551112345678",

    "+5541123456",

    "+55519876543",
    "+5562345678",
    "+55119987654",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+55")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+55")).toBe(false);
      });
    });
  });
});
