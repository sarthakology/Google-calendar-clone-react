import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useTranslation} from "react-i18next";

const FormatsAdmin = () => {
  const {t} = useTranslation();  
  const [formats, setFormats] = useState([]);
  const [newFormat, setNewFormat] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFormats = async () => {
      try {
        const response = await axios.get('http://localhost:8083/masters/date-formats');
        setFormats(response.data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load formats.');
        setIsLoading(false);
      }
    };
    fetchFormats();
  }, []);

  const handleFormatChange = (index, updatedFormat) => {
    const updatedFormats = [...formats];
    updatedFormats[index].format = updatedFormat;
    setFormats(updatedFormats);
  };

  const handleAddFormat = async () => {
    if (newFormat.trim()) {
      try {
        const response = await axios.post('http://localhost:8083/masters/date-format/create', { format: newFormat });
        setFormats([...formats, response.data.format]);
        setNewFormat('');
      } catch (err) {
        console.log('Failed to create format.');
      }
    } else {
      console.log('Format cannot be empty!');
    }
  };

  const handleDeleteFormat = async (id) => {
    try {
      await axios.delete(`http://localhost:8083/masters/date-format/delete/${id}`);
      setFormats(formats.filter((format) => format.id !== id));
    } catch (err) {
      console.log('Failed to delete format.');
    }
  };

  const handleUpdateFormat = async (id, updatedFormat) => {
    try {
      await axios.put(`http://localhost:8083/masters/date-format/update/${id}`, { id, format: updatedFormat });
      console.log('Format updated successfully!');
    } catch (err) {
      console.log('Failed to update format.');
    }
  };

  const handleSubmit = async () => {
    try {
      for (const format of formats) {
        await handleUpdateFormat(format.id, format.format);
      }
      console.log('Formats updated successfully!');
    } catch (err) {
      console.log('Failed to update formats.');
    }
  };

  if (isLoading) return <div>{t("loading")}</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">{t("editFormats")}</h1>
      <div className="flex flex-col space-y-4">
        {formats.map((format, index) => (
          <div key={format.id} className="flex items-center space-x-4">
            <span className="font-bold">{format.id}:</span>
            <input
              type="text"
              value={format.format}
              onChange={(e) => handleFormatChange(index, e.target.value)}
              className="border rounded p-2 w-full"
            />
            <button
              onClick={() => handleDeleteFormat(format.id)}
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
          value={newFormat}
          onChange={(e) => setNewFormat(e.target.value)}
          placeholder={t("newformat")}
          className="border rounded p-2 w-full mb-4"
        />
        <button
          onClick={handleAddFormat}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {t("addFormat")}
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

export default FormatsAdmin;
