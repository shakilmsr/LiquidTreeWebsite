import React, { useState } from 'react';
import { Droplet, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Droplet className="h-8 w-8 text-brand-green-medium" />
            <span className="ml-2 text-2xl font-bold text-brand-green-dark">LiquidTree</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-brand-gray hover:text-brand-green-medium font-medium transition duration-300">Home</a>
            <a href="/about" className="text-brand-gray hover:text-brand-green-medium font-medium transition duration-300">About Us</a>
            <a href="/research" className="text-brand-gray hover:text-brand-green-medium font-medium transition duration-300">Research</a>
            <a href="/products" className="text-brand-gray hover:text-brand-green-medium font-medium transition duration-300">Products & Innovation</a>
            <a href="/contact" className="text-brand-gray hover:text-brand-green-medium font-medium transition duration-300">Contact Us</a>
            <a href="/external" className="text-brand-gray hover:text-brand-green-medium font-medium transition duration-300">External</a>
            <button className="bg-brand-green-dark text-white px-5 py-2 rounded-lg font-medium hover:bg-opacity-90 transition duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-brand-gray hover:text-brand-green-medium focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-brand-gray hover:text-brand-green-medium font-medium transition duration-300">Home</a>
              <a href="/about" className="text-brand-gray hover:text-brand-green-medium font-medium transition duration-300">About Us</a>
              <a href="/research" className="text-brand-gray hover:text-brand-green-medium font-medium transition duration-300">Research</a>
              <a href="/products" className="text-brand-gray hover:text-brand-green-medium font-medium transition duration-300">Products & Innovation</a>
              <a href="/contact" className="text-brand-gray hover:text-brand-green-medium font-medium transition duration-300">Contact Us</a>
              <a href="/external" className="text-brand-gray hover:text-brand-green-medium font-medium transition duration-300">External</a>
              <button className="bg-brand-green-dark text-white px-5 py-2 rounded-lg font-medium hover:bg-opacity-90 transition duration-300 w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;