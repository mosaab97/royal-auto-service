import React from 'react';
import { Wrench, Shield, Award } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import ServiceCard from '../common/ServiceCard';
import FadeIn from '../common/FadeIn';

export default function Services() {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "General Repairs",
      description: "Expert diagnosis and repair for all vehicle systems"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Preventive Maintenance",
      description: "Regular maintenance to keep your vehicle running smoothly"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Parts",
      description: "OEM and aftermarket parts from trusted manufacturers"
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader 
            title="Our Services"
            subtitle="Comprehensive auto repair solutions for all makes and models"
          />
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}