import axios from './axios'

const DELETE_DESTINATION_URL = '/api/v1/destinations/deleteDestination/'

export const deleteDestinations = async (id) => {

  let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
  const config = {
      headers: {
          Authorization: `Bearer ${auth?.data.token}`        
      }
  };

  try {
    const response = await axios.delete(
        DELETE_DESTINATION_URL + id, 
        config
    )
    if (response.status === 200) {
      return('Destino eliminado con éxito')
    }
  } catch (error) { 
    if (!error.response) {
      return('Error de conexión')
    } else if (error.response.status === 401) {
      return('El destino ya existe')
    } else if (error.response.status === 403) {
      return('No tienes permisos para ejecutar esta acción')
    } else if (error.response.status === 500) {
      return('Error en el servidor')
    } else {
      return('No se ha podido eliminar el destino ')
    }
  }

}