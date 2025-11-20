import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Royal Auto Service</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving our community with excellence since 2000. Your trusted partner for all automotive needs.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Royal Auto Service was founded in 2000 with a simple mission: to provide honest, reliable, and professional automotive service to our community. What started as a small two-bay shop has grown into a full-service facility, but our core values remain the same.
              </p>
              <p className="text-gray-600 mb-4">
                We believe in treating every customer like family and every vehicle like our own. Our team of ASE-certified technicians brings decades of combined experience and a passion for excellence to every job.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be the trusted choice for thousands of satisfied customers who rely on us to keep their vehicles running safely and efficiently.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-2xl p-12 text-center text-white">
              <div className="text-6xl font-bold mb-4">20+</div>
              <p className="text-2xl mb-8">Years of Excellence</p>
              <div className="text-6xl font-bold mb-4">10,000+</div>
              <p className="text-2xl">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for perfection in every repair and service we provide.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">Honest pricing and transparent communication, always.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">We're proud to serve and give back to our local community.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">Only the best parts and service for your vehicle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our ASE-certified technicians undergo continuous training to stay current with the latest automotive technologies and repair techniques.
          </p>
          <div className="bg-blue-600 text-white p-12 rounded-lg">
            <p className="text-2xl font-bold mb-4">Ready to experience the Royal Auto Service difference?</p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition mt-4">
              Schedule Your Service
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}