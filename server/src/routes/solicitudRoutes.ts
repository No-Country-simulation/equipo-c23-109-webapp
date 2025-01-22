import { Router } from "express";
import { body } from 'express-validator';
import { SolicitudController } from "../controllers/SolicitudController";
import { handleInputErrors } from "../middleware/validacion";

const router = Router();

 // Validadores reutilizables
const solicitudValidators = [
    body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
    body("apellido").notEmpty().withMessage("El apellido es obligatorio"),
    body("fechaNacimiento").notEmpty().withMessage("La fecha de nacimiento es obligatoria"),
    body("telefono").notEmpty().withMessage("El teléfono es obligatorio"),
    body("montoSolicitado").notEmpty().withMessage("El monto solicitado es obligatorio"),
    body("plazoPrestamo").notEmpty().withMessage("El plazo del préstamo es obligatorio"),
    body("propositoPrestamo").notEmpty().withMessage("El propósito del préstamo es obligatorio"),
    body("ingresosMensuales").notEmpty().withMessage("Los ingresos mensuales son obligatorios"),
    body("gastosMensuales").notEmpty().withMessage("Los gastos mensuales son obligatorios"),
    body("ocupacion").notEmpty().withMessage("La ocupación es obligatoria"),
    body("tiempoEmpleo").notEmpty().withMessage("El tiempo en el empleo es obligatorio"),
];

router.post('/', solicitudValidators, handleInputErrors, SolicitudController.crearSolicitud );

router.get('/', SolicitudController.obtenerSolicitudes);

export default router;