import React, { useState } from "react";
import useLanguages from '../mastersApi/Languages';
import useCountries from '../mastersApi/Countries';
import useDateFormats from '../mastersApi/DateFormats';
import useTimezones from '../mastersApi/TimeZones';
import { toast } from 'react-toastify';

const SettingsPage = () => {
  const languageOptions = useLanguages();
  const countryOptions = useCountries();
  const dateFormatOptions = useDateFormats();
  const timezoneOptions = useTimezones();

  const [language, setLanguage] = useState("English");
  const [country, setCountry] = useState("India");
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");
  const [timeFormat, setTimeFormat] = useState("1:00pm");
  const [primaryTimeZone, setPrimaryTimeZone] = useState("(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi");
  const [secondaryTimeZone, setSecondaryTimeZone] = useState("Not selected");
  const [startWeekOn, setStartWeekOn] = useState("Sunday");

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem('language', language);
    localStorage.setItem('country', country);
    localStorage.setItem('dateFormat', dateFormat);
    localStorage.setItem('timeFormat', timeFormat);
    // localStorage.setItem('primaryTimeZone', primaryTimeZone);
    // localStorage.setItem('secondaryTimeZone', secondaryTimeZone);
    // localStorage.setItem('startWeekOn', startWeekOn);
    toast.success("Settings have been saved successfully!");
  }; 
  

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Language and Region</h1>
      <form onSubmit={handleSubmit}>

        {/* Language Selection */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Select a language</option>
            {languageOptions.map((option) => (
              <option key={option.id} value={option.language}>
                {option.language}
              </option>
            ))}
          </select>
        </div>

        {/* Country Selection */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Country</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Select a country</option>
            {countryOptions.map((option) => (
              <option key={option.id} value={option.country}>
                {option.country}
              </option>
            ))}
          </select>
        </div>

        {/* Date Format */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Date Format</label>
          <select
            value={dateFormat}
            onChange={(e) => setDateFormat(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Select a date format</option>
            {dateFormatOptions.map((option) => (
              <option key={option.id} value={option.format}>
                {option.format}
              </option>
            ))}
          </select>
        </div>

        {/* Time Format */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Time Format</label>
          <select
            value={timeFormat}
            onChange={(e) => setTimeFormat(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option>1:00pm</option>
            <option>13:00</option>
          </select>
        </div>

        {/* Primary Time Zone */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-6">Time Zone</h1>
          <label className="block text-lg font-medium mb-2">Primary Time Zone</label>
          <select
            value={primaryTimeZone}
            onChange={(e) => setPrimaryTimeZone(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Select a timezone</option>
            {timezoneOptions.map((option) => (
              <option key={option.id} value={option.timezone}>
                {option.timezone}
              </option>
            ))}
          </select>
        </div>

        {/* Secondary Time Zone */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Secondary Time Zone</label>
          <select
            value={secondaryTimeZone}
            onChange={(e) => setSecondaryTimeZone(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Not selected</option>
            {timezoneOptions.map((option) => (
              <option key={option.id} value={option.timezone}>
                {option.timezone}
              </option>
            ))}
          </select>
        </div>

        {/* Start Week On */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Start Week On</label>
          <select
            value={startWeekOn}
            onChange={(e) => setStartWeekOn(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option>Sunday</option>
            <option>Monday</option>
            <option>Saturday</option>
          </select>
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
