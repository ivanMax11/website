const express = require('express');
const router = express.Router();
const { createContact, getAllContacts } = require('../controllers/contactController');

// Ruta para crear un nuevo contacto
router.post('/', createContact);

// Ruta para obtener todos los contactos
router.get('/', getAllContacts);

module.exports = router;
