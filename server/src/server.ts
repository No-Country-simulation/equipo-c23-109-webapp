import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db'

dotenv.config()

connectDB();

// Instancia del servidor
const app = express()

export default app