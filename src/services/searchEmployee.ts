import axios from './axios'

const SEARCH_EMPLOYEE_URL = '/api/v1/employees/searchEmployee/'

export const searchEmployee = async (id, setErrors, setValid) => {

  let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
  const config = {
      headers: {
          Authorization: `Bearer ${auth?.data.token}`        
      }
  };

  try {
    const response = await axios.get(
      SEARCH_EMPLOYEE_URL + id, 
      config
    )
    if (response.status === 200) {
        setErrors(null);
        setValid('Usuario existente');
        return response.data;
    }
  } catch (error) { 
    setValid(null);
    if (!error.response) {
      setErrors('Error de conexión')
    } else if (error.response.status === 401) {
      setErrors('El usuario no existe')
    } else if (error.response.status === 403) {
      setErrors('No tienes permisos para ejecutar esta acción')
    } else if (error.response.status === 500) {
      setErrors('Error en el servidor')
    } else {
      setErrors('El usuario no existe')
    }
  }

}