import axios from 'axios';
import { useEffect, useState } from 'react';

const useLanguages = () => {
  const [languageOptions, setLanguageOptions] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get('http://localhost:8083/masters/languages');
        setLanguageOptions(response.data);
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

    fetchLanguages();
  }, []);

  return languageOptions;
};

export default useLanguages;
