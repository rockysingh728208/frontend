// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const Navbar = () => {
// //   return (
// //     <nav className="bg-blue-600 text-white w-full h-16 flex items-center justify-between px-10 shadow-md">
// //       <div className="text-xl font-semibold">MyApp</div>

// //       <div className="flex gap-6 text-lg">
// //         <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
// //         <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
// //      <Link to="/login">
// //   <button className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-300 transition">
// //     Create an account
// //   </button>
// // </Link>

// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { LiaUserSolid } from 'react-icons/lia';
// import { useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, [location]);

//   return (
//     <nav className="bg-blue-600 text-white w-full h-16 flex items-center justify-between px-10 shadow-md">
//       <div className="text-xl font-semibold">MyApp</div>

//       <div className="flex gap-6 text-lg items-center">
//         <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
//         <Link to="/about" className="hover:text-yellow-300 transition">About</Link>

//         {isLoggedIn ? (
//           <Link to="/profile">
//             <LiaUserSolid size={24} className="hover:text-yellow-300 cursor-pointer" />
//           </Link>
//         ) : (
//           <Link to="/login">
//             <button className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-300 transition">
//               Create an account
//             </button>
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { LiaUserSolid } from 'react-icons/lia';

const Navbar = () => {
  const { token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white w-full h-16 flex items-center justify-between px-10 shadow-md">
      <div className="text-xl font-semibold">MyApp</div>
      <div className="flex gap-6 text-lg items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {token ? (
          <>
            <LiaUserSolid className="cursor-pointer" size={24} onClick={() => navigate('/profile')} />
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
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
    </nav>
  );
};

export default Navbar;
