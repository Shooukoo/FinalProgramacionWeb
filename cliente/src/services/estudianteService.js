import axios from 'axios';

const API_URL = 'http://localhost:3000/api/estudiantes';

const estudianteService = {
    getAll: () => axios.get(API_URL),
    getById: (id) => axios.get(`${API_URL}/${id}`),
    create: (data) => axios.post(API_URL, data),
    update: (id, data) => axios.put(`${API_URL}/${id}`, data),
    remove: (id) => axios.delete(`${API_URL}/${id}`),
};

export default estudianteService;
