// API endpoints will go here
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const CONTACT_INFO = {
  phone: '(414) 277-7200',
  email: 'service@royal-autoservice.com',
  address: '6441 W Howard Ave, Milwaukee, WI 53220',
  hours: {
    weekday: '8:00 AM - 5:30 PM',
    saturday: '9:00 AM - 3:00 PM',
    sunday: 'Closed'
  }
};