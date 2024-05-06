import axios from '../services/axios'

const LOGIN_URL = '/auth/login'

export const login = async(username, password) => {

    try {
        const response = await axios.post(
          LOGIN_URL, 
          { username, password },
          { 
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
        )
  
        if (response.status === 200) {
            window.localStorage.setItem("user", JSON.stringify(response));
            window.location.href = '/dashboard';
        }
        
      } catch (error) { 
        if (!error.response) {
          return 'Error de conexión'
        } else if (error.response.status === 403) {
          return 'Usuario o contraseña incorrectos'
        } else if (error.response.status === 500) {
          return 'Error en el servidor'
        } else {
          return 'El inicio de sesión ha fallado'
        }   
      }
}
