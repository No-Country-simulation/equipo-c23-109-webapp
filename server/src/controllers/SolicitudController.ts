import type { Request, Response } from "express"
import Solicitud from "../models/Solicitud";

export class SolicitudController {

    static crearSolicitud = async (req: Request, res: Response) => {

        // Creará una instancia en la variable solicitud
        const solicitud = new Solicitud(req.body);

        try{
            // Almacenar la información de la solicitud
            await solicitud.save();
            res.send('Solicitud creada correctamente');
        }catch(error){
            console.log(error);
        }

    }

    static obtenerSolicitudes = async (req: Request, res: Response) => {
       try{
        const solicitud = await Solicitud.find({});
        res.json(solicitud);
       }catch(errors){
        console.log(errors);
       }
    }

}