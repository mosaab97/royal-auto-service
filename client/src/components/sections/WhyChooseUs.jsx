import React from 'react';
import { Award, Shield, Clock, Phone } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import FeatureBox from '../common/FeatureBox';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: "Certified Technicians",
      description: "ASE-certified professionals"
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Warranty Protected",
      description: "All work guaranteed"
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: "Fast Service",
      description: "Same-day service available"
    },
    {
      icon: <Phone className="w-10 h-10 text-blue-600" />,
      title: "24/7 Support",
      description: "Always here to help"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Why Choose Royal Auto Service?" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureBox key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}