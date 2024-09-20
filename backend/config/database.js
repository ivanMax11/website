const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,  // Asegúrate de incluir el puerto
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      connectTimeout: 60000, // Tiempo de espera de 60 segundos
    },
  }
);

module.exports = sequelize;
