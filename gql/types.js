import {gql} from 'apollo-server-express';
import { companyTypes } from '../model/companies/types.js';

const globals = gql`
    scalar Date
`;

export const types = [globals, companyTypes];