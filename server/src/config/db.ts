import mongoose from "mongoose";
import  Colors  from "colors";
import { exit } from 'node:process';

// Conexión a la base de datos
export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.DATABASE_URL);
        const url = `${connection.host} : ${connection.port}`;
        console.log(Colors.cyan.bold(`MongoDB conectado en ${url}`));
    } catch (error) {
        // console.log(error.message);
        console.log( Colors.red.bold('Error al conectar a MongoDB') );
        exit(1);
    }
}