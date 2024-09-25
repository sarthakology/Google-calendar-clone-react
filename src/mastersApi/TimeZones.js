import axios from 'axios';
import { useEffect, useState } from 'react';

const useTimezones = () => {
  const [timezoneOptions, setTimezoneOptions] = useState([]);

  useEffect(() => {
    const fetchTimezones = async () => {
      try {
        const response = await axios.get('http://localhost:8083/masters/timezones');
        setTimezoneOptions(response.data);
      } catch (error) {
        console.error('Error fetching timezones:', error);
      }
    };

    fetchTimezones();
  }, []);

  return timezoneOptions;
};

export default useTimezones;
