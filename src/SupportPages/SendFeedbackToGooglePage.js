import React from 'react';

export default function SendFeedbackToGooglePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto mt-10 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Send Feedback to Google</h1>
      <p className="mb-4">
        We value your feedback! If you have any suggestions or issues you would like to report, please use the form below to send your feedback directly to Google.
      </p>
      <form
        action="https://feedback.google.com"
        method="POST"
        className="flex flex-col space-y-4"
      >
        <label htmlFor="name" className="block text-sm font-semibold mb-1">
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="p-2 border border-gray-300 rounded"
          required
        />

        <label htmlFor="email" className="block text-sm font-semibold mb-1">
          Your Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="p-2 border border-gray-300 rounded"
          required
        />

        <label htmlFor="feedback" className="block text-sm font-semibold mb-1">
          Your Feedback:
        </label>
        <textarea
          id="feedback"
          name="feedback"
          rows="4"
          className="p-2 border border-gray-300 rounded"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
