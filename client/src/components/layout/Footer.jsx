import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Royal Auto Service</h3>
            <p className="text-gray-400">Your trusted partner for all automotive needs since 2015.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> {CONTACT_INFO.phone}</li>
              <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> {CONTACT_INFO.email}</li>
              <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {CONTACT_INFO.address}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Royal Auto Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}