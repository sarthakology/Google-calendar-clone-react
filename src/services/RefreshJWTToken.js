import axios from 'axios';

const refreshJWTToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
          const response = await axios.post('http://localhost:8083/token', { refreshToken: refreshToken });
      
          const newAccessToken = response.data.accessToken;
          localStorage.setItem('accessToken', newAccessToken);
          return newAccessToken;
    }


  } catch (error) {
    console.error('Error refreshing JWT token:', error);
    throw error;
  }
};

export default refreshJWTToken;
