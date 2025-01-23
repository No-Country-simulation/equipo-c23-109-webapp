import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import solicitudRoutes from './routes/solicitudRoutes';

dotenv.config()

connectDB();

// Instancia del servidor
const app = express()

// Habilitar la lectura del formato json para que pueda leer los valores que le envíe desde el body
app.use(express.json());

// Registrar rutas
app.use('/api/solicitudes', solicitudRoutes);

export default app