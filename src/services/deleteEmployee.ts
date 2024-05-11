import axios from './axios'

const DELETE_URL = '/api/v1/employees/deleteEmployee/'

export const deleteEmployee = async (id) => {

  let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
  const config = {
      headers: {
          Authorization: `Bearer ${auth?.data.token}`        
      }
  };

  try {
    const response = await axios.delete(
        DELETE_URL + id, 
        config
    )
    if (response.status === 200) {
      return('Usuario eliminado con éxito')
    }
  } catch (error) { 
    if (!error.response) {
      return('Error de conexión')
    } else if (error.response.status === 401) {
      return('El usuario o correo ya existe')
    } else if (error.response.status === 403) {
      return('No tienes permisos para ejecutar esta acción')
    } else if (error.response.status === 500) {
      return('Error en el servidor')
    } else {
      return('No se ha podido eliminar el cliente ')
    }
  }

}