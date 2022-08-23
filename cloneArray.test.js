const cloneArray = require("./cloneArray");

test("Properly clones array", () => {
  const array = [1, 2, 3];
  // expect(cloneArray(array)).toBe(array); This will be failure because array needs to have same structure but don't have same memory address
  expect(cloneArray(array)).toEqual(array);
});
