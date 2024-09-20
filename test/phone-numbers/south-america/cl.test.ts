import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("south-america/cl", () => {
  const validCases: string[] = [
    "+56912345678",
    "+56987654321",
    "+56923456789",
    "+56934567890",
    "+56945678901",
    "+56956789012",
    "+56967890123",
    "+56978901234",
    "+56989012345",
    "+56990123456",
    "+56901234567",
    "+56909876543",
    "+56913579246",
    "+56924681357",
    "+56935792468",
  ];
  const invalidCases: string[] = [
    "+5612345678",
    "+561234567890",
    "+5691234567",
    "+569123456789",
    "+5612345678901",
    "+56212345678",
    "56123456789",
    "+56912345",
    "+569876543210",
    "+56654321",
    "+563123456",
    "+56543210",
    "+56912345678901",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+56")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+56")).toBe(false);
      });
    });
  });
});
