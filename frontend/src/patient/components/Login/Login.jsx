import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [identifier, setIdentifier] = useState(''); // Email or Phone number
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // New state for role
  const [isEmail, setIsEmail] = useState(true); // State to toggle between email and phone
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make sure to adapt the backend route to handle identifier
      const res = await axios.post('http://localhost:5000/api/auth/login', { 
        identifier, // Email or phone number
        password,
        role
      });
      toast.success('Login Successful');
      console.log(res.data); // This should log the token or user data
      
      // Redirect to the home page based on the selected role
      switch (role) {
        case 'patient':
          navigate('/patienthome');
          break;
        case 'doctor':
          navigate('/doctorhome');
          break;
        case 'receptionist':
          navigate('/receptionisthome');
          break;
        case 'cityadmin':
          navigate('/admin');
          break;
        case 'pharmacy':
          navigate('/pharmacy');
          break;
        default:
          navigate('/home'); // Fallback if no role is selected
          break;
      }
    } catch (err) {
      console.error('Login Error:', err.response?.data || err.message);
      toast.error(err.response?.data?.msg || 'An error occurred');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="max-w-full w-full mx-auto p-4 md:p-4 mb-4 bg-blue-100 shadow-input rounded-none md:rounded-2xl flex flex-col items-center">
          <h1 className="font-bold text-2xl text-blue-800 text-center">
            Login to <b>Health</b>Assist
          </h1>
          <h5 className="text-gray-800 mt-2 text-center whitespace-nowrap overflow-hidden text-ellipsis">
            Benefit from using HealthAssist to the fullest!
          </h5>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="identifier" className="block text-gray-700 font-medium mb-2">
              {isEmail ? 'Email' : 'Phone Number'}
            </label>
            <input
              type={isEmail ? 'email' : 'tel'}
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={isEmail ? 'Email Address' : 'Phone Number'}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="receptionist">Receptionist</option>
              <option value="cityadmin">City Admin</option>
              <option value="pharmacy">Pharmacy</option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => setIsEmail(!isEmail)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Use {isEmail ? 'Phone Number' : 'Email'}
            </button>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </div>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
