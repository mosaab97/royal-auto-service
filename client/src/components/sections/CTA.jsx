import React from 'react';
import Button from '../common/Button';

export default function CTA() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Service Your Vehicle?</h2>
        <p className="text-xl text-blue-100 mb-8">Schedule your appointment today and experience the Royal Auto Service difference.</p>
        <Button variant="outline" className="text-lg py-4">
          Book Appointment Now
        </Button>
      </div>
    </section>
  );
}