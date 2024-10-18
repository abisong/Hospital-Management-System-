import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Building, Info } from 'lucide-react';

interface LoginProps {
  onLogin: (role: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement actual authentication logic here
    if (username === 'admin' && password === 'admin') {
      onLogin('admin');
      navigate('/admin');
    } else if (username === 'doctor' && password === 'doctor') {
      onLogin('doctor');
      navigate('/doctor');
    } else if (username === 'receptionist' && password === 'receptionist') {
      onLogin('receptionist');
      navigate('/receptionist');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <div className="bg-white p-6 md:p-8 rounded shadow-md flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <div className="flex items-center justify-center mb-6">
            <Building size={48} className="text-blue-600 mr-4" />
            <h1 className="text-3xl font-bold text-center">Hospital Management System</h1>
          </div>
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Login
            </button>
          </form>
          <p className="text-center">
            Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register here</Link>
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 border-t md:border-t-0 md:border-l pt-8 md:pt-0">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Info size={24} className="mr-2 text-blue-600" />
            About the Hospital Management System
          </h2>
          <p className="mb-4">
            This application helps manage hospital activities, including patient management, doctor management, and appointment scheduling.
          </p>
          <h3 className="font-semibold mb-2">How to use:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Admin: Manage doctors, receptionists, and view appointments</li>
            <li>Doctor: View appointments and patient lists</li>
            <li>Receptionist: Manage appointments and patient information</li>
          </ul>
          <p>
            To get started, log in with your credentials or register a new account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;