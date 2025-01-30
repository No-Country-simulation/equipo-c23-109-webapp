import { transport } from "../config/nodemailer"

interface IEmail {
    email:string
    name: string,
    token: string
}

export class AuthEmail {
    static sendConfirmationEmail = async (user: IEmail) => {
           // Enviar el email
        const info = await transport.sendMail({
            from: 'Admin <admin@gmail.com>',
            to: user.email,
            subject: 'Confirma tu cuenta',
            text: 'Confirma tu cuenta',
            html: `<h4> Hola ${user.name} has creado tu cuenta correctamente, ya casi está todo listo,
            solo debes de confirmar tu cuenta </h4>
            <p> Visita el siguiente enlace:  </p>
            <a href=''> Confirma tu cuenta </a>
            <p>Ingresa el código: <b>${user.token}</b> </p>
            <p>Este token expira en 10 minutos</p> 
            `
        })

        console.log('Mensaje enviado', info.messageId);
    }
}