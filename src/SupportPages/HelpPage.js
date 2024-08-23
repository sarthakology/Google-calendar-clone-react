import React from 'react';

export default function HelpPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto mt-10 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Help Page</h1>
      <p className="mb-4">
        Welcome to the Help Page! Here you will find answers to frequently asked questions and useful resources to assist you.
      </p>
      <h2 className="text-xl font-semibold mb-2">FAQs</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">How do I reset my password?</li>
        <li className="mb-2">Where can I find my account settings?</li>
        <li className="mb-2">How do I contact support?</li>
      </ul>
      <p>
        If you need further assistance, please don't hesitate to <a href="mailto:support@example.com" className="text-blue-500 hover:underline">contact support</a>.
      </p>
    </div>
  );
}
