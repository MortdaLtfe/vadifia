import { isUrl } from "../../src";

describe("isUrl function", () => {
  const validUrls: string[] = [
    "http://example.com",
    "https://example.com",
    "http://example.com/path",
    "https://example.com/path",
    "http://example.com:8080",
    "https://example.com:8080",
    "http://subdomain.example.com",
    "https://subdomain.example.com",
  ];

  const invalidUrls: string[] = [
    "example.com",
    "http://",
    "http://example.com!@#$",
    "",
  ];

  describe("Valid cases", () => {
    validUrls.forEach((url) => {
      it(`should return true for a valid URL: ${url}`, () => {
        expect(isUrl(url)).toBe(true);
      });
    });
  });
  describe("Invalid cases", () => {
    invalidUrls.forEach((url) => {
      it(`should return false for an invalid URL: ${url}`, () => {
        expect(isUrl(url)).toBe(false);
      });
    });
  });
});
