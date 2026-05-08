// Crear una función llamada processOrder. Esta función recibe dos parámetros: un precio y una función de descuento (callback).
// Instrucciones: Si el precio no es un número, debe lanzar un error. Debe llamar a la función de descuento pasándole el precio.
// Debe retornar un string con el formato: "Total: $X" (donde X es el resultado del descuento).

export const processOrder = (price, discountCallback) => {
  if (typeof price !== "number") {
    throw Error("Price must be a number");
  }

  return discountCallback(price);
};
