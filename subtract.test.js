const subtract = require("./subtract");

test("Properly substract two numbers", () => {
  expect(subtract(1, 2)).toBe(-1);
});
