import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountriesAdmin = () => {
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState(''); // State to handle new country input
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the current countries from the server
    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:8083/masters/countries'); // Update with your actual API endpoint
        setCountries(response.data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load countries.');
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []);

  // Handle changes to existing countries
  const handleCountryChange = (index, updatedCountry) => {
    const updatedCountries = [...countries];
    updatedCountries[index].country = updatedCountry;
    setCountries(updatedCountries);
  };

  // Add a new country
  const handleAddCountry = async () => {
    if (newCountry.trim()) {
      try {
        const response = await axios.post('http://localhost:8083/masters/country/create', { country: newCountry });
        setCountries([...countries, response.data.country]);
        setNewCountry('');
      } catch (err) {
        alert('Failed to create country.');
      }
    } else {
      alert('Country cannot be empty!');
    }
  };

  // Delete a country
  const handleDeleteCountry = async (id) => {
    try {
      await axios.delete(`http://localhost:8083/masters/country/delete/${id}`);
      setCountries(countries.filter((country) => country.id !== id));
    } catch (err) {
      alert('Failed to delete country.');
    }
  };

  // Update a country by its ID
  const handleUpdateCountry = async (id, updatedCountry) => {
    try {
      await axios.put(`http://localhost:8083/masters/country/update/${id}`, { id, country: updatedCountry });
      alert('Country updated successfully!');
    } catch (err) {
      alert('Failed to update country.');
    }
  };

  // Save all changes
  const handleSubmit = async () => {
    try {
      for (const country of countries) {
        await handleUpdateCountry(country.id, country.country);
      }
      alert('Countries updated successfully!');
    } catch (err) {
      alert('Failed to update countries.');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Edit Countries</h1>

      <div className="flex flex-col space-y-4">
        {countries.map((country, index) => (
          <div key={country.id} className="flex items-center space-x-4">
            <span className="font-bold">{country.id}:</span>
            <input
              type="text"
              value={country.country}
              onChange={(e) => handleCountryChange(index, e.target.value)}
              className="border rounded p-2 w-full"
            />
            <button
              onClick={() => handleDeleteCountry(country.id)}
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
          value={newCountry}
          onChange={(e) => setNewCountry(e.target.value)}
          placeholder="New country"
          className="border rounded p-2 w-full mb-4"
        />
        <button
          onClick={handleAddCountry}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Country
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

export default CountriesAdmin;
