import type { Request, Response } from "express"
import Solicitud from "../models/Solicitud";

export class SolicitudController {

    // Método para crear una solicitud
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

    // Método para obtener todas las solicitudes 
    static obtenerSolicitudes = async (req: Request, res: Response) => {
       try{
        const solicitudes = await Solicitud.find({});
        res.json(solicitudes);
       }catch(errors){
        console.log(errors);
       }
    }

    // Método para obtener una solicitud por su ID
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

    // Método para actualizar una solicitud
    static actualizarSolicitud = async (req: Request, res: Response) => {
        const { id } = req.params;

        try{
            // findByIdAndUpdate toma como segundo parámetro el req.body
            const solicitud = await Solicitud.findByIdAndUpdate(id, req.body);

            if(!solicitud){
                const error = new Error('Solicitud no encontrada');
                res.status(404).json({ error: error.message });
                return;
            }

            solicitud.save();
            res.send('Solicitud actualizada');
        }catch(error){
            console.log(error);
        }
    }

    // Método para eliminar una solicitud
    static eliminarSolicitud = async (req: Request, res: Response) => {
        const { id } = req.params;

        try{
            // Encontrar el id de la solicitud
            const solicitud = await Solicitud.findById(id);

            // Se valida por si no encuentra el id de la solicitud
            if(!solicitud){
                const error = new Error('Solicitud no encontrada');
                res.status(404).json({ error: error.message });
            }
            // se elimina la solicitud
            await solicitud.deleteOne();
            res.send('Solicitud eliminada');

        }catch(error){
            console.log(error);
        }
    }
}