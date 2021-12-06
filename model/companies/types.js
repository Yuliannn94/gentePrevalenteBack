import { gql } from "apollo-server-express";

const companyTypes = gql`
input companyFields{
    nombre: String
    razonSocial: String
    nit: String
    identificacion:String
    numeroEmpleados:String
    logo:String
}

type Company{
    _id: ID!
    nombre: String!
    razonSocial: String!
    nit: String!
    identificacion:String!
    numeroEmpleados:String!
    logo:String
}
type Query {
    Companies: [Company]
    Company(_id:String!): Company
}
type Mutation {
    createCompany(
        nombre: String!
        razonSocial: String!
        nit: String!
        identificacion: String!
        numeroEmpleados: String!
        logo: String): Company  

    editCompany(
        _id: String!, fields: companyFields!): Company 
    
    deleteCompany(
        _id: String!
        nombre: String!
        razonSocial: String!
        nit: String!
        identificacion: String!
        numeroEmpleados: String!
        logo: String): Company 
}`;

export { companyTypes };