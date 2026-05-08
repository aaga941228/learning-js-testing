import { describe, it, expect } from "@jest/globals";
import { getUserData } from "./userService";

describe("getUserData()", () => {
  it("should return a user object when function receives a valid id", async () => {
    await expect(getUserData(1)).resolves.toEqual({ id: 1, name: "User-1" });
  });

  it("should return an error when function receives an undefined id", async () => {
    await expect(getUserData(undefined)).rejects.toThrow(
      "User Id must not be undefined",
    );
  });

  it("should return an error when function receives an invalid id", async () => {
    await expect(getUserData(2)).rejects.toThrow("Invalid user id");
  });
});
