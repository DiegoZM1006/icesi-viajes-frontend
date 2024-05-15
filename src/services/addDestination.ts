import axios from './axios'

const ADD_DESTINATION_URL = '/api/v1/destinations/saveDestination'

export const addDestination = async (data, setErrors, setValid) => {

  let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
  const config = {
      headers: {
          Authorization: `Bearer ${auth?.data.token}`        
      }
  };

  try {
    // const response = await axios.post(
    //   ADD_DESTINATION_URL, 
    //   data,
    //   config
    // )
    // if (response.status === 200) {
    //   setValid('Destino creado con exito')
    // }
  } catch (error) { 
    if (!error.response) {
      setErrors('Error de conexión')
    } else if (error.response.status === 401) {
      setErrors('El Destino ya existe')
    } else if (error.response.status === 403) {
      setErrors('No tienes permisos para ejecutar esta acción')
    } else if (error.response.status === 500) {
      setErrors('Error en el servidor')
    } else {
      setErrors('El registro ha fallado')
    }
  }

}