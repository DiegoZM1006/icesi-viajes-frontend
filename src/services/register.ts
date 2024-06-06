import axios from '../services/axios'

const REGISTER_URL = '/auth/register'

export const register = async (data, setErrors, setValid) => {

    try {
        const response = await axios.post(
          REGISTER_URL, 
          data,
          { 
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
        )
        if (response.status === 200) {
          setValid('Usuario creado con exito')
          return true
        }
      } catch (error) { 
        if (!error.response) {
          setErrors('Error de conexión')
        } else if (error.response.status === 403) {
          setErrors('El usuario o correo ya existe')
        } else if (error.response.status === 500) {
          setErrors('Error en el servidor')
        } else {
          setErrors('El registro ha fallado')
        }
      }

}