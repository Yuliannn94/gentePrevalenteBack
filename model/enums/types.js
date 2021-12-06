import { gql } from 'apollo-server-express';

const enumTypes = gql`
 enum Enum_UserRoles {
    ADMINISTRADOR
    USUARIO
  }
`;
export { enumTypes }