import { isUUid } from "../../src";
import { v6 as uuid } from "uuid";
describe("isUUid function", () => {
  const invalidUuids: string[] = [
    "650295ca-5b64-4f4a-8c17-1b08f0d7a71",
    "550e8400-e29b-41d4-a716-4466554400000",
    "zzzzzzzz-zzzz-zzzz-zzzz-zzzzzzzzzzzz",
    "a5d3ef35-3d87-4e4e-bc9e-b12b7f7e18c",
    "12345-67890-abcde-fghij-klmnopqrstuv",
    "f7b25c3a-2a9d-41b6-9b5b-d3206cb282a444",
    "3f9f0fa7-4b1f-466d-986f",
    "12345678-1234-1234-1234-1234567890z!",
    "xxyyzzxx-xxyy-xxyy-xxyy-xxyyzzzzzzzz",
    "7e07c8f0-0863-4093-bd6c-2d46b587af19z",
    "0987654321-0987-0987-0987-123456789012",
    "f0a82d21-fd7d-4640-8e35-4b9ab0b4d9eeextra",
    "1g1e61d2-34d8-42bc-bf9c-c1924561b5fc",
    "8c0da4fe-d81d-4627-b098-5b12a01356358",
    "6e07c8f0-0863-4093-bd6c-2d46b587af19-",
    "UUID1234-1234-1234-1234-UUIDINVALID",
    "17a2e9c5-f589-4d8f-83b2-6b6c8b511f3z",
    "99zzzz99-9999-9999-9999-999999999999",
  ];

  describe("Valid cases", () => {
    for (let i = 0; i < 100; i++) {
      const id = uuid();
      it(`should return true for a valid uuid: ${id}`, () => {
        expect(isUUid(id)).toBe(true);
      });
    }
  });

  describe("Invalid cases", () => {
    invalidUuids.forEach((uuid) => {
      it(`should return false for an invalid uuid: ${uuid}`, () => {
        expect(isUUid(uuid)).toBe(false);
      });
    });
  });
});
