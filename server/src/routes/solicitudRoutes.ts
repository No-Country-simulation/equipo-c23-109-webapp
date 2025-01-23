import { Router } from "express";
import { body, param } from 'express-validator';
import { SolicitudController } from "../controllers/SolicitudController";
import { handleInputErrors } from "../middleware/validacion";

const router = Router();

 // Validadores reutilizables
const solicitudValidators = [
    body("nombre")
        .notEmpty().withMessage("El nombre es obligatorio"),
    body("apellido")
        .notEmpty().withMessage("El apellido es obligatorio"),
    body("fechaNacimiento")
        .notEmpty().withMessage("La fecha de nacimiento es obligatoria"),
    body("telefono")
        .notEmpty().withMessage("El teléfono es obligatorio"),
    body("montoSolicitado")
        .notEmpty().withMessage("El monto solicitado es obligatorio")
        .isNumeric().withMessage('Debe de ingresar un número'),
    body("plazoPrestamo")
        .notEmpty().withMessage("El plazo del préstamo es obligatorio"),
    body("propositoPrestamo")
        .notEmpty().withMessage("El propósito del préstamo es obligatorio"),
    body("ingresosMensuales")
        .notEmpty().withMessage("Los ingresos mensuales son obligatorios")
        .isNumeric().withMessage('Debe de ingresar un número'),
    body("gastosMensuales")
        .notEmpty().withMessage("Los gastos mensuales son obligatorios")
        .isNumeric().withMessage('Debe de ingresar un número'),
    body("ocupacion")
        .notEmpty().withMessage("La ocupación es obligatoria"),
    body("tiempoEmpleo")
        .notEmpty().withMessage("El tiempo en el empleo es obligatorio")
];

// Crear solicitud
router.post('/', solicitudValidators, handleInputErrors, SolicitudController.crearSolicitud );

// Obtener todas las solicitudes
router.get('/', SolicitudController.obtenerSolicitudes);

// Obtener solicitud por el Id
router.get('/:id', param('id').isMongoId().withMessage('ID no válido'),
        handleInputErrors, SolicitudController.obtenerSolicitudPorId
    );

// Actualizar una solicitud
router.put('/:id', solicitudValidators, param('id').isMongoId().withMessage('ID no válido'),
        handleInputErrors, SolicitudController.actualizarSolicitud
    );

// Eliminar una solicitud
router.delete('/:id', param('id').isMongoId().withMessage('ID no válido'), 
        handleInputErrors, SolicitudController.eliminarSolicitud
);


export default router;