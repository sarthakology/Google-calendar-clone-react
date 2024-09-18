import axios from 'axios';
import { useEffect, useState } from 'react';

const useCountries = () => {
  const [countryOptions, setCountryOptions] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:8083/masters/countries');
        setCountryOptions(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  return countryOptions;
};

export default useCountries;
