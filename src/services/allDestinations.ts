import axios from '../services/axios'

const ALL_DESTINATIONS_URL = 'api/v1/destinations/allDestinations'

export default async function allClients() {
    let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
    const config = {
        headers: {
            Authorization: `Bearer ${auth?.data.token}`        
        }
    };

    try {
        const response = await axios.get(ALL_DESTINATIONS_URL, config);
        return response.data;
    } catch (error) {
        console.error('Error al obtener destinos:', error);
        throw error;
    }
}