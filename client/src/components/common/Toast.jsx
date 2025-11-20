import React, { useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';

export default function Toast({ type = 'success', message, onClose, duration = 5000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const types = {
    success: {
      icon: <CheckCircle className="w-6 h-6" />,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      textColor: 'text-green-800',
      iconColor: 'text-green-500'
    },
    error: {
      icon: <XCircle className="w-6 h-6" />,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-500',
      textColor: 'text-red-800',
      iconColor: 'text-red-500'
    },
    warning: {
      icon: <AlertCircle className="w-6 h-6" />,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-500',
      textColor: 'text-yellow-800',
      iconColor: 'text-yellow-500'
    }
  };

  const config = types[type];

  return (
    <div className={`fixed top-4 right-4 z-50 ${config.bgColor} border-l-4 ${config.borderColor} p-4 rounded-lg shadow-lg max-w-md animate-slide-in`}>
      <div className="flex items-start">
        <div className={config.iconColor}>{config.icon}</div>
        <div className="ml-3 flex-1">
          <p className={`text-sm font-medium ${config.textColor}`}>{message}</p>
        </div>
        <button
          onClick={onClose}
          className={`ml-3 ${config.textColor} hover:opacity-70 transition`}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}