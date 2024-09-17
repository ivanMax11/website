const Contact = require('../models/Contact.js');

// Crear un nuevo contacto
const createContact = async (req, res) => {
    const { name, email, message } = req.body;

    // Verifica si los datos están presentes
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
        const newContact = await Contact.create({ name, email, message });
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
