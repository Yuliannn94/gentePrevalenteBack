import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        apellido: {
            type: String,
            required: true,
        },
        correo:{
            type: String,
            required: true,
            unique: true,
        },
        rol: {
            type: String,
            required: true,
            enum: ['ADMINISTRADOR', 'USUARIO'],
        },
    }
);

const userModel = model('Usuario', userSchema, "Usuarios");

export { userModel };