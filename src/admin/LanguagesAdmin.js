import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LanguagesAdmin = () => {
  const [languages, setLanguages] = useState([]);
  const [newLanguage, setNewLanguage] = useState(''); // State to handle new language input
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the current languages from the server
    const fetchLanguages = async () => {
      try {
        const response = await axios.get('http://localhost:8083/masters/languages'); // Update with your actual API endpoint
        setLanguages(response.data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load languages.');
        setIsLoading(false);
      }
    };
    fetchLanguages();
  }, []);

  // Handle changes to existing languages
  const handleLanguageChange = (index, updatedLanguage) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].language = updatedLanguage;
    setLanguages(updatedLanguages);
  };

  // Add a new language
  const handleAddLanguage = async () => {
    if (newLanguage.trim()) {
      try {
        const response = await axios.post('http://localhost:8083/masters/language/create', { language: newLanguage });
        setLanguages([...languages, response.data.language]);
        setNewLanguage('');
      } catch (err) {
        alert('Failed to create language.');
      }
    } else {
      alert('Language cannot be empty!');
    }
  };

  // Delete a language
  const handleDeleteLanguage = async (id) => {
    try {
      await axios.delete(`http://localhost:8083/masters/language/delete/${id}`);
      setLanguages(languages.filter((language) => language.id !== id));
    } catch (err) {
      alert('Failed to delete language.');
    }
  };

  // Update a language by its ID
  const handleUpdateLanguage = async (id, updatedLanguage) => {
    try {
      await axios.put(`http://localhost:8083/masters/language/update/${id}`, { id, language: updatedLanguage });
      alert('Language updated successfully!');
    } catch (err) {
      alert('Failed to update language.');
    }
  };

  // Save all changes
  const handleSubmit = async () => {
    try {
      for (const language of languages) {
        await handleUpdateLanguage(language.id, language.language);
      }
      alert('Languages updated successfully!');
    } catch (err) {
      alert('Failed to update languages.');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Edit Languages</h1>

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
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <input
          type="text"
          value={newLanguage}
          onChange={(e) => setNewLanguage(e.target.value)}
          placeholder="New language"
          className="border rounded p-2 w-full mb-4"
        />
        <button
          onClick={handleAddLanguage}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Language
        </button>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
};

export default LanguagesAdmin;
