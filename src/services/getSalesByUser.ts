import axios from './axios'

const GET_SALES_CUSTOMER_URL = '/api/v1/reservation_destination/getReservationDestinationsByClient/'
const GET_SALES_SELLER_URL = '/api/v1/reservation_destination/getReservationDestinationsBySeller/'

export const getSalesByUser = async (id) => {

  let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
  const config = {
      headers: {
          Authorization: `Bearer ${auth?.data.token}`        
      }
  };

  try {
    const response = await axios.get(
      GET_SALES_CUSTOMER_URL + id, 
      config
    )
    if (response.status === 200) {
        return response.data;
    }
  } catch (error) { 
        return [];
  }

}

export const getSalesBySeller = async (id) => {

    let auth = JSON.parse(localStorage.getItem('user') || 'null');
      
    const config = {
        headers: {
            Authorization: `Bearer ${auth?.data.token}`        
        }
    };
  
    try {
      const response = await axios.get(
        GET_SALES_SELLER_URL + id, 
        config
      )
      if (response.status === 200) {
          return response.data;
      }
    } catch (error) { 
          return [];
    }
  
  }