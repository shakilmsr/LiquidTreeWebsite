import React from 'react';
import { Droplet, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-green-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Droplet className="h-8 w-8 text-brand-green-medium" />
              <span className="ml-2 text-2xl font-bold">LiquidTree</span>
            </div>
            <p className="text-brand-green-light mb-6">
              Innovative water management solutions for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-green-light hover:text-white transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-green-light hover:text-white transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-green-light hover:text-white transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-green-light hover:text-white transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-brand-green-light hover:text-white transition duration-300">Home</a></li>
              <li><a href="/about" className="text-brand-green-light hover:text-white transition duration-300">About Us</a></li>
              <li><a href="/research" className="text-brand-green-light hover:text-white transition duration-300">Research</a></li>
              <li><a href="/products" className="text-brand-green-light hover:text-white transition duration-300">Products & Innovation</a></li>
              <li><a href="/contact" className="text-brand-green-light hover:text-white transition duration-300">Contact Us</a></li>
              <li><a href="/external" className="text-brand-green-light hover:text-white transition duration-300">External</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-brand-green-light hover:text-white transition duration-300">Water Recycling</a></li>
              <li><a href="#" className="text-brand-green-light hover:text-white transition duration-300">Filtration Systems</a></li>
              <li><a href="#" className="text-brand-green-light hover:text-white transition duration-300">Smart Monitoring</a></li>
              <li><a href="#" className="text-brand-green-light hover:text-white transition duration-300">Consulting Services</a></li>
              <li><a href="#" className="text-brand-green-light hover:text-white transition duration-300">Implementation</a></li>
              <li><a href="#" className="text-brand-green-light hover:text-white transition duration-300">Maintenance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-green-medium mr-3 mt-1" />
                <span className="text-brand-green-light">123 Water Street, Eco City, EC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-green-medium mr-3" />
                <span className="text-brand-green-light">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-green-medium mr-3" />
                <span className="text-brand-green-light">hello@liquidtree.online</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-gray/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-green-light text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LiquidTree. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-brand-green-light hover:text-white text-sm transition duration-300">Privacy Policy</a>
              <a href="#" className="text-brand-green-light hover:text-white text-sm transition duration-300">Terms of Service</a>
              <a href="#" className="text-brand-green-light hover:text-white text-sm transition duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;