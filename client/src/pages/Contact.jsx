import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ContactInfoItem from '../components/common/ContactInfoItem';
import Input from '../components/common/Input';
import Select from '../components/common/Select';
import Textarea from '../components/common/Textarea';
import Button from '../components/common/Button';
import Toast from '../components/common/Toast';
import Spinner from '../components/common/Spinner';
import useForm from '../hooks/useForm';
import useToast from '../hooks/useToast';
import { validateContactForm } from '../utils/validation';
import { CONTACT_INFO } from '../utils/constants';
import { mockSubmitContactForm } from '../api/ContactServices';

export default function Contact() {
  const { toasts, showToast, removeToast } = useToast();

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit, resetForm } = useForm(
    initialValues,
    validateContactForm
  );

  const serviceOptions = [
    { value: 'oil-change', label: 'Oil Change' },
    { value: 'brake-service', label: 'Brake Service' },
    { value: 'engine-repair', label: 'Engine Repair' },
    { value: 'transmission', label: 'Transmission Service' },
    { value: 'diagnostics', label: 'Diagnostics' },
    { value: 'other', label: 'Other' }
  ];

  const onSubmit = async (formData) => {
  try {
    await mockSubmitContactForm(formData);
    showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
    resetForm();
  } catch (error) {
    showToast('Failed to send message. Please try again.', 'error');
  }
  };

  const contactItems = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Phone",
      lines: [CONTACT_INFO.phone, `Mon-Fri: ${CONTACT_INFO.hours.weekday} | Sat: ${CONTACT_INFO.hours.saturday}`]
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      lines: [CONTACT_INFO.email, "We'll respond within 24 hours"]
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Location",
      lines: CONTACT_INFO.address.split(', ')
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Business Hours",
      lines: [
        `Monday - Friday: ${CONTACT_INFO.hours.weekday}`,
        `Saturday: ${CONTACT_INFO.hours.saturday}`,
        `Sunday: ${CONTACT_INFO.hours.sunday}`
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with us today. We're here to answer your questions and schedule your service."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <ContactInfoItem key={index} {...item} />
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">Map placeholder - Add Google Maps integration here</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="space-y-6">
                <Input
                  label="Full Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                  placeholder="John Doe"
                />

                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                  placeholder="john@example.com"
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="(555) 123-4567"
                />

                <Select
                  label="Service Interested In"
                  name="service"
                  value={values.service}
                  onChange={handleChange}
                  options={serviceOptions}
                  placeholder="Select a service"
                />

                <Textarea
                  label="Message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                  placeholder="Tell us about your vehicle and what service you need..."
                />

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full text-lg py-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Spinner size="sm" color="white" />
                      <span className="ml-2">Sending...</span>
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notifications */}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}