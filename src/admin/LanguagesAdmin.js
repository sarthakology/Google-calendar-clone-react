import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useTranslation} from "react-i18next";

const LanguagesAdmin = () => {
  const {t} = useTranslation();  
  const [languages, setLanguages] = useState([]);
  const [newLanguage, setNewLanguage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get('http://localhost:8083/masters/languages');
        setLanguages(response.data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load languages.');
        setIsLoading(false);
      }
    };
    fetchLanguages();
  }, []);

  const handleLanguageChange = (index, updatedLanguage) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].language = updatedLanguage;
    setLanguages(updatedLanguages);
  };

  const handleAddLanguage = async () => {
    if (newLanguage.trim()) {
      try {
        const response = await axios.post('http://localhost:8083/masters/language/create', { language: newLanguage });
        setLanguages([...languages, response.data.language]);
        setNewLanguage('');
      } catch (err) {
        console.log('Failed to create language.');
      }
    } else {
      console.log('Language cannot be empty!');
    }
  };

  const handleDeleteLanguage = async (id) => {
    try {
      await axios.delete(`http://localhost:8083/masters/language/delete/${id}`);
      setLanguages(languages.filter((language) => language.id !== id));
    } catch (err) {
      console.log('Failed to delete language.');
    }
  };

  const handleUpdateLanguage = async (id, updatedLanguage) => {
    try {
      await axios.put(`http://localhost:8083/masters/language/update/${id}`, { id, language: updatedLanguage });
      console.log('Language updated successfully!');
    } catch (err) {
      console.log('Failed to update language.');
    }
  };

  const handleSubmit = async () => {
    try {
      for (const language of languages) {
        await handleUpdateLanguage(language.id, language.language);
      }
      console.log('Languages updated successfully!');
    } catch (err) {
      console.log('Failed to update languages.');
    }
  };

  if (isLoading) return <div>{t("loading")}</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">{t("editLanguages")}</h1>
      <div className="flex flex-col space-y-4">
        {languages.map((language, index) => (
          <div key={language.id} className="flex items-center space-x-4">
            <span className="font-bold">{language.id}:</span>
            <input
              type="text"
              value={language.language}
              onChange={(e) => handleLanguageChange(index, e.target.value)}
              className="border rounded p-2 w-full"
            />
            <button
              onClick={() => handleDeleteLanguage(language.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              {t("delete")}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <input
          type="text"
          value={newLanguage}
          onChange={(e) => setNewLanguage(e.target.value)}
          placeholder={t("newlanguage")}
          className="border rounded p-2 w-full mb-4"
        />
        <button
          onClick={handleAddLanguage}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {t("addLanguage")}
        </button>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {t("saveChanges")}
      </button>
    </div>
  );
};

export default LanguagesAdmin;
