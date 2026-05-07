// Crear una función llamada reverseString que reciba un texto y lo devuelva al revés (ejemplo: "hola" -> "aloh").
export const reverseString = (text) => {
  if (typeof text !== "string") {
    throw new Error("Type of input must be a 'String'");
  }

  return text.split("").reverse().join("");
};
