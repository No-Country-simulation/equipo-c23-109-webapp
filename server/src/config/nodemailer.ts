import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Configuración de envío de emails
const config = () => {
    return{
        host: process.env.SMTP_HOST,
        port: +process.env.SMTP_PORT, //Se le pone el "+" para que lo detecte como número porque el port espera un número 
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
    }
}

// Cuando se llame "transporter" va a cargar la configuración con el metodo createTransport y envía el email
export const transport = nodemailer.createTransport(config());