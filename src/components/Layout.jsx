import React, { useState } from 'react';
import Background from './Background';
import { Navbar } from './Navbar'; // Changed to named import

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
      
      {/* Navbar - pass the required props */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;