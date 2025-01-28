import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { corsConfig } from './config/cors'
import { connectDB } from './config/db'
import authRoutes from './routes/authRoutes'
import solicitudRoutes from './routes/solicitudRoutes'

dotenv.config()

connectDB();

// Instancia del servidor
const app = express()

// Permitir las conexiones autorizadas del frontend
app.use(cors(corsConfig));

// Habilitar la lectura del formato json para que pueda leer los valores que le envíe desde el body
app.use(express.json());

// Registrar rutas
app.use('/api/auth', authRoutes);  // Endpoint de auntenticación
app.use('/api/solicitudes', solicitudRoutes);  // Endpoint de solicitudes


export default app