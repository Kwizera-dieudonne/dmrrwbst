import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactFormData } from '../types';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    alert('Thank you for reaching out! We will get back to you soon.');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-3">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Send us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">hello@brewcraft.com</p>
                    <p className="text-gray-600">support@brewcraft.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri: 9AM - 6PM EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">123 Brew Street</p>
                    <p className="text-gray-600">Seattle, WA 98101</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            {/* <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Visit Our Café
              </h3>
              <p className="text-amber-50 mb-4">
                Experience our products firsthand at our flagship café. Enjoy a freshly brewed cup in a cozy atmosphere.
              </p>
              <p className="font-semibold">Hours:</p>
              <p className="text-amber-50">Monday - Friday: 7AM - 8PM</p>
              <p className="text-amber-50">Saturday - Sunday: 8AM - 9PM</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;