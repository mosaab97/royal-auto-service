import React from 'react';
import { Wrench, Settings, Droplet, Battery, Wind, Gauge, Shield, Hammer } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ServiceCard from '../components/common/ServiceCard';
import Button from '../components/common/Button';

export default function Services() {
  const services = [
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Engine Repair & Diagnostics",
      description: "Complete engine diagnostic and repair services using state-of-the-art equipment.",
      features: ["Computer diagnostics", "Check engine light", "Performance tuning", "Engine rebuilds"]
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Transmission Services",
      description: "Expert transmission repair and maintenance for automatic and manual transmissions.",
      features: ["Transmission flush", "Clutch replacement", "Transmission rebuild", "Fluid service"]
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: "Oil Changes & Fluid Services",
      description: "Regular maintenance to keep your vehicle running at peak performance.",
      features: ["Synthetic oil changes", "Coolant flush", "Power steering service", "Differential service"]
    },
    {
      icon: <Battery className="w-12 h-12" />,
      title: "Electrical System",
      description: "Complete electrical diagnostics and repairs for all vehicle systems.",
      features: ["Battery testing", "Alternator repair", "Starter replacement", "Wiring repairs"]
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Air Conditioning & Heating",
      description: "Keep comfortable year-round with our HVAC services.",
      features: ["A/C recharge", "Heater core repair", "Compressor replacement", "Climate control diagnostics"]
    },
    {
      icon: <Gauge className="w-12 h-12" />,
      title: "Brake Services",
      description: "Professional brake inspection and repair to keep you safe on the road.",
      features: ["Brake pad replacement", "Rotor resurfacing", "Brake fluid flush", "ABS diagnostics"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Preventive Maintenance",
      description: "Regular maintenance packages to prevent costly repairs down the road.",
      features: ["30/60/90K services", "Tune-ups", "Belt replacement", "Filter replacements"]
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: "Suspension & Steering",
      description: "Smooth ride and precise handling with our suspension services.",
      features: ["Shock/strut replacement", "Wheel alignment", "Tie rod replacement", "Ball joint service"]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <PageHeader 
        title="Our Services"
        subtitle="Comprehensive automotive services for all makes and models. Our certified technicians use the latest equipment to keep your vehicle running smoothly."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need a Service?</h2>
          <p className="text-xl text-blue-100 mb-8">Contact us today to schedule your appointment.</p>
          <Button variant="outline" className="text-lg py-4">
            Schedule Now
          </Button>
        </div>
      </section>
    </div>
  );
}