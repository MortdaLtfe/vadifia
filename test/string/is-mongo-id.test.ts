import { isMongoId } from "../../src";

describe("isMongoId function", () => {
  const validMongoIds = [
    "507f191e810c19729de860ea",
    "5f482b47c82c5a0001ccf7a9",
    "5f482b47c82c5a0001ccf7aa",
    "5f482b47c82c5a0001ccf7ab",
    "5f482b47c82c5a0001ccf7ac",
    "5f482b47c82c5a0001ccf7ad",
    "5f482b47c82c5a0001ccf7ae",
    "5f482b47c82c5a0001ccf7af",
    "5f482b47c82c5a0001ccf7b0",
    "5f482b47c82c5a0001ccf7b1",
    "5f482b47c82c5a0001ccf7b2",
    "5f482b47c82c5a0001ccf7b3",
    "5f482b47c82c5a0001ccf7b4",
    "5f482b47c82c5a0001ccf7b5",
    "5f482b47c82c5a0001ccf7b6",
    "5f482b47c82c5a0001ccf7b7",
    "5f482b47c82c5a0001ccf7b8",
    "5f482b47c82c5a0001ccf7b9",
  ];

  const invalidMongoIds = [
    "123",
    "507f191e810c19729de860e",
    "507f191e810c19729de860e12",
    "507f191e810c19729de860e123",
    "507f191e810c19729de860e1234",
    "507f191e810c19729de860e12345",
    "507f191e810c19729de860e123456",
    "507f191e810c19729de860e1234567",
    "507f191e810c19729de860e12345678",
    "507f191e810c19729de860e123456789",
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
    "aaaaaa",
    "aaaaaaa",
    "aaaaaaaa",
    "aaaaaaaaa",
    "aaaaaaaaaa",
    "aaaaaaaaaaa",
    "5f482b47c82c5a0001ccf7b10",
    "5f482b47c82c5a0001ccf7b11",
    "5f482b47c82c5a0001ccf7b12",
    "5f482b47c82c5a0001ccf7b13",
    "5f482b47c82c5a0001ccf7b14",
    "5f482b47c82c5a0001ccf7b15",
    "5f482b47c82c5a0001ccf7b16",
    "5f482b47c82c5a0001ccf7b17",
    "5f482b47c82c5a0001ccf7b18",
    "5f482b47c82c5a0001ccf7b19",
  ];

  describe("Valid cases", () => {
    validMongoIds.forEach((mongoId) => {
      it(`should return true for a valid mongo id: ${mongoId}`, () => {
        expect(isMongoId(mongoId)).toBe(true);
      });
    });
  });

  describe("Invalid cases", () => {
    invalidMongoIds.forEach((mongoId) => {
      it(`should return false for an invalid mongo id: ${mongoId}`, () => {
        expect(isMongoId(mongoId)).toBe(false);
      });
    });
  });
});
