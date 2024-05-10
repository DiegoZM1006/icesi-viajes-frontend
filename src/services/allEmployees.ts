import axios from '../services/axios'

const ALL_EMPLOYEES_URL = 'api/v1/employees/allEmployees'

export const allEmployees = async () => {
    let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
    const config = {
        headers: {
            Authorization: `Bearer ${auth?.data.token}`        
        }
    };

    try {
        const response = await axios.get(ALL_EMPLOYEES_URL, config);
        return response.data;
    } catch (error) {
        console.error('Error al obtener empleados:', error);
        throw error;
    }
};