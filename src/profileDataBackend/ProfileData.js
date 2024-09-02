
import { useState, useEffect } from 'react';
import axios from 'axios';

const useProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage

        if (token) {
          const response = await axios.get('http://localhost:8083/user', {
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}` // Include the token in the Authorization header
            },
          });

          setProfile(response.data); // Set the fetched profile data to state
        } else {
          console.error('No token found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserProfile();
  }, []); // Empty dependency array to run only on component mount

  return profile;
};

export default useProfile;
