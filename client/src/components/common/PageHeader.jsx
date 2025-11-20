import React from 'react';

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">{title}</h1>
        {subtitle && (
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}