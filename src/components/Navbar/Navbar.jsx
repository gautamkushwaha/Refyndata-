import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // State to manage the toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white text-[#0079A0] font-bold shadow sticky top-0 z-10">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <Link to="/" onClick={closeMenu}>
          <img src="refyndata.png" alt="logo" className="h-10" />
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:bg-gray-200 px-3 py-2 rounded-md">Home</Link>
          <Link to="/about" className="hover:bg-gray-200 px-3 py-2 rounded-md">About us</Link>
          <Link to="/services" className="hover:bg-gray-200 px-3 py-2 rounded-md">Services</Link>
          <Link to="/careers" className="hover:bg-gray-200 px-3 py-2 rounded-md">Careers</Link>
          <Link to="/clients" className="hover:bg-gray-200 px-3 py-2 rounded-md">Clients</Link>
          <Link to="/contact" className="hover:bg-gray-200 px-3 py-2 rounded-md">Contact us</Link>
        </div>
        {/* Hamburger icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link to="/" onClick={closeMenu} className="hover:bg-gray-200 px-3 py-2 rounded-md">Home</Link>
        <Link to="/about" onClick={closeMenu} className="hover:bg-gray-200 block px-3 py-2 rounded-md">About us</Link>
        <Link to="/services" onClick={closeMenu} className="hover:bg-gray-200 block px-3 py-2 rounded-md">Services</Link>
        <Link to="/careers" onClick={closeMenu} className="hover:bg-gray-200 block px-3 py-2 rounded-md">Careers</Link>
        <Link to="/clients" onClick={closeMenu} className="hover:bg-gray-200 block px-3 py-2 rounded-md">Clients</Link>
        <Link to="/contact" onClick={closeMenu} className="hover:bg-gray-200 block px-3 py-2 rounded-md">Contact us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
