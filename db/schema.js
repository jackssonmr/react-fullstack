const { gql } = require("apollo-server");

const typeDefs = gql`
  type Usuarios {
    id: ID
    nombre: String
    apellido: String
    email: String
    creado: String
  }

  input UsuarioInput {
    nombre: String!
    apellido: String!
    email: String!
    password: String!
  }

  type Query {
    obtenerCurso: String
  }

  type Mutation {
    nuevoUsuario(input: UsuarioInput): Usuarios
  }
`;

module.exports = typeDefs;
