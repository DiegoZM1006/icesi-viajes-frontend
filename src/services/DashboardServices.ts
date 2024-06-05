import axios from '../services/axios'

const COUNT_DESTINATIONS_URL = 'api/v1/destinations/countDestinations'
const COUNT_EMPLOYEES_URL = 'api/v1/employees/countEmployees'
const COUNT_CLIENTS_URL = 'api/v1/clients/countClients'
const COUNT_SALES_URL = 'api/v1/reservation/countReservations'
const TOTAL_PRICES_SALES_URL = 'api/v1/reservation/totalPriceReservations'
const TOP_FIVE_DESTINATIONS_URL = '/api/v1/reservation_destination/topFiveMostSalesDestinations'
const SALES_OF_THE_WEEK_URL = '/api/v1/reservation/salesOfTheWeek'
const TOP_FIVE_SELLERS_URL = '/api/v1/reservation/topFiveBetterSeller'
const LATEST_SALES_URL = '/api/v1/reservation/latestSales'

export const countDestinations = async () => {
    let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
    const config = {
        headers: {
            Authorization: `Bearer ${auth?.data.token}`        
        }
    };

    try {
        const response = await axios.get(COUNT_DESTINATIONS_URL, config);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el contador de destinos', error);
        throw error;
    }
};

export const countEmployees = async () => {
    let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
    const config = {
        headers: {
            Authorization: `Bearer ${auth?.data.token}`        
        }
    };

    try {
        const response = await axios.get(COUNT_EMPLOYEES_URL, config);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el contador de empleados', error);
        throw error;
    }
};

export const countClients = async () => {
    let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
    const config = {
        headers: {
            Authorization: `Bearer ${auth?.data.token}`        
        }
    };

    try {
        const response = await axios.get(COUNT_CLIENTS_URL, config);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el contador de clientes', error);
        throw error;
    }
};

export const countSales = async () => {
    let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
    const config = {
        headers: {
            Authorization: `Bearer ${auth?.data.token}`        
        }
    };

    try {
        const response = await axios.get(COUNT_SALES_URL, config);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el contador de ventas', error);
        throw error;
    }
};

export const totalPriceSales = async () => {
    let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
    const config = {
        headers: {
            Authorization: `Bearer ${auth?.data.token}`        
        }
    };

    try {
        const response = await axios.get(TOTAL_PRICES_SALES_URL, config);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el contador del precio total de ventas', error);
        throw error;
    }
};

export const topFiveDestinations = async () => {
    let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
    const config = {
        headers: {
            Authorization: `Bearer ${auth?.data.token}`        
        }
    };

    try {
        const response = await axios.get(TOP_FIVE_DESTINATIONS_URL, config);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el top 5 de destinos', error);
        throw error;
    }
}

export const salesOfTheWeek = async () => {
    let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
    const config = {
        headers: {
            Authorization: `Bearer ${auth?.data.token}`        
        }
    };

    try {
        const response = await axios.get(SALES_OF_THE_WEEK_URL, config);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las ventas de la semana', error);
        throw error;
    }
}

export const topFiveSellers = async () => {
    let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
    const config = {
        headers: {
            Authorization: `Bearer ${auth?.data.token}`        
        }
    };

    try {
        const response = await axios.get(TOP_FIVE_SELLERS_URL, config);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los mejores vendedores', error);
        throw error;
    }
}

export const latestSales = async () => {
    let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
    const config = {
        headers: {
            Authorization: `Bearer ${auth?.data.token}`        
        }
    };

    try {
        const response = await axios.get(LATEST_SALES_URL, config);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las últimas ventas', error);
        throw error;
    }
}