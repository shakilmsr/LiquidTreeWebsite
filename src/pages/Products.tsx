import React from 'react';
import { Droplet, Gauge, Zap, Shield, ArrowRight, Check, Star } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-green-dark to-brand-gray text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Products & Innovation</h1>
              <p className="text-xl mb-8 opacity-90">
                Cutting-edge water management solutions designed for efficiency, sustainability, and ease of implementation.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-brand-green-medium hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Explore Solutions
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-green-dark font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Request Demo
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Water filtration system" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">Our Featured Solutions</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Innovative technologies designed to transform water management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-brand-green-light/20 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="h-64 bg-gradient-to-br from-brand-green-dark to-brand-green-medium flex items-center justify-center">
                <Droplet className="h-24 w-24 text-white opacity-80" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-brand-green-dark">AquaCore™</h3>
                  <span className="bg-brand-tan text-brand-green-dark text-sm px-3 py-1 rounded-full">Flagship</span>
                </div>
                <p className="text-brand-gray mb-6">
                  Our comprehensive water recycling system for industrial applications, capable of processing up to 100,000 gallons per day with 95% efficiency.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-green-medium mr-2 mt-0.5" />
                    <span className="text-brand-gray">Advanced membrane filtration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-green-medium mr-2 mt-0.5" />
                    <span className="text-brand-gray">AI-powered monitoring system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-green-medium mr-2 mt-0.5" />
                    <span className="text-brand-gray">Modular, scalable design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-green-medium mr-2 mt-0.5" />
                    <span className="text-brand-gray">60% energy reduction vs. traditional systems</span>
                  </li>
                </ul>
                <a href="#" className="inline-flex items-center bg-brand-green-dark text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition duration-300">
                  Product Details <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="bg-brand-green-light/20 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="h-64 bg-gradient-to-br from-brand-green-dark to-brand-green-medium flex items-center justify-center">
                <Gauge className="h-24 w-24 text-white opacity-80" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-brand-green-dark">HydroSense™</h3>
                  <span className="bg-brand-tan text-brand-green-dark text-sm px-3 py-1 rounded-full">Smart</span>
                </div>
                <p className="text-brand-gray mb-6">
                  IoT-enabled water monitoring and management platform that provides real-time analytics and predictive maintenance alerts.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-green-medium mr-2 mt-0.5" />
                    <span className="text-brand-gray">Real-time quality monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-green-medium mr-2 mt-0.5" /> <Check className="h-5 w-5 text-brand-green-medium mr-2 mt-0.5" />
                    <span className="text-brand-gray">Leak detection and alerts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-green-medium mr-2 mt-0.5" />
                    <span className="text-brand-gray">Usage pattern analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-green-medium mr-2 mt-0.5" />
                    <span className="text-brand-gray">Cloud-based dashboard</span>
                  </li>
                </ul>
                <a href="#" className="inline-flex items-center bg-brand-green-dark text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition duration-300">
                  Product Details <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="bg-brand-green-light/20 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="h-64 bg-gradient-to-br from-brand-green-dark to-brand-green-medium flex items-center justify-center">
                <Shield className="h-24 w-24 text-white opacity-80" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-brand-green-dark">PureFlow™</h3>
                  <span className="bg-brand-tan text-brand-green-dark text-sm px-3 py-1 rounded-full">Compact</span>
                </div>
                <p className="text-brand-gray mb-6">
                  Modular water purification system designed for small to medium businesses and residential complexes.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-green-medium mr-2 mt-0.5" />
                    <span className="text-brand-gray">Compact, space-saving design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-green-medium mr-2 mt-0.5" />
                    <span className="text-brand-gray">Multi-stage filtration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-green-medium mr-2 mt-0.5" />
                    <span className="text-brand-gray">Easy installation and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-green-medium mr-2 mt-0.5" />
                    <span className="text-brand-gray">Smartphone app integration</span>
                  </li>
                </ul>
                <a href="#" className="inline-flex items-center bg-brand-green-dark text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition duration-300">
                  Product Details <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-20 bg-brand-green-light/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6">Innovation in Action</h2>
              <p className="text-brand-gray mb-6 text-lg">
                Our latest breakthrough, the NanoFilter™ technology, represents a quantum leap in water filtration efficiency. Using graphene-based membranes just one atom thick, it removes contaminants at the molecular level while reducing energy consumption by 70%.
              </p>
              <p className="text-brand-gray mb-8 text-lg">
                This technology is being integrated into our next generation of products, scheduled for release in 2026.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center">
                  <span className="text-brand-green-medium font-semibold mr-2">Patent Pending</span>
                  <span className="text-brand-green-dark">15 Countries</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center">
                  <span className="text-brand-green-medium font-semibold mr-2">Testing Phase</span>
                  <span className="text-brand-green-dark">Completed</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="NanoFilter technology" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-tan text-brand-green-dark p-4 rounded-lg shadow-lg">
                  <p className="font-semibold">Next-generation filtration technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">Success Stories</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              See how our solutions are making a difference for businesses and communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-brand-green-light/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Manufacturing facility" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-brand-tan" fill="#d1a06d" />
                    ))}
                  </div>
                  <span className="ml-2 text-brand-gray">5.0</span>
                </div>
                <h3 className="text-2xl font-semibold text-brand-green-dark mb-2">EcoManufacturing Inc.</h3>
                <p className="text-brand-gray mb-6">
                  Implemented AquaCore™ system in their production facility, reducing water consumption by 70% and saving $1.2M annually in water and energy costs.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-brand-green-medium font-semibold">Results:</span>
                    <ul className="text-brand-gray mt-2">
                      <li>• 70% reduction in water usage</li>
                      <li>• 60% reduction in wastewater</li>
                      <li>• ROI achieved in 14 months</li>
                    </ul>
                  </div>
                  <a href="#" className="text-brand-green-medium hover:text-brand-green-dark">
                    <ArrowRight className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-green-light/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="City skyline" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-brand-tan" fill="#d1a06d" />
                    ))}
                  </div>
                  <span className="ml-2 text-brand-gray">5.0</span>
                </div>
                <h3 className="text-2xl font-semibold text-brand-green-dark mb-2">Riverside County</h3>
                <p className="text-brand-gray mb-6">
                  Deployed HydroSense™ across their municipal water system, identifying leaks and optimizing distribution to conserve millions of gallons annually.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-brand-green-medium font-semibold">Results:</span>
                    <ul className="text-brand-gray mt-2">
                      <li>• 30% reduction in water loss</li>
                      <li>• 45% fewer service disruptions</li>
                      <li>• $3.5M annual savings</li>
                    </ul>
                  </div>
                  <a href="#" className="text-brand-green-medium hover:text-brand-green-dark">
                    <ArrowRight className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center bg-brand-green-dark text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300">
              View All Case Studies <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="py-20 bg-brand-green-dark text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solution Comparison</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Find the right water management solution for your needs
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-brand-green-medium/30">
                  <th className="py-4 px-6 text-left">Features</th>
                  <th className="py-4 px-6 text-center">AquaCore™</th>
                  <th className="py-4 px-6 text-center">HydroSense™</th>
                  <th className="py-4 px-6 text-center">PureFlow™</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-green-medium/30">
                  <td className="py-4 px-6 font-medium">Capacity</td>
                  <td className="py-4 px-6 text-center">100,000+ gal/day</td>
                  <td className="py-4 px-6 text-center">N/A (Monitoring)</td>
                  <td className="py-4 px-6 text-center">5,000 gal/day</td>
                </tr>
                <tr className="border-b border-brand-green-medium/30">
                  <td className="py-4 px-6 font-medium">Best For</td>
                  <td className="py-4 px-6 text-center">Industrial, Large Commercial</td>
                  <td className="py-4 px-6 text-center">Any Scale Operation</td>
                  <td className="py-4 px-6 text-center">SMB, Residential</td>
                </tr>
                <tr className="border-b border-brand-green-medium/30">
                  <td className="py-4 px-6 font-medium">Installation</td>
                  <td className="py-4 px-6 text-center">Professional</td>
                  <td className="py-4 px-6 text-center">Self/Professional</td>
                  <td className="py-4 px-6 text-center">Self/Professional</td>
                </tr>
                <tr className="border-b border-brand-green-medium/30">
                  <td className="py-4 px-6 font-medium">Maintenance</td>
                  <td className="py-4 px-6 text-center">Quarterly</td>
                  <td className="py-4 px-6 text-center">Annual</td>
                  <td className="py-4 px-6 text-center">Bi-annual</td>
                </tr>
                <tr className="border-b border-brand-green-medium/30">
                  <td className="py-4 px-6 font-medium">Smart Features</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-brand-green-medium inline" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-brand-green-medium inline" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-brand-green-medium inline" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Typical ROI</td>
                  <td className="py-4 px-6 text-center">12-18 months</td>
                  <td className="py-4 px-6 text-center">6-12 months</td>
                  <td className="py-4 px-6 text-center">18-24 months</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-brand-tan text-brand-green-dark font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300">
              Request Custom Comparison
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-brand-green-dark to-brand-green-medium rounded-2xl p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Water Management?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Our team of experts is ready to help you find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-brand-green-dark font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-brand-green-light transition duration-300">
                Schedule a Demo
              </button>
              <button className="bg-brand-tan text-brand-green-dark font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-opacity-90 transition duration-300">
                Download Brochure
              </button>
              <button className="bg-transparent border-2 border-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-brand-green-dark transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;