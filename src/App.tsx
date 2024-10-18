import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import AdminDashboard from './pages/AdminDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import ReceptionistDashboard from './pages/ReceptionistDashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  const handleLogin = (role: string) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={isLoggedIn ? <Navigate to={`/${userRole}`} /> : <Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/admin"
              element={isLoggedIn && userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/" />}
            />
            <Route
              path="/doctor"
              element={isLoggedIn && userRole === 'doctor' ? <DoctorDashboard /> : <Navigate to="/" />}
            />
            <Route
              path="/receptionist"
              element={isLoggedIn && userRole === 'receptionist' ? <ReceptionistDashboard /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;