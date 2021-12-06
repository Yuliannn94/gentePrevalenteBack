import { gql } from 'apollo-server-express';
import { companyTypes } from '../model/companies/types.js';
import { userTypes } from '../model/users/types.js'
import { enumTypes } from '../model/enums/types.js'

const globals = gql`
    scalar Date
`;

export const types = [globals, companyTypes, userTypes, enumTypes];