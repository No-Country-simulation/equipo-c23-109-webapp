import { CorsOptions } from 'cors';

export const corsConfig : CorsOptions = {
    // Origin es de donde llega la petición y callback permite la conexión
    origin: function(origin, callback) {
        const whitelist = [process.env.FRONTEND_URL];

        // si la petición se realiza desde whitelist
        if(whitelist.includes(origin)){
            callback(null, true);  // El primer parámetro es un error
        } else {
            callback(new Error('Error de CORS'));
        }
    }
}