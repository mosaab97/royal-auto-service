import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/constants';

export default function ContactBar() {
  return (
    <section className="bg-blue-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start">
            <Phone className="w-5 h-5 mr-3" />
            <span>{CONTACT_INFO.phone}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Clock className="w-5 h-5 mr-3" />
            <span>Mon-Fri: {CONTACT_INFO.hours.weekday} | Sat: {CONTACT_INFO.hours.saturday}</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <MapPin className="w-5 h-5 mr-3" />
            <span>{CONTACT_INFO.address.split(',')[0]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}