import { useState, useEffect } from 'react';
import axios from 'axios';
import refreshJWTToken from '../services/RefreshJWTToken';

const useProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = await refreshJWTToken(); // Retrieve the accessToken from local storage
        
        if (accessToken) {
          const response = await axios.get('http://localhost:8083/auth/get/user', {
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}` // Include the accessToken in the Authorization header
            },
          });
          setProfile(response.data); // Set the fetched profile data to state
        }
      } catch (error) {
        
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserProfile();
  }, []);
  return profile;
};

export default useProfile;