const express = require('express');
const router = express.Router();
const { createContact, getAllContacts } = require('../controllers/contactController');
const { body } = require('express-validator');
const rateLimit = require('express-rate-limit');

// Limitador de tasa para evitar spam
const contactLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 5, 
  message: 'Demasiadas solicitudes, porfavor intenta mas tarde.',
});

// Ruta para crear un nuevo contacto con validación
router.post(
  '/', contactLimiter,
  [
    body('name').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres').trim().escape(),
    body('email').isEmail().withMessage('Debes ingresar un email válido').normalizeEmail(),
    body('phone').optional().isNumeric().isLength({ min: 10, max: 10 }).withMessage('El teléfono debe tener 10 dígitos'),
    body('message').isLength({ min: 10 }).withMessage('El mensaje debe tener al menos 10 caracteres').trim().escape(),
  ],
  createContact
);

// Ruta para obtener todos los contactos
router.get('/', getAllContacts);

module.exports = router;
