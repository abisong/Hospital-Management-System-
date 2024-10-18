import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building, LogOut } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 mb-2 sm:mb-0">
          <Building size={24} />
          <span className="text-xl font-bold">Hospital Management System</span>
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            {isLoggedIn ? (
              <li>
                <button onClick={handleLogout} className="flex items-center space-x-1 hover:underline">
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </li>
            ) : (
              <li><Link to="/register" className="hover:underline">Register</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;