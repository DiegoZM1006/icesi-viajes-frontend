import axios from './axios'

const UPDATE_DESTINATION_URL = '/api/v1/destinations/updateDestination/'

export const updateDestination = async (id, data, setErrors, setValid) => {

  let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
  const config = {
      headers: {
          Authorization: `Bearer ${auth?.data.token}`        
      }
  };

  try {
    const response = await axios.post(
      UPDATE_DESTINATION_URL + id, 
      data,
      config
    )
    if (response.status === 200) {
      setValid('Destino actualizado con exito')
    }
  } catch (error) { 
    if (!error.response) {
      setErrors('Error de conexión')
    } else if (error.response.status === 401) {
      setErrors('El Destino o correo ya existe')
    } else if (error.response.status === 403) {
      setErrors('No tienes permisos para ejecutar esta acción')
    } else if (error.response.status === 500) {
      setErrors('Error en el servidor')
    } else {
      setErrors('El registro ha fallado')
    }
  }

}