import { describe, expect, it, vi } from "vitest";
import { processOrder } from "./orderProcessor";

describe("processOrder()", () => {
  it("should return the price with discount as a string", () => {
    const mockDiscount = vi.fn().mockReturnValue("Total: 900");
    const price = 1000;

    const result = processOrder(price, mockDiscount);

    expect(result).toBe("Total: 900");
    expect(mockDiscount).toHaveBeenCalledTimes(1);
  });

  it("should throw an error when input is not a number", () => {
    const mockDiscount = vi.fn();
    const price = "1000";

    expect(() => processOrder("1000", mockDiscount)).toThrow(Error);
    expect(() => processOrder("1000", mockDiscount)).toThrow(
      "Price must be a number",
    );
  });
});
