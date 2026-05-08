import { describe, expect, it, jest } from "@jest/globals";
import { processOrder } from "./orderProcessor";

describe("processOrder()", () => {
  it("should return the price with discount as a string", () => {
    const mockDiscount = jest.fn().mockReturnValue("Total: 900");
    const price = 1000;

    const result = processOrder(price, mockDiscount);

    expect(result).toBe("Total: 900");
    expect(mockDiscount).toHaveBeenCalled();
    expect(mockDiscount).toHaveBeenCalledWith(price);
  });

  it("should throw an error when input is not a number", () => {
    const mockDiscount = jest.fn();
    const price = "1000";

    expect(() => processOrder(price, mockDiscount)).toThrow(Error);
    expect(() => processOrder(price, mockDiscount)).toThrow(
      "Price must be a number",
    );
    expect(mockDiscount).not.toHaveBeenCalled();
  });
});
