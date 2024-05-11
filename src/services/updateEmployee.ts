import axios from './axios'

const UPDATE_EMPLOYEE_URL = '/api/v1/employees/updateEmployee/'

export const updateEmployee = async (id, data, setErrors, setValid) => {

  let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
  const config = {
      headers: {
          Authorization: `Bearer ${auth?.data.token}`        
      }
  };

  try {
    const response = await axios.post(
      UPDATE_EMPLOYEE_URL + id, 
      data,
      config
    )
    if (response.status === 200) {
      setValid('Usuario actualizado con exito')
    }
  } catch (error) { 
    if (!error.response) {
      setErrors('Error de conexión')
    } else if (error.response.status === 401) {
      setErrors('El usuario o correo ya existe')
    } else if (error.response.status === 403) {
      setErrors('No tienes permisos para ejecutar esta acción')
    } else if (error.response.status === 500) {
      setErrors('Error en el servidor')
    } else {
      setErrors('El registro ha fallado')
    }
  }

}