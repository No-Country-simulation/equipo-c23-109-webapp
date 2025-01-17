import mongoose, {Schema, Document} from "mongoose";

// type de typescript
// "Document" herera todas las funciones de document
export type SolicitudType = Document & {
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    telefono: string;
    montoSolicitado: number;
    plazoPrestamo: number;
    propositoPrestamo: string;
    ingresosMensuales: number;
    gastosMensuales: number;
    ocupacion: string;
    tiempoEmpleo: string;
}

// schema - modelo para mongoose
const SolicitudSchema: Schema = new Schema({
    nombre: {
        type: String, //tipo de dato de la columna en la base de datos
        required: true,
        trim: true
    },
    apellido:{
        type: String,
        required: true,
        trim: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    montoSolicitado: {
        type: Number,
        required: true,
        min: 0
    },
    plazoPrestamo: {
        type: Number,
        required: true,
        min: 1 //meses
    },
    propositoPrestamo:{
        type: String,
        required: true,
        trim: true
    },
    ingresosMensuales: {
        type: Number,
        required: true,
        min: 0
    },
    gastosMensuales:{
        type: Number,
        required: true,
        min: 0
    },
    ocupacion: {
        type: String,
        required: true,
        trim:true
    },
    tiempoEmpleo: {
        type: String,
        required: true,
        trim: true
    }
});

// Agregar un modelo a la instancia de mongoose
const Solicitud = mongoose.model<SolicitudType>('Solicitud', SolicitudSchema);
// Exportarlo para utilizarlo en los controladores
export default Solicitud;