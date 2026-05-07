import { describe, expect, test } from "vitest";
import { reverseString } from "./stringUtils";

describe("reverseString()", () => {
  test("should reverse a given string", () => {
    const input = "Hello, World!";
    const reversed = reverseString(input);

    expect(reversed).toBe("!dlroW ,olleH");
  });

  test("should throw an error when input is not a string", () => {
    const input = 0;

    expect(() => reverseString(input)).toThrow(Error);
    expect(() => reverseString(input)).toThrow(
      "Type of input must be a 'String'",
    );
  });
});
