import { CorsOptions } from 'cors';

export const corsConfig : CorsOptions = {
    // Origin es de donde llega la petición y callback permite la conexión
    origin: function(origin, callback) {
        const whitelist = [process.env.FRONTEND_URL];

        if(process.argv[2] === '--api'){ // argv son los argumentos que se pasan cuando se ejecuta la aplicación
            whitelist.push(undefined);
        }

        // si la petición se realiza desde whitelist
        if(whitelist.includes(origin)){
            callback(null, true);  // El primer parámetro es un error, en este caso no hay errores y el valor es null
        } else {
            callback(new Error('Error de CORS'));
        }
    }
}