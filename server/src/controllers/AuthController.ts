import { Request, Response } from "express";
import Auth from "../models/Auth";
import { hashPassword } from "../utils/auth";
import Token from "../models/Token";
import { generateToken } from "../utils/token";
import { AuthEmail } from "../emails/AuthEmail";
import { promises } from "nodemailer/lib/xoauth2";

export class AuthController {

    // Metodo para crear una cuenta
    static crearCuenta = async (req: Request, res: Response) => {
       
        try{
           const { password, email } = req.body;

           // Verificar si ya existe el usuario y prevenir usuario duplicados
           const existUser = await Auth.findOne({email});
           if(existUser){
            const error = new Error('El usuario ya esta registrado');
            res.status(409).json( { error: error.message }); // Codigo 409 es un conflicto
            return;
           }
            
           // Crea un usuario
            const user = new Auth(req.body);
            // Hashear el password
           user.password = await hashPassword(password);

            // Generar el token
            const token = new Token(); // Instancia al modelo del token
            token.token = generateToken(); // Se genera el token
            token.user = user.id; // usuario al que pertenece el token

            // Enviar email
            AuthEmail.sendConfirmationEmail({
                email: user.email,
                name: user.name,
                token: token.token
            })
 
            // Almacenar el token y el usuario al mismo tiempo con allSettled
            await Promise.allSettled([user.save(), token.save()])
            res.send('Cuenta creada correctamente, revisa tu email para confirmarla');
        }catch(error){
            res.status(500).json({ error: 'Error al registrar al usuario' });
        }
    }

    // Metodo para confirmar la cuenta
    static confirmarCuenta = async (req: Request, res: Response) => {
        try{
            const { token } = req.body;
            const tokenExists = await Token.findOne({token});
            if(!tokenExists){
                const error = new Error('Token no valido');
                res.status(401).json({error: error.message});
                return;
            }
            
            const user = await Auth.findById(tokenExists.user);
            user.confirmed = true;
            await Promise.allSettled([ user.save(), tokenExists.deleteOne() ]);
            res.send('Cuenta confirmada correctamente');
        } catch(error){
            res.status(500).json({ error: 'Error al confirmar al usuario' });
        }
    }
}