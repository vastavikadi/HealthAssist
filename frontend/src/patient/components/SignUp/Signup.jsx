import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// State and City data with state codes
const stateCityData = {
  CA: { name: 'California', cities: ['Los Angeles', 'San Francisco', 'San Diego'] },
  TX: { name: 'Texas', cities: ['Houston', 'Austin', 'Dallas'] },
  NY: { name: 'New York', cities: ['New York City', 'Buffalo', 'Rochester'] },
  FL: { name: 'Florida', cities: ['Miami', 'Orlando', 'Tampa'] },
};

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    aadhaarNo: '',
    password: '',
    confirmPassword: '',
    state: '',
    city: ''
  });

  const [errors, setErrors] = useState({});
  const { name, email, address, phone, aadhaarNo, password, confirmPassword, state, city } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    const errors = {};
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      toast.success('Sign Up Successful!');
      console.log(res.data); // This would include the JWT token
      setFormData({
        name: '',
        email: '',
        address: '',
        phone: '',
        aadhaarNo: '',
        password: '',
        confirmPassword: '',
        state: '',
        city: ''
      });
    } catch (err) {
      console.error(err.response.data);
      toast.error(err.response.data.msg || 'An error occurred');
    }
  };

  return (
      <><div className="max-w-full w-full mx-auto p-4 md:p-8 bg-blue-100 shadow-input rounded-none md:rounded-2xl flex flex-col items-center">
      <h1 className="font-bold text-2xl text-blue-800 text-center">
        Welcome to <b>Health</b>Assist
      </h1>
      <h5 className="text-gray-800 mt-2 text-center whitespace-nowrap overflow-hidden text-ellipsis">
        Benefit from using HealthAssist to the fullest!
      </h5>
    </div><div className="flex items-center justify-center min-h-screen bg-blue-100">
        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-14 text-center">Sign Up</h1>
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* Name Field */}
            <div className="md:col-span-1">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name <span title="Mandatory to fill this field" className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={onChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>

            {/* Email Field */}
            <div className="md:col-span-1">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email <span title="Mandatory to fill this field" className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>

            {/* Address Field */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
                Address <span title="Mandatory to fill this field" className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={onChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>

            {/* Phone Field */}
            <div className="md:col-span-1">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                Phone <span title="Mandatory to fill this field" className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={onChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>

            {/* Aadhaar No. Field */}
            <div className="md:col-span-1">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="aadhaarNo">
                Aadhaar No. <span title="Mandatory to fill this field" className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="aadhaarNo"
                name="aadhaarNo"
                value={aadhaarNo}
                onChange={onChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>

            {/* State Dropdown */}
            <div className="md:col-span-1">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="state">
                State <span title="Mandatory to fill this field" className="text-red-500">*</span>
              </label>
              <select
                id="state"
                name="state"
                value={state}
                onChange={(e) => {
                  setFormData({ ...formData, state: e.target.value, city: '' });
                } }
                required
                className={`w-full border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
              >
                <option value="">Select a state</option>
                {Object.entries(stateCityData).map(([code, stateData]) => (
                  <option key={code} value={code}>
                    {`${stateData.name} (${code})`}
                  </option>
                ))}
              </select>
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">{errors.state}</p>
              )}
            </div>

            {/* City Dropdown */}
            <div className="md:col-span-1">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="city">
                City <span title="Mandatory to fill this field" className="text-red-500">*</span>
              </label>
              <select
                id="city"
                name="city"
                value={city}
                onChange={onChange}
                required
                disabled={!state} // Disable city dropdown if no state is selected
                className={`w-full border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`}
              >
                <option value="">Select a city</option>
                {state && stateCityData[state].cities.map((cityName) => (
                  <option key={cityName} value={cityName}>{cityName}</option>
                ))}
              </select>
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Password <span title="Mandatory to fill this field" className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>

            {/* Confirm Password Field */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
                Confirm Password <span title="Mandatory to fill this field" className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChange}
                required
                className={`w-full border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2`} />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div></>
  );
};

export default Signup;
