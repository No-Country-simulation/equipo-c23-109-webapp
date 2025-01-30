// Función para obtener un número aleatorio de 6 digitos
export const generateToken = () => Math.floor(100000 + Math.random() * 900000).toString();