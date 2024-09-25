import axios from 'axios';
import { useEffect, useState } from 'react';

const useDateFormats = () => {
  const [dateFormatOptions, setDateFormatOptions] = useState([]);

  useEffect(() => {
    const fetchDateFormats = async () => {
      try {
        const response = await axios.get('http://localhost:8083/masters/date-formats');
        setDateFormatOptions(response.data);
      } catch (error) {
        console.error('Error fetching date formats:', error);
      }
    };

    fetchDateFormats();
  }, []);

  return dateFormatOptions;
};

export default useDateFormats;
