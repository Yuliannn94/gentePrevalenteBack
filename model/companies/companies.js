import  mongoose  from "mongoose";

const { Schema, model } = mongoose;

const companySchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        razonSocial: {
            type: String,
            required: true,
        },
        nit: {
            type: String,
            required: true,
            unique:true,
        },
        identificacion: {
            type: String,
            required: true,
            unique:true,

        },
        numeroEmpleados: {
            type: String,
            required: true,
            unique:true,

        },
        logo: {
            type: String
        },
    }
);

const companyModel = model('Empresa', companySchema, "Empresas");

export { companyModel };