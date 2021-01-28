const Usuario = require("../models/usuario");
const { bcryptjs } = require("bcryptjs");

const resolvers = {
  Query: {
    obtenerCurso: () => "Algo"
  },
  Mutation: {
    nuevoUsuario: (_, { input }) => {
      const { email, password } = input;

      //revisar si el usuario existe
      const busqueda = Usuario.where({ email: input.email });
      var existeUsuario = false;

      busqueda.findOne(function (err, obj) {
        console.log(err);
        if (obj) {
          console.log(obj);
          existeUsuario = true;
        }
      });
      //existeUsuario = false;
      // console.log(existeUsuario);
      console.log(input);
      //return "Creando usuario 1...";

      if (existeUsuario) {
        throw new Error("El usuario ya esta registrado");
      }

      //hashear su password
      //const salt = bcryptjs.genSaltSync(10);
      // input.password = bcryptjs.hashSync(password, salt);

      try {
        const usuario = new Usuario(input);
        usuario.save();
        return usuario;
      } catch (error) {
        console.log(error);
      }
    }
  }
};

module.exports = resolvers;
