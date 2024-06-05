import axios from './axios'

const ADD_COMMENT_URL = '/api/v1/users_comments/saveComment'

export const addComment = async (data, setErrors, setValid) => {

  let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
  const config = {
      headers: {
          Authorization: `Bearer ${auth?.data.token}`        
      }
  };

  try {
    const response = await axios.post(
      ADD_COMMENT_URL, 
      data,
      config
    )
    if (response.status === 200) {
      return response.data
    }
  } catch (error) { 
      return error.response.data
  }

}