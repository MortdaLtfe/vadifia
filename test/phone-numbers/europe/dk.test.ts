import { isPhoneNumber } from "../../../src";

describe("europe/dk", () => {
  const validCases: string[] = [
    "+4540123456",
    "+4590123456",
    "+4580123456",
    "+4570123456",
    "+4560123456",
    "+4550123456",
    "+4530123456",
    "+4520123456",
    "+4510123456",
    "+4501234567",
  ];
  const invalidCases: string[] = [
    "+45401234",
    "+4590123",
    "+45801234567890",
    "+4570123456789012",
    "+456012345678901234",
    "+4550123456789012345",
    "+45301234567890123456",
    "+452012345678901234567",
    "+4510123456789012345678",
    "+4501234567890123456789",
    "+454012345",
    "+459012345",
    "+458012345",
    "+457012345",
    "+456012345",
    "+455012345",
    "+453012345",
    "+452012345",
    "+451012345",
    "+450123456",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+45")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(
        "should return false for an invalid phone number: " + phoneNumber,
        () => {
          expect(isPhoneNumber(phoneNumber, "+45")).toBe(false);
        }
      );
    });
  });
});
