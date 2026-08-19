import api from '../../services/axiosConfig';


export const vehiculoService = {

    getAll: async () => {
        const response = await api.get('/vehiculos');
        return response.data;
    },


    getDisponibles: async () => {
        const response = await api.get('/vehiculos/disponibles');
        return response.data;
    },

    create: async (data) => {
        const response = await api.post('/vehiculos', data);
        return response.data;
    },


    update: async (id, data) => {
        const response = await api.put(`/vehiculos/${id}`, data);
        return response.data;
    },

    delete: async (id) => {
        await api.delete(`/vehiculos/${id}`);
    },
};

export default vehiculoService;