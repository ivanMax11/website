const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Asegúrate de que la ruta sea correcta

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = await Contact.create({ name, email, message });
    res.status(201).json(contact);
  } catch (error) {
    console.error('Error al crear contacto:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
});

module.exports = router;
