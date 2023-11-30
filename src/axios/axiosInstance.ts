import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'https://calendarapp-api-c0co.onrender.com',
    // baseURL: 'http://localhost:3000',
    headers: {
        Authorization: '',
    },
});

axiosInstance.interceptors.response.use((response: any) => response, (error: any) => {
    console.log('error.response', error);
    if (!error.response) {
        return;
    }
    if (error.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        localStorage.removeItem('userDetail');
    }
    throw error;
});

axiosInstance.interceptors.response.use(async (response: any) => response, (error: any) => {
    if (!error.response) {
        return;
    }
    if (error?.response?.status === 500) {
        console.log('error.response', error.response)
        return error.response
    }
    if (error?.response?.status === 404) {
        console.log('error.response', error.response)
        return error.response
    }
    throw error;
});

axiosInstance.interceptors.request.use(
    async (config: any) => {
        const sessionToken = localStorage.getItem('token');
        if (sessionToken) {
            const cleanedToken = sessionToken.replace(/^"(.*)"$/, '$1');
            config.headers.Authorization = `Bearer ${cleanedToken}`
            return config;
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    },
);

export default axiosInstance;