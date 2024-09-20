import { isEmail } from "../../src";

describe("isValidEmail Function", () => {
  const validEmails = [
    "test@example.com",
    "test@example.co.uk",
    "test@example.io",
    "test@example.net",
    "test@example.org",
    "test@example.edu",
    "test@example.gov",
    "test@example.info",
    "test@example.biz",
    "test@example.pro",
    "test@example.travel",
    "test@example.aero",
    "test@example.asia",
    "test@example.jobs",
    "test@example.mobi",
    "test@example.museum",
    "test@example.tel",
    "test@example.name",
    "test@example.post",
    "test@example.health",
    "test@subdomain.example.com",
    "test@subdomain.example.co.uk",
    "test@subdomain.example.io",
    "test@subdomain.example.net",
    "test@subdomain.example.org",
    "test@subdomain.example.edu",
    "test@subdomain.example.gov",
    "test@subdomain.example.info",
    "test@subdomain.example.biz",
    "test@subdomain.example.pro",
    "test@subdomain.example.travel",
    "test@subdomain.example.aero",
    "test@subdomain.example.asia",
    "test@subdomain.example.jobs",
    "test@subdomain.example.mobi",
    "test@subdomain.example.museum",
    "test@subdomain.example.tel",
    "test@subdomain.example.name",
    "test@subdomain.example.post",
    "test@subdomain.example.health",
  ];
  const invalidEmails = [
    "@example.com",
    "test@example.",
    "test@example",
    "test.@example.com",
    "test@.example.com",
    "test@-example.com",
    "test@example.-com",
    "test@example..com",
    "test@example.com-",
    "test@example.com.",
    "test.@example.co.uk",
    "test@.example.co.uk",
    "test@-example.co.uk",
    "test@example.-co.uk",
    "test@example..co.uk",
    "test@example.co.uk-",
    "test@example.co.uk.",
    "test@subdomain.@example.com",
    "test@subdomain@.example.com",
    "test@subdomain@-example.com",
    "test@subdomain@example.-com",
    "test@subdomain@example..com",
    "test@subdomain@example.com-",
    "test@subdomain@example.com.",
    "test@subdomain.subdomain.@example.com",
    "test@subdomain.subdomain@.example.com",
    "test@subdomain.subdomain@-example.com",
    "test@subdomain.subdomain@example.-com",
    "test@subdomain.subdomain@example..com",
    "test@subdomain.subdomain@example.com-",
    "test@subdomain.subdomain@example.com.",
  ];
  describe("Testing valid emails", () => {
    validEmails.forEach((email) => {
      it(`should return true for valid email: ${email}`, () => {
        expect(isEmail(email)).toBe(true);
      });
    });
  });
  describe("Testing invalid emails", () => {
    invalidEmails.forEach((email) => {
      it(`should return false for invalid email: ${email}`, () => {
        expect(isEmail(email)).toBe(false);
      });
    });
  });
});
