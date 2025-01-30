import mongoose, {Document, Schema, Types} from "mongoose";

export interface Itoken extends Document {
    token: string
    user: Types.ObjectId
    createdAt: Date
}

const tokenSchema: Schema = new Schema({
    token: {
        type: String,
        required: true
    },
    user: {
        type: Types.ObjectId,
        ref: 'Auth'
    },
    createdAt: {
        type: Date,
        default: Date.now(), // Cuando se genere el token será la fecha por default
        expires: '10m' // El token expirará después de 10 minutos desde su creación
    }
});

const Token = mongoose.model<Itoken>('Token', tokenSchema);
export default Token;