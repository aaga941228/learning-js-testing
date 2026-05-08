// Crear una función llamada getUserData. Esta función simula una petición a una API para obtener datos de un usuario.
// Instrucciones:Crea userService.js. La función debe recibir un id.Si el id es undefined, debe lanzar un error
// (usa throw new Error).Si el id existe, debe retornar una Promesa que se resuelva después de 500ms con un objeto:
// { id, name: "User-" + id }.

const availableIds = [1];

export const getUserData = async (userId) => {
  if (userId === undefined) {
    throw Error("User Id must not be undefined");
  }

  if (!availableIds.includes(userId)) {
    throw Error("Invalid user id");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: `User-${userId}` });
    }, 500);
  });
};
