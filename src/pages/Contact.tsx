import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you shortly!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-green-light/30 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-6">Contact Us</h1>
            <p className="text-xl text-brand-gray mb-8">
              Have questions about our solutions? Ready to transform your water management? Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="bg-brand-green-light/20 rounded-xl p-8 text-center">
              <div className="bg-brand-green-medium/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-brand-green-medium" />
              </div>
              <h3 className="text-xl font-semibold text-brand-green-dark mb-4">Call Us</h3>
              <p className="text-brand-gray mb-2">Main Office: (123) 456-7890</p>
              <p className="text-brand-gray mb-2">Support: (123) 456-7891</p>
              <p className="text-brand-gray">Sales: (123) 456-7892</p>
            </div>
            
            <div className="bg-brand-green-light/20 rounded-xl p-8 text-center">
              <div className="bg-brand-green-medium/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-brand-green-medium" />
              </div>
              <h3 className="text-xl font-semibold text-brand-green-dark mb-4">Email Us</h3>
              <p className="text-brand-gray mb-2">General: info@liquidtree.com</p>
              <p className="text-brand-gray mb-2">Support: support@liquidtree.com</p>
              <p className="text-brand-gray">Sales: sales@liquidtree.com</p>
            </div>
            
            <div className="bg-brand-green-light/20 rounded-xl p-8 text-center">
              <div className="bg-brand-green-medium/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-brand-green-medium" />
              </div>
              <h3 className="text-xl font-semibold text-brand-green-dark mb-4">Business Hours</h3>
              <p className="text-brand-gray mb-2">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-brand-gray mb-2">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-brand-gray">Sunday: Closed</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="md:w-1/2 bg-brand-green-dark text-white p-10">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8 opacity-90">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-green-medium mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Headquarters</h3>
                    <p className="opacity-90">123 Water Street, Eco City, EC 12345, USA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-green-medium mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">European Office</h3>
                    <p className="opacity-90">45 Sustainability Avenue, Green Park, London, UK</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-green-medium mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Asia Pacific Office</h3>
                    <p className="opacity-90">78 Innovation Road, Tech District, Singapore</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-brand-green-medium/30 hover:bg-brand-green-medium/50 p-3 rounded-full transition duration-300">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-brand-green-medium/30 hover:bg-brand-green-medium/50 p-3 rounded-full transition duration-300">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-brand-green-medium/30 hover:bg-brand-green-medium/50 p-3 rounded-full transition duration-300">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-brand-green-medium/30 hover:bg-brand-green-medium/50 p-3 rounded-full transition duration-300">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-10">
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-brand-green-dark mb-6">Send Us a Message</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-brand-gray mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-medium"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-brand-gray mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-medium"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-brand-gray mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-medium"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-brand-gray mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-medium"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-brand-gray mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-medium"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Information">Product Information</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Sales">Sales</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-brand-gray mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-medium"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-brand-green-dark text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300 flex items-center"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-brand-green-light/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">Our Locations</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Visit us at one of our global offices
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9 h-[500px]">
              {/* This would be replaced with an actual map integration */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-brand-gray text-lg">Interactive Map Would Be Displayed Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Find quick answers to common questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-brand-green-light/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-brand-green-dark mb-3">How quickly can your systems be installed?</h3>
              <p className="text-brand-gray">
                Installation timelines vary by product and scale. Small-scale PureFlow™ systems can be installed in 1-2 days, while industrial AquaCore™ systems typically take 2-4 weeks for full implementation.
              </p>
            </div>
            
            <div className="bg-brand-green-light/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-brand-green-dark mb-3">Do you offer maintenance services?</h3>
              <p className="text-brand-gray">
                Yes, we offer comprehensive maintenance packages for all our systems. Our service plans include regular inspections, filter replacements, and system optimizations to ensure peak performance.
              </p>
            </div>
            
            <div className="bg-brand-green-light/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-brand-green-dark mb-3">What financing options are available?</h3>
              <p className="text-brand-gray">
                We offer several financing options including leasing, equipment financing, and subscription-based models. Our financial team can help you determine the best option for your organization.
              </p>
            </div>
            
            <div className="bg-brand-green-light/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-brand-green-dark mb-3">Do your systems integrate with existing infrastructure?</h3>
              <p className="text-brand-gray">
                Yes, our systems are designed to integrate seamlessly with most existing water infrastructure. Our engineers will assess your current setup and design an integration plan specific to your needs.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-brand-green-light/30 px-6 py-4 rounded-lg">
              <MessageSquare className="h-6 w-6 text-brand-green-medium mr-3" />
              <p className="text-brand-gray">
                Can't find what you're looking for? <a href="#" className="text-brand-green-dark font-semibold hover:underline">Check our Support Center</a> or <a href="#" className="text-brand-green-dark font-semibold hover:underline">contact us directly</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;