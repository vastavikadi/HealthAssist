import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TreatmentForm = ({ patient, onClose, onSave }) => {
  // Initialize form state
  const [formData, setFormData] = useState({
    diseaseName: '',
    medicine: '',
    precaution: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend API
      const response = await fetch('http://localhost:5000/api/treatment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientId: patient.id,
          ...formData,
        }),
      });

      // Check if the response is successful
      if (response.ok) {
        toast.success('Treatment saved successfully'); // Show success toast
        onSave(); // Callback to handle post-save actions
        onClose(); // Close the form or modal
      } else {
        // Handle errors returned from the server
        const errorData = await response.json();
        toast.error(errorData.error || 'Failed to save treatment'); // Show error toast
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      toast.error('Failed to save treatment'); // Show error toast
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="max-w-full w-full mx-auto p-4 md:p-4 mb-4 bg-blue-100 shadow-input rounded-none md:rounded-2xl flex flex-col items-center">
          <h1 className="font-bold text-2xl text-blue-800 text-center">
            <b>Health</b>Assist&#174;
          </h1>
          <h5 className="text-gray-800 mt-2 text-center whitespace-nowrap overflow-hidden text-ellipsis">
            &#8594; Fill Up the Treatment Form
          </h5>
        </div>
        <h2 className="text-xl font-semibold mb-4 text-center">Add Treatment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="diseaseName" className="block text-sm font-medium mb-1">
              Disease Name
            </label>
            <input
              type="text"
              id="diseaseName"
              name="diseaseName"
              value={formData.diseaseName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="medicine" className="block text-sm font-medium mb-1">
              Medicine
            </label>
            <input
              type="text"
              id="medicine"
              name="medicine"
              value={formData.medicine}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="precaution" className="block text-sm font-medium mb-1">
              Precaution
            </label>
            <textarea
              id="precaution"
              name="precaution"
              value={formData.precaution}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-white px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TreatmentForm;
