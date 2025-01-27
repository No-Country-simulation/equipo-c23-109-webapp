import mongoose, {Schema, Document} from "mongoose";

const solicitudStatus = {
    PENDIENTE: "pendiente",
    APROBADA: "aprobada",
    RECHAZADA: "rechazada",
    FINANCIADA: "financiada",
    NO_FINANCIADA:"noFinanciada"
} as const

// el type SolicitudStatus solo aceptará los valores del objeto solicitudStatus
export type SolicitudStatus = typeof solicitudStatus[keyof typeof solicitudStatus];

// "Document" hereda todas las funciones de document
export interface ISolicitud  extends Document  {
    nombre: string
    apellido: string
    fechaNacimiento: Date
    telefono: string
    montoSolicitado: number
    plazoPrestamo: number
    propositoPrestamo: string
    ingresosMensuales: number
    gastosMensuales: number
    ocupacion: string
    tiempoEmpleo: string
    status: SolicitudStatus
}

// schema - modelo para mongoose
const SolicitudSchema: Schema = new Schema({
    nombre: {
        type: String, 
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
    },
    status: {
        type: String,
        emun: Object.values(solicitudStatus),
        default: solicitudStatus.PENDIENTE
    }
}, {collection: 'solicitud', timestamps: true }); 

// Agregar un modelo a la instancia de mongoose
const Solicitud = mongoose.model<ISolicitud>('Solicitud', SolicitudSchema);
// Exportarlo para utilizarlo en los controladores
export default Solicitud;