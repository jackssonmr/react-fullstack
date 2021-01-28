const mongoose = require("mongoose");
require("dotenv").config({ path: "./variables.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true
    });
    console.log("Conectado...");
  } catch (error) {
    console.log("Hubo error");
    console.log(error);
  }
};

module.exports = conectarDB;
