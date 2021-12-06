import { companyModel } from './companies.js';

const companyResolvers = {
    Query: {
        Companies: async (parent, args) => {
            const companies = await companyModel.find()
            return companies;
        },
        Company: async (parent, args) => {
            const company = await companyModel.findOne({ _id: args._id })
            return company;
        },
    },
    Mutation: {
        createCompany: async (parent, args) => {
            const createdCompany = await companyModel.create({
                nombre: args.nombre,
                razonSocial: args.razonSocial,
                nit: args.nit,
                identificacion: args.identificacion,
                numeroEmpleados: args.numeroEmpleados,
                logo: args.logo,
            });
            return createdCompany;
        },
        editCompany: async (parent, args) => {
            const editedCompany = await companyModel.findByIdAndUpdate(
                args._id, 
                {...args.fields},
                { new: true });
            return editedCompany;

        },
        deleteCompany: async (parent, args) => {
            if (Object.keys(args).includes('_id')) {
                const deletedCompany = await companyModel.findOneAndDelete();
                return deletedCompany;
            } else if (Object.keys(args).includes('nit')) {
                const deletedCompany = await companyModel.findOneAndDelete();
                return deletedCompany;
            }
        },
    },
};

export { companyResolvers };