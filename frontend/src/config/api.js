import axios from 'axios';

// configura la URL base para las solicitudes
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export default api;