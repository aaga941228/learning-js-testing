import { describe, test, expect } from "vitest";
import { getUserData } from "./userService";

describe("getUserData()", () => {
  test("should return a user object when function receives a valid id", async () => {
    await expect(getUserData(1)).resolves.toEqual({ id: 1, name: "User-1" });
  });

  test("should return an error when function receives an undefined id", async () => {
    await expect(getUserData(undefined)).rejects.toThrow(
      "User Id must not be undefined",
    );
  });

  test("should return an error when function receives an invalid id", async () => {
    await expect(getUserData(2)).rejects.toThrow("Invalid user id");
  });
});
