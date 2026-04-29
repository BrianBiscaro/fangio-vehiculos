import axios from 'axios';


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

// Interceptor de Peticiones (inyecta el Token)
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwt_token');

        if (token && token !== 'null' && token !== 'undefined') {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor de RESPUESTAS (atrapa tokens expirados)

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.warn("Sesión expirada");

            localStorage.removeItem('jwt_token');
            localStorage.removeItem('user_data');

            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
)

export default api;
