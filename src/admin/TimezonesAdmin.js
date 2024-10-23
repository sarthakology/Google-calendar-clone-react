import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useTranslation} from "react-i18next";
import API_URLS from '../ApiUrls';

const TimezonesAdmin = () => {
  const {t} = useTranslation();  
  const [timezones, setTimezones] = useState([]);
  const [newTimezone, setNewTimezone] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimezones = async () => {
      try {
        const response = await axios.get(API_URLS.GET_MASTER_TIMEZONE);
        setTimezones(response.data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load timezones.');
        setIsLoading(false);
      }
    };
    fetchTimezones();
  }, []);

  const handleTimezoneChange = (index, updatedTimezone) => {
    const updatedTimezones = [...timezones];
    updatedTimezones[index].timezone = updatedTimezone;
    setTimezones(updatedTimezones);
  };

  const handleAddTimezone = async () => {
    if (newTimezone.trim()) {
      try {
        const response = await axios.post(API_URLS.CREATE_MASTER_TIMEZONE, { timezone: newTimezone });
        setTimezones([...timezones, response.data.timezone]);
        setNewTimezone('');
      } catch (err) {
        console.log('Failed to create timezone.');
      }
    } else {
      console.log('Timezone cannot be empty!');
    }
  };

  const handleDeleteTimezone = async (id) => {
    try {
      await axios.delete(API_URLS.DELETE_MASTER_TIMEZONE(id));
      setTimezones(timezones.filter((timezone) => timezone.id !== id));
    } catch (err) {
      console.log('Failed to delete timezone.');
    }
  };

  const handleUpdateTimezone = async (id, updatedTimezone) => {
    try {
      await axios.put(API_URLS.UPDATE_MASTER_TIMEZONE(id), { id, timezone: updatedTimezone });
      console.log('Timezone updated successfully!');
    } catch (err) {
      console.log('Failed to update timezone.');
    }
  };

  const handleSubmit = async () => {
    try {
      for (const timezone of timezones) {
        await handleUpdateTimezone(timezone.id, timezone.timezone);
      }
      console.log('Timezones updated successfully!');
    } catch (err) {
      console.log('Failed to update timezones.');
    }
  };

  if (isLoading) return <div>{t("loading")}</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">{t("editTimezones")}</h1>
      <div className="flex flex-col space-y-4">
        {timezones.map((timezone, index) => (
          <div key={timezone.id} className="flex items-center space-x-4">
            <span className="font-bold">{timezone.id}:</span>
            <input
              type="text"
              value={timezone.timezone}
              onChange={(e) => handleTimezoneChange(index, e.target.value)}
              className="border rounded p-2"
            />
            <button
              onClick={() => handleDeleteTimezone(timezone.id)}
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
          value={newTimezone}
          onChange={(e) => setNewTimezone(e.target.value)}
          placeholder={t("newtimezone")}
          className="border rounded p-2 mb-4"
        />
        <button
          onClick={handleAddTimezone}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {t("addTimezone")}
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

export default TimezonesAdmin;
