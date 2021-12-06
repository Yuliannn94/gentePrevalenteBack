import { userModel } from './users.js';

const userResolvers = {
    Query: {
        Users: async (parent, args) => {
            const users = await userModel.find()
            return users;
        },
        User: async (parent, args) => {
            const user = await userModel.findOne({ _id: args._id })
            return user;
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const createdUser = await userModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                correo: args.correo,
                rol: args.rol,
            });
            return createdUser;
        },
        editUser: async (parent, args) => {
            const editedUser = await userModel.findByIdAndUpdate(
                args._id, 
                {...args.fields},
                { new: true });
            return editedUser;

        },
        deleteUser: async (parent, args) => {
            if (Object.keys(args).includes('_id')) {
                const deletedUser = await userModel.findOneAndDelete();
                return deletedUser;
            } else if (Object.keys(args).includes('nit')) {
                const deletedUser = await userModel.findOneAndDelete();
                return deletedUser;
            }
        },
    },
};

export { userResolvers };