import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TimezonesAdmin = () => {
  const [timezones, setTimezones] = useState([]);
  const [newTimezone, setNewTimezone] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimezones = async () => {
      try {
        const response = await axios.get('http://localhost:8083/masters/timezones');
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
        const response = await axios.post('http://localhost:8083/masters/timezone/create', { timezone: newTimezone });
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
      await axios.delete(`http://localhost:8083/masters/timezone/delete/${id}`);
      setTimezones(timezones.filter((timezone) => timezone.id !== id));
    } catch (err) {
      console.log('Failed to delete timezone.');
    }
  };

  const handleUpdateTimezone = async (id, updatedTimezone) => {
    try {
      await axios.put(`http://localhost:8083/masters/timezone/update/${id}`, { id, timezone: updatedTimezone });
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Edit Timezones</h1>
      <div className="flex flex-col space-y-4">
        {timezones.map((timezone, index) => (
          <div key={timezone.id} className="flex items-center space-x-4">
            <span className="font-bold">{timezone.id}:</span>
            <input
              type="text"
              value={timezone.timezone}
              onChange={(e) => handleTimezoneChange(index, e.target.value)}
              className="border rounded p-2 w-full"
            />
            <button
              onClick={() => handleDeleteTimezone(timezone.id)}
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
          value={newTimezone}
          onChange={(e) => setNewTimezone(e.target.value)}
          placeholder="New timezone"
          className="border rounded p-2 w-full mb-4"
        />
        <button
          onClick={handleAddTimezone}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Timezone
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

export default TimezonesAdmin;
