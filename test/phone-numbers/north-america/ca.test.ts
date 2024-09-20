import { phoneNumbers } from "@common/pattern";
import { isPhoneNumber } from "../../../src";

describe("north-america/ca", () => {
  const validCases: string[] = [
    "+11234567890",
    "1234567890",
    "+11234567890",
    "+12125552368",
    "+13015552345",
    "+14075551234",
    "+15015556789",
    "+16045551234",
    "+17025557890",
    "+18005551234",
    "+19085551234",
    "+11234567891",
    "+12125552369",
    "+13015552346",
    "+1 (234) 567-8901",
    "+14075551235",
    "+15015556780",
    "+16045551235",
    "+17025557891",
    "+18005551235",
    "+1 234 567-8980",
    "+19085551235",
    "1234567892",
    "2125552370",
    "+1 (234) 567-8901",
    "+1 234 567 9890",
  ];
  const invalidCases: string[] = [
    "+1 234 5678",
    "+1 234 567",
    "+1 2345 6789",
    "+1 123 456 78",
    "+1 234 567 89701",
    "+1 (234) 567-890",
    "+1 234 567 89012",
    "+1 (234) 567-890-11",
    "+1 234-567-8940-1",
    "+1 234 567 89012",
    "+1-234-5678-9012",
    "+1 234567",
    "+1 (234) 3567-8901",
    "+1 2345 67890",
    "+11-234-5678-901",
    "+1 234567890123",
    "+1 234-567-89012",
    "+1 (234) 567-89012",
    "+1 234 567 890123",
    "+1 234567890",
    "+1-234-567-89",
    "+1 234 567 8901234",
    "+1 234-567-89012",
  ];
  describe("Valid Cases", () => {
    validCases.forEach((phoneNumber) => {
      it(`should return true for a valid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1")).toBe(true);
      });
    });
  });

  describe("Invalid Cases", () => {
    invalidCases.forEach((phoneNumber) => {
      it(`should return false for an invalid phone number: ${phoneNumber}`, () => {
        expect(isPhoneNumber(phoneNumber, "+1")).toBe(false);
      });
    });
  });
});
