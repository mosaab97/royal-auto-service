// API endpoints will go here
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const CONTACT_INFO = {
  phone: '(555) 123-4567',
  email: 'info@royalauto.com',
  address: '123 Main Street, Your City, ST 12345',
  hours: {
    weekday: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'Closed'
  }
};