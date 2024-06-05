import axios from './axios'

const GET_COMMENTS_URL = '/api/v1/users_comments/getCommentsByDestination/'
const GET_RATING_URL = '/api/v1/users_comments/countRatingByDestination/'

export const getComments = async (id, setErrors, setValid) => {

  let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
  const config = {
      headers: {
          Authorization: `Bearer ${auth?.data.token}`        
      }
  };

  try {
    const response = await axios.get(
      GET_COMMENTS_URL + id, 
      config
    )
    if (response.status === 200) {
        // setValid('Comentarios obtenidos correctamente');
        return response.data;
    }
  } catch (error) { 
        return [];
  }

}

export const getRatingDestination = async (id, setErrors, setValid) => {
  
    let auth = JSON.parse(localStorage.getItem('user') || 'null');
      
    const config = {
        headers: {
            Authorization: `Bearer ${auth?.data.token}`        
        }
    };
  
    try {
      const response = await axios.get(
        GET_RATING_URL + id, 
        config
      )
      if (response.status === 200) {
          return response.data;
      }
    } catch (error) { 
          return 0.0;
    }
}