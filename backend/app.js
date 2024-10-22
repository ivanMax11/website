const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/database'); // Nueva conexión con MongoDB
const contactRoutes = require('./routes/contacts');

// Configura CORS
app.use(cors({
  origin: ['http://localhost:8080', 'https://website-f.onrender.com']
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/contacts', contactRoutes);

// Conectar a la base de datos y empezar el servidor
connectDB(); // Llamar a la función para conectar a MongoDB

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
