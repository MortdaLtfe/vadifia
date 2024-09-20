import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("north-america/tt", () => {
  const validCases: string[] = [
    "+18686567890",
    "8686567",
    "+18686567890",
    "+18686567891",
    "+18686567892",
    "+18686567893",
    "+18686567894",
    "+18686567895",
    "+18686567896",
    "+18686567897",
    "+18686567898",
    "+18686567899",
    "+1868 656 7890",
    "+1868-656-7890",
    "+1868.656.7890",

    "+1 868 656 7890",
    "+1 (868) 656-7890",
  ];
  const invalidCases: string[] = [
    "+1868 656",
    "+1868 6567",
    "+1868 65678",
    "+1868 656789012",
    "+1868 656-7890-1",
    "+1868 656 7890123",
    "+1868-656-7890123",
    "+1868.656.7890123",
    "+1868/656/7890123",
    "+1 868 656 7890123",
    "+1 (868) 656-7890123",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1868")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1868")).toBe(false);
      });
    });
  });
});
