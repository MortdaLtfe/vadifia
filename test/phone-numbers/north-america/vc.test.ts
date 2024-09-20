import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("north-america/vc", () => {
  const validCases: string[] = [
    "+17843567890",
    "7843567890",
    "+17843567890",
    "+17843567891",
    "+17843567892",
    "+1-784-123-4567",
    "+1-784-765-4321",
    "+1-784-234-5678",
    "+1-784-345-6789",
    "+1-784-456-7890",
    "+1-784-987-6543",
    "+1-784-654-3210",
    "+1-784-543-2109",
    "+1-784-321-0987",
    "+1-784-210-9876",
    "+1-784-098-7654",
    "+1-784-876-5432",
    "+1-784-543-2198",
    "+1-784-321-9876",
    "+1-784-789-0123",
  ];
  const invalidCases: string[] = [
    "+178435678",
    "+17843567",
    "+1784356789",
    "+178435678012",
    "+1784356780123",
    "+17843567-8901",
    "+1784356789012",
    "+1784356780123",
    "+17843567-8901-2",
    "+17843567890123",
    "+178435678",
    "+17843567890-1",
    "+1784356789012",
    "+1784356780123",
    "+1784356780123",
    "+17843567890123",
    "+1784356780123",
    "+1784356780123",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1784")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1784")).toBe(false);
      });
    });
  });
});
