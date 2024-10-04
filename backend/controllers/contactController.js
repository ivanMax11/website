const { validationResult } = require('express-validator');
const Contact = require('../models/Contact.js');

// Crear un nuevo contacto
const createContact = async (req, res) => {
    // Verificar si hay errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message, phone } = req.body;

    try {
        const newContact = await Contact.create({ name, email, message, phone });
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el contacto.' });
    }
};

// Obtener todos los contactos
const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los contactos.' });
    }
};

module.exports = {
    createContact,
    getAllContacts
};
