import { fetchStock } from "./api.js";
import { sendNotification } from "./notifier.js";

export const checkAndNotifyStock = async (productId) => {
  const stock = await fetchStock(productId);

  if (stock > 0) {
    sendNotification(`Stock available: ${stock}`);
    return true;
  }

  sendNotification("No stock available");
  return false;
};
