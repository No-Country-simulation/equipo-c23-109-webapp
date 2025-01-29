import { Router } from "express";
import { body } from "express-validator";
import { AuthController } from "../controllers/AuthController";
import { handleInputErrors } from "../middleware/validacion";

const router = Router();

const authValidators = [
    body('name').notEmpty().withMessage('El nombre no puede ir vacio'),
    body('password').isLength({ min: 8 }).withMessage('El password tiene que tener minimo 8 caracteres'),
    body('email').isEmail().withMessage('Email no valido'),
     // custon me permite crear mis propias reglas de validación
    // value es el valor de "password_confirmation" que se le envía y se puede comparar con otro request
    body('password_confirmation').custom( (value, { req }) => {
        if(value !== req.body.password){
            throw new Error('Los password no son iguales')
        }
        return true; // en caso de que si son iguales se continua ejecutandose la app
    })
]

router.post('/create-account', authValidators, handleInputErrors, AuthController.crearCuenta);

export default router;