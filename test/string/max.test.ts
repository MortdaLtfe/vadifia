import { max } from "../../src";

describe("max function", () => {
  const validTests: [string, number][] = [
    ["Afghanistan", 14],
    ["Albania", 15],
    ["Algeria", 16],
    ["Andorra", 17],
    ["Angola", 18],
    ["Antigua and Barbuda", 33],
    ["Argentina", 20],
    ["Armenia", 21],
    ["Australia", 22],
    ["Austria", 23],
    ["Azerbaijan", 24],
    ["Bahamas", 25],
    ["Bahrain", 26],
    ["Bangladesh", 27],
    ["Barbados", 28],
    ["Belarus", 29],
    ["Belgium", 30],
    ["Belize", 31],
    ["Benin", 32],
    ["Bhutan", 33],
    ["Bolivia", 34],
    ["Bosnia and Herzegovina", 35],
    ["Botswana", 36],
    ["Brazil", 37],
    ["Brunei", 38],
    ["Bulgaria", 39],
    ["Burkina Faso", 40],
    ["Burundi", 41],
    ["Cambodia", 42],
    ["Cameroon", 43],
    ["Canada", 44],
    ["Central African Republic", 45],
    ["Chad", 46],
    ["Chile", 47],
    ["China", 48],
    ["Colombia", 49],
    ["Comoros", 50],
    ["Congo", 51],
    ["Costa Rica", 52],
    ["C te d'Ivoire", 53],
    ["Croatia", 54],
    ["Cuba", 55],
    ["Cyprus", 56],
    ["Czech Republic", 57],
    ["Denmark", 58],
    ["Djibouti", 59],
    ["Dominica", 60],
  ];
  const invalidTests: [string, number][] = [
    ["Ahmed", 4],
    ["Mohammed", 8],
    ["Johny", 5],
    ["Michael", 7],
    ["Sarah", 5],
    ["Elizabeth", 9],
    ["David", 5],
    ["Olivia", 6],
    ["William", 7],
    ["James", 5],
    ["George", 6],
    ["Maryy", 5],
    ["Thomas", 6],
    ["Robert", 6],
    ["Richard", 7],
    ["Charles", 7],
    ["Christopher", 10],
    ["Matthew", 7],
    ["Joshua", 6],
    ["Nicholas", 8],
  ];

  describe("Valid cases", () => {
    validTests.forEach(([value, maximum]) => {
      it(`should return true for string "${value}" with maximum length ${maximum}`, () => {
        expect(max(value, maximum)).toBe(true);
      });
    });
  });

  describe("Invalid cases", () => {
    invalidTests.forEach(([value, maximum]) => {
      it(`should return false for string "${value}" with maximum length ${maximum}`, () => {
        expect(max(value, maximum)).toBe(false);
      });
    });
  });
});
