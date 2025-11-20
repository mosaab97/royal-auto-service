import React from 'react';

export default function ContactInfoItem({ icon, title, lines }) {
  return (
    <div className="flex items-start">
      <div className="bg-blue-100 p-3 rounded-lg mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        {lines.map((line, idx) => (
          <p key={idx} className={idx === lines.length - 1 ? "text-sm text-gray-500" : "text-gray-600"}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}