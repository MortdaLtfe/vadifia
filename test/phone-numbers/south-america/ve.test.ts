import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("south-america/ve", () => {
  const validCases: string[] = [
    "+58 212 592 0297",
    "+58 424 811 2211",
    "+58 414 123 4567",
    "+58 241 765 4321",
    "+58 212 901 2345",
    "+58 424 876 5432",
    "+58 412 345 6789",
    "+58 241 111 2222",
    "+58 212 333 4444",
    "+58 424 555 6666",
  ];
  const invalidCases: string[] = [
    "+5812345678",
    "+5841234567",
    "+584123456",
    "+5812345678990",
    "+580123456789",
    "+5842345678990",
    "+581234567",
    "58123456789",
    "+582345678",
    "+5823456789",
    "+5841",
    "+58411",
    "+584111",
    "+5841111",
    "+58411111",
    "+584111111",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+58")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+58")).toBe(false);
      });
    });
  });
});
