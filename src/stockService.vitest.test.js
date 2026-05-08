import { describe, test, expect, vi, beforeEach } from "vitest";
import { sendNotification } from "./notifier";
import { checkAndNotifyStock } from "./stockService";

vi.mock("./notifier");

describe("checkAndNotifyStock()", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should return true and call sendNotification when product id is valid", async () => {
    const productId = "laptop";

    await expect(checkAndNotifyStock(productId)).resolves.toBe(true);
    expect(sendNotification).toHaveBeenCalledWith("Stock available: 5");
  });

  test("should return true and call sendNotification when product id is invalid", async () => {
    const productId = "phone";

    await expect(checkAndNotifyStock(productId)).resolves.toBe(false);
    expect(sendNotification).toHaveBeenCalledWith("No stock available");
  });
});
