import axios from 'axios';



const refreshJWTToken = async (props) => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
          const response = await axios.post('http://localhost:8083/auth/refreshToken', { refreshToken: refreshToken });
      
          const newAccessToken = response.data.accessToken;
          localStorage.setItem('accessToken', newAccessToken);
          return newAccessToken;
    }


  } catch (error) {

    console.error('Error refreshing JWT token:', error);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    console.log('User logged out');
    props.navigate('/');
    throw error;
  }
};

export default refreshJWTToken;
