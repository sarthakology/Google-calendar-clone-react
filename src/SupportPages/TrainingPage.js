import React from 'react';

export default function TrainingPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto mt-10 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Training Page</h1>
      <p className="mb-4">
        Welcome to the Training Page! Here you can find resources and training materials to help you get the most out of our services. Whether you're looking for tutorials, guides, or best practices, we have you covered.
      </p>
      <p>
        Check out our latest training materials below:
      </p>
      <ul className="list-disc list-inside mt-4 space-y-2">
        <li>
          <button className="text-blue-500 hover:underline focus:outline-none">
            Introduction to Our Services
          </button>
        </li>
        <li>
          <button className="text-blue-500 hover:underline focus:outline-none">
            Advanced Techniques and Tips
          </button>
        </li>
        <li>
          <button className="text-blue-500 hover:underline focus:outline-none">
            Frequently Asked Questions
          </button>
        </li>
      </ul>
    </div>
  );
}
