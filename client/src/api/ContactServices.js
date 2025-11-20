import { API_BASE_URL } from '../utils/constants';

export const submitContactForm = async (formData) => {
  try {
    // TODO: Replace with actual API endpoint when backend is ready
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
};

// For now, simulate API call
export const mockSubmitContactForm = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Mock API - Form data received:', formData);
      resolve({ success: true, message: 'Form submitted successfully' });
    }, 2000);
  });
};