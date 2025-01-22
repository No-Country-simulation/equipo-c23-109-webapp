import { validationResult } from 'express-validator';
import type {Request, Response, NextFunction} from 'express';

// Función que en caso de que falle la validación detiene la ejecución y muestra los errores
export const handleInputErrors = (req: Request, res: Response, next: NextFunction) => {
    // Obtener el resultado de una validación en una variable
    const errors = validationResult(req);
    // Si es diferente a vacío
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return; // detener la función en caso de que hayan errores.
    }
    // Continua al siguiente middleware o controlador si no hay errores
    next(); 
};
