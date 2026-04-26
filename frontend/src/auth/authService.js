import api from './axiosConfig';

export const loginService = async (credentials) => {

    const response = await api.post('/auth/login', credentials);
    return response.data;
};

export const registerService = async (userData) => {

    const response = await api.post('auth/register', userData);
    return response.data;
};