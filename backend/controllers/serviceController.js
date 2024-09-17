const Service = require('../models/Service');

// Obtener todos los servicios
const getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los servicios.' });
  }
};

// Crear un nuevo servicio
const createService = async (req, res) => {
  const { title, description, price } = req.body;
  try {
    const newService = await Service.create({ title, description, price });
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el servicio.' });
  }
};

// Obtener un servicio por ID
const getServiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await Service.findByPk(id);
    if (service) {
      res.status(200).json(service);
    } else {
      res.status(404).json({ error: 'Servicio no encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el servicio.' });
  }
};

// Actualizar un servicio
const updateService = async (req, res) => {
  const { id } = req.params;
  const { title, description, price } = req.body;
  try {
    const service = await Service.findByPk(id);
    if (service) {
      service.title = title;
      service.description = description;
      service.price = price;
      await service.save();
      res.status(200).json(service);
    } else {
      res.status(404).json({ error: 'Servicio no encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el servicio.' });
  }
};

// Eliminar un servicio
const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await Service.findByPk(id);
    if (service) {
      await service.destroy();
      res.status(200).json({ message: 'Servicio eliminado.' });
    } else {
      res.status(404).json({ error: 'Servicio no encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el servicio.' });
  }
};

module.exports = {
  getAllServices,
  createService,
  getServiceById,
  updateService,
  deleteService
};
