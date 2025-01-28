import mongoose, { Document, Schema} from "mongoose";

export interface IAuth extends Document {
    email: string
    password: string
    name: string
    confirmed: boolean
};

const authSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }, 
    name: {
        type: String,
        required: true,
        trim: true
    },
    confirmed: {
        type: Boolean,
        default: false
    }
});

const Auth = mongoose.model<IAuth>('Auth', authSchema);
export default Auth;