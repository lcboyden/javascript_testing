import {
  // methods,
  // method1,
  // method2,
  arraySum,
  evensOnlyArray,
  doubleArray,
  originalArray,
  allNumbersGreaterThanZero,
} from "../app";
import { TestScheduler } from "jest";
// hint of look in before_each before_all
// describe("originalArray Test", () => {
//   test("originalArray should return it self", () => {
//     expect(originalArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
//   });
// });

// describe("doubleArray function", () => {
//   test("it should double values in array", () => {
//     expect(doubleArray([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
//   });
// });

// describe("evensOnlyArray function", () => {
//   test("should return even numbers only", () => {
//     expect(evensOnlyArray([1, 2, 3, 4])).toEqual([2, 4]);
//   });
// });

// describe("arraySum", () => {
//   test("should return sum of array", () => {
//     expect(arraySum([1, 2, 3, 4])).toEqual(10);
//   }); 
// });

describe("allNumbersGreaterThanZero", () => {
  test("should return all numbers greater than zero", () => {
    expect(allNumbersGreaterThanZero([1, 2, 3, 4])).toBeGreaterThan(0);
  });
});