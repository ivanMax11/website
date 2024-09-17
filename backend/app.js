const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./config/database');
const contactRoutes = require('./routes/contacts');

// Configura CORS
app.use(cors({
  origin: 'http://localhost:8080',
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/contacts', contactRoutes);

// Conectar a la base de datos y empezar el servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
  });
});
