import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("north-america/lc", () => {
  const validCases: string[] = [
    "+17584444445",
    "+1-758-987-6543",
    "+17584444447",
    "+1-758-321-0987",
    "+17584444449",
    "+1-758-123-4567",
    "+1-758-765-4321",
    "+1-758-234-5678",
    "+1-758-345-6789",
    "+17584444448",
    "+1-758-456-7890",
    "+1-758-654-3210",
    "+1-758-543-2109",
    "+17584444446",
    "+1-758-210-9876",
    "+1-758-098-7654",
    "+1-758-876-5432",
    "+1-758-543-2198",
    "+17584444444",
    "+1-758-321-9876",
    "+1-758-789-0123",
  ];
  const invalidCases: string[] = [
    "+1-758-123-45678",
    "+175844444",
    "1-758-123-4567",
    "+1758444447",
    "+1-758-123-45",
    "+1-758-123-45678",
    "+1758444441",
    "+1-757-123-4567",
    "+1-758-12",
    "+1758444442",
    "+1-758-123456",
    "+1758444449",
    "+1-759-123-4567",
    "+1758444446",
    "+1758444440",
    ,
    "+1758444445",
    "+1-758-123-45678",
    "+1-758-1234",
    "+1-760-765-4321",
    "+1-758-9876",
    "+1-758-1234-5678",
    "+1758444448",
    "+1758444443",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1758")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1758")).toBe(false);
      });
    });
  });
});
