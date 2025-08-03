
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { LiaUserSolid } from 'react-icons/lia';
import { toast } from 'react-toastify';
const Navbar = () => {
  const { token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    navigate('/login');
toast.success("user logout successfully")
  };

  return (
    <nav className="bg-blue-600 text-white w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-2xl font-bold">LOGO</div>
        <div className="flex flex-col md:flex-row gap-4 text-lg items-start md:items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>

          {token ? (
            <>
              <button onClick={() => navigate('/profile')} className="flex items-center gap-1">
                <LiaUserSolid size={22} /> Profile
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-300 transition">
                Create an account
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

