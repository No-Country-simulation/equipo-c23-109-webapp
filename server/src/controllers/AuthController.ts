import { Request, Response } from "express";
import Auth from "../models/Auth";

export class AuthController {

    static crearCuenta = async (req: Request, res: Response) => {
       
        try{
            const user = new Auth(req.body);
            await user.save();
            res.send('Cuenta creada correctamente, revisa tu email para confirmarla');
        }catch(error){
            res.status(500).json( {error: 'Error al registrar al usuario'});
        }
    }
}