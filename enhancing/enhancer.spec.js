const enhancer = require('./enhancer.js');
// test away!
describe("repair()", () => {
    const item = {
      name: "Repair Test Item",
      enhancement: 5,
      durability: 20,
    };
    it("restores item's durability to 100", () => {
      const expected = 100;
      const actual = enhancer.repair(item);
      expect(actual.durability).toBe(expected);
    });
  });
  
  
  describe("success()", () => {
    it("increases item enhancement by 1 if enhancement is less than 20", () => {
      const item = {
        name: "Success Test Item Less Than 20",
        enhancement: 15,
        durability: 20,
      };
      const expected = 16;
      const actual = enhancer.success(item);
      expect(actual.enhancement).toBe(expected);
    });
    it("doesn't change if enhancement is 20", () => {
      const item = {
        name: "Success Test Item Equal To 20",
        enhancement: 20,
        durability: 20,
      };
      const expected = 20;
      const actual = enhancer.success(item);
      expect(actual.enhancement).toBe(expected);
    });
  });
  
  
  describe("fail()", () => {
    it("decreases item durability by 5 if enhancement is less than 15", () => {
      const item = {
        name: "Fail Test Item Less Than 15",
        enhancement: 10,
        durability: 20,
      };
      const expected = 15;
      const actual = enhancer.fail(item);
      expect(actual.durability).toBe(expected);
    });
  
    it("decreases item durability by 10 if enhancement is equal to 15 or more", () => {
      const item = {
        name: "Fail Test Item 15 or less than 16",
        enhancement: 15,
        durability: 20,
      };
      const expected = 10;
      const actual = enhancer.fail(item);
      expect(actual.durability).toBe(expected);
    });
  
    it("decreases item durability by 1 if enhancement is greater than 16", () => {
      const item = {
        name: "Fail Test Item More Than 16",
        enhancement: 17,
        durability: 20,
      };
      const expected = 19;
      const actual = enhancer.fail(item);
      expect(actual.durability).toBe(expected);
    });
  }); 