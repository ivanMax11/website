const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  message: {
    type: String,
    required: true,
    minlength: 10
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
      message: props => `${props.value} no es un número de teléfono válido!`
    },
    required: false
  }
});

module.exports = mongoose.model('Contact', ContactSchema);
