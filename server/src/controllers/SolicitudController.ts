import type { Request, Response } from "express"
import Solicitud from "../models/Solicitud";

export class SolicitudController {

    static crearSolicitud = async (req: Request, res: Response) => {

        // Creará una instancia del request que llega en la variable solicitud
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
        const solicitudes = await Solicitud.find({});
        res.json(solicitudes);
       }catch(errors){
        console.log(errors);
       }
    }

    static obtenerSolicitudPorId = async (req: Request, res: Response) => {
        const { id } = req.params;  // Destructuring para obtener el id

        try{
            const solicitud = await Solicitud.findById(id);

            // Validación por si no encuentra ninguna solicitud
            if(!solicitud){
                const error = new Error('Solicitud no encontrada');
                res.status(404).json({ error: error.message });
                return;
            }
            res.json(solicitud);
        }catch(errors){
            console.log(errors);
        }
    }

    static actualizarSolicitud = async (req: Request, res: Response) => {
        const { id } = req.params;

        try{
            // findByIdAndUpdate toma como segundo parámetro el req.body
            const solicitud = await Solicitud.findByIdAndUpdate(id, req.body);

            if(!solicitud){
                const error = new Error('Error al actualizar la solicitud');
                res.status(404).json({ error: error.message });
                return;
            }

            solicitud.save();
            res.send('Solicitud actualizada');
        }catch(error){
            console.log(error);
        }
    }

}