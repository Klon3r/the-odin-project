import { test, describe, expect } from "@jest/globals";
import { Calculator, capitalize, reverseString } from "./main.ts";

describe("Capitalize Function: ", () => {
  test("Capitalize hello to Hello", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("Capitalize z to Z", () => {
    expect(capitalize("z")).toBe("Z");
  });
  test("Capitalize A to A", () => {
    expect(capitalize("A")).toBe("A");
  });
  test("Return null", () => {
    expect(capitalize("")).toBe(null);
  });
});

describe("Reverse String Function: ", () => {
  test("Reverse hello to olleh", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
  test("Reverse x to x", () => {
    expect(reverseString("x")).toBe("x");
  });
  test("Check null is returned", () => {
    expect(reverseString("")).toBe(null);
  });
  test("Reverse ZzGgQq to qQgGzZ", () => {
    expect(reverseString("ZzGgQq")).toBe("qQgGzZ");
  });
});

describe("Calculator Class: ", () => {
  let calc = new Calculator();
  test("Add: 1 + 1 = 2", () => {
    expect(calc.add(1, 1)).toBe(2);
  });
  test("Add: (-1) + (-1) = -2", () => {
    expect(calc.add(-1, -1)).toBe(-2);
  });
  test("Subtract: 1 - 1 = 0", () => {
    expect(calc.subtract(1, 1)).toBe(0);
  });
  test("Subtract: (-1) - (-1) = 0", () => {
    expect(calc.subtract(-1, -1)).toBe(0);
  });
  test("Divide: 10 / 5 = 2", () => {
    expect(calc.divide(10, 5)).toBe(2);
  });
  test("Divide: 10 / 0 = 'Cannot divide by 0'", () => {
    expect(calc.divide(10, 0)).toBe("Cannot divide by 0");
  });
  test("Multiply: 10 * 5 = 50", () => {
    expect(calc.mulitply(10, 5)).toBe(50);
  });
  test("Multiply: 10 * -1 = -10", () => {
    expect(calc.divide(10, -1)).toBe(-10);
  });
});
