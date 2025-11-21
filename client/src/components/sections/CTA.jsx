import React from 'react';
import { Phone } from 'lucide-react';
import Button from '../common/Button';
import Tooltip from '../common/Tooltip';
import { CONTACT_INFO } from '../../utils/constants';

export default function CTA() {
  const handleContact = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Service Your Vehicle?</h2>
        <p className="text-xl text-blue-100 mb-8">Contact us today and experience the Royal Auto Service difference.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Tooltip text="Online booking coming soon! Contact us to schedule." position="bottom">
            <span>
              <Button variant="outline" className="text-lg py-4 cursor-not-allowed opacity-60" disabled>
                Book Appointment Now
              </Button>
            </span>
          </Tooltip>
          <Button variant="outline" className="text-lg py-4" onClick={handleContact}>
            <Phone className="w-5 h-5 mr-2" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}