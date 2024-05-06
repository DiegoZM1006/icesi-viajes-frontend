import axios from '../services/axios'

const ALL_CLIENTS_URL = 'api/v1/clients/allClients'

export const allClients = async () => {
    let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
    const config = {
        headers: {
            Authorization: `Bearer ${auth?.data.token}`        
        }
    };

    try {
        const response = await axios.get(ALL_CLIENTS_URL, config);
        return response.data;
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        throw error;
    }
};