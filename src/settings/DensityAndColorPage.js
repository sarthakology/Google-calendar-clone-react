import React, { useState } from 'react';

export default function DensityAndColorPage() {
  const [colorSet, setColorSet] = useState('Modern (with white text)');
  const [eventColor, setEventColor] = useState('Calendar default');

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Language and Region</h1>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Color Set</label>
        <select
          value={colorSet}
          onChange={(e) => setColorSet(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option>Modern (with white text)</option>
          <option>Classic (with black text)</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Event Color and Density</label>
        <select
          value={eventColor}
          onChange={(e) => setEventColor(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option>Responsive to your screen</option>
          <option>Compact</option>
        </select>
      </div>
    </div>
  );
}
