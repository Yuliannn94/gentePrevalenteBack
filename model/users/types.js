import { gql } from "apollo-server-express";

const userTypes = gql`
input userFields{
    nombre: String
    apellido: String
    correo: String
    rol: Enum_UserRoles
}
    
type User{
    _id: ID!
    nombre: String!
    apellido: String!
    correo: String!
    rol: Enum_UserRoles!
}
type Query{
    Users: [User]
    User(_id:String!): User
}
type Mutation{
    createUser(
        nombre: String!
        apellido: String!
        correo: String!
        rol: Enum_UserRoles!): User  

    editUser(
        _id: String!, fields: userFields!): User 
    
    deleteUser(_id: String): User 
}`;

export { userTypes };