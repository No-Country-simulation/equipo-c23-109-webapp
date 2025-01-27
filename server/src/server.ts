import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import solicitudRoutes from './routes/solicitudRoutes';
import cors from 'cors';

dotenv.config()

connectDB();

// Instancia del servidor
const app = express()

// Configurar CORS
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

// Habilitar la lectura del formato json para que pueda leer los valores que le envíe desde el body
app.use(express.json());

// Registrar rutas
app.use('/api/solicitudes', solicitudRoutes);

export default app