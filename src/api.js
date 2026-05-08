// Una función fetchStock(productId) que devuelva una promesa. Si el ID es "laptop", devuelve 5. Si no, devuelve 0.

export const fetchStock = async (productId) => {
  const laptopId = "laptop";

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productId === laptopId ? 5 : 0);
    }, 100);
  });
};
