import React from 'react';
import { Award, Users, Target, Heart, Phone } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import FeatureBox from '../components/common/FeatureBox';
import Button from '../components/common/Button';
import Tooltip from '../components/common/Tooltip';

export default function About() {
  const handleContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="pt-24 pb-16">
      <PageHeader title={"About Royal Auto Service"} description={"Serving our community with excellence since 2015. Your trusted partner for all automotive needs."} />      
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-gray-600 mb-4">
                Royal Auto Service was founded in 2015 with a simple mission: to provide honest, reliable, and professional automotive service to our community. What started as a small two-bay shop has grown into a full-service facility, but our core values remain the same.
              </p>
              <p className="text-gray-600 mb-4">
                We believe in treating every customer like family and every vehicle like our own. Our team of ASE-certified technicians brings decades of combined experience and a passion for excellence to every job.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be the trusted choice for thousands of satisfied customers who rely on us to keep their vehicles running safely and efficiently.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-2xl p-12 text-center text-white">
              <div className="text-6xl font-bold mb-4">10+</div>
              <p className="text-2xl mb-8">Years of Excellence</p>
              <div className="text-6xl font-bold mb-4">10,000+</div>
              <p className="text-2xl">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureBox 
              icon={<Award className="w-10 h-10 text-blue-600" />}
              title="Excellence"
              description="We strive for perfection in every repair and service we provide."
            />
            <FeatureBox 
              icon={<Heart className="w-10 h-10 text-blue-600" />}
              title="Integrity"
              description="Honest pricing and transparent communication, always."
            />
            <FeatureBox 
              icon={<Users className="w-10 h-10 text-blue-600" />}
              title="Community"
              description="We're proud to serve and give back to our local community."
            />
            <FeatureBox 
              icon={<Target className="w-10 h-10 text-blue-600" />}
              title="Quality"
              description="Only the best parts and service for your vehicle."
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our ASE-certified technicians undergo continuous training to stay current with the latest automotive technologies and repair techniques.
          </p>
          <div className="bg-blue-600 text-white p-12 rounded-lg">
            <p className="text-2xl font-bold mb-4">Ready to experience the Royal Auto Service difference?</p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Tooltip text="Online booking coming soon! Contact us to schedule." position="top">
                <span>
                  <Button variant="outline" className="text-lg py-4 cursor-not-allowed opacity-60" disabled>
                    Schedule Your Service
                  </Button>
                </span>
              </Tooltip>
              <Button variant="outline" className="text-lg py-4" onClick={handleContact}>
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
