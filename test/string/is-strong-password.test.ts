import { isStrongPassword } from "../../src";

describe("isStrongPassword", () => {
  const validPasswords = [
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOo1234!@#$",
    "KkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234!@#$%",
    "MmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFf1234!@#$%",
    "OoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGg1234!@#$%",
    "AAAsscd1234!@#$",
    "PpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHh1234!@#$%",
    "XxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMm1234!@#$%",
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOo1234!@#$%",
    "KkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDd1234!@#$%",
    "MmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFf1234!@#$%",
    "OoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJj1234!@#$%",
    "PpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLl1234!@#$%",
    "XxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPp1234!@#$%",
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTt1234!@#$%",
    "KkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGg1234!@#$%",
    "MmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJj1234!@#$%",
    "OoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNn1234!@#$%",
    "PpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPp1234!@#$%",
    "XxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWw1234!@#$%",
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYy1234!@#$%",
    "KkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNn1234!@#$%",
    "MmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQq1234!@#$%",
    "OoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSs1234!@#$%",
    "PpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUu1234!@#$%",
    "XxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFf1234!@#$%",
  ];

  const invalidPasswords = [
    "aabbasscd1234!@#$",
    "AAbAsscd1!@#",
    "AAbAsscd1234567890123456789012345678901234567890",
    "AAbAsscd1234",
    "a1!@#",
    "Aa1@#",
    "Aa1!@",
    "Aa1!@#",
    "Aa1!@#$",
    "Aa1!@#$%",
    "Aa1!@#$%^",
    "Aa1!@#$%^&",
    "Aa1!@#$%^&*",
    "Aa1!@#$%^&*()",
    "Aa1!@#$%^&*()_",
    "Aa1!@#$%^&*()_+",
    "Aa1!@#$%^&*()_+-=",
    "Aa1!@#$%^&*()_+-=[]",
    "Aa1!@#$%^&*()_+-=[]{}",
    "Aa1!@#$%^&*()_+-=[]{}|",
    "Aa1!@#$%^&*()_+-=[]{}|;:'\",./<>?",
    "Aa1!@#$%^&*()_+-=[]{}|;:'\",./<>?",
    "Aa1!@#$%^&*()_+-=[]{}|;:'\",./<>?",
    "Aa1!@#$%^&*()_+-=[]{}|;:'\",./<>?",
    "Aa1!@#$%^&*()_+-=[]{}|;:'\",./<>?",
    "Aa1!@#$%^&*()_+-=[]{}|;:'\",./<>?",
    "Aa1!@#$%^&*()_+-=[]{}|;:'\",./<>?",
    "Aa1!@#$%^&*()_+-=[]{}|;:'\",./<>?",
    "Aa1!@#$%^&*()_+-=[]{}|;:'\",./<>?",
    "Aa1!@#$%^&*()_+-=[]{}|;:'\",./<>?",
    "Aa1!@#$%^&*()_+-=[]{}|;:'\",./<>?",
    "Aa1!@#$%^&*()_+-=[]{}|;:'\",./<>?",
    "Aa1!@#$%^&*()_+-=[]{}|;:'\",./<>?",
    "Aa1!@#$%^&*()_+-=[]{}|;:'\",./<>?",
  ];

  describe("Valid cases", () => {
    validPasswords.forEach((password) => {
      it(`should return true for a strong password: ${password}`, () => {
        expect(isStrongPassword(password)).toBe(true);
      });
    });
  });
  describe("Invalid cases", () => {
    invalidPasswords.forEach((password) => {
      it(`should return false for an invalid password: ${password}`, () => {
        expect(isStrongPassword(password)).toBe(false);
      });
      it("should return an error message for an invalid password", () =>
        expect(isStrongPassword(password.slice(0, 2), "Invalid password")).toBe(
          "Invalid password"
        ));
    });
  });
});
