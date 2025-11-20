import { Wrench, ChevronRight } from 'lucide-react';
import Button from '../common/Button';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Auto Repair Partner
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional automotive service with over 20 years of experience. Quality repairs, honest pricing, and exceptional customer service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">
                Schedule Service <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="secondary">
                Call Now
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center text-white">
                <Wrench className="w-32 h-32 mx-auto mb-4 opacity-80" />
                <p className="text-2xl font-bold">Premium Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}