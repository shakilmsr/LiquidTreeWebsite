import React from 'react';
import { Users, Award, History, Target, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-green-light/30 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-6">About LiquidTree</h1>
              <p className="text-brand-gray text-xl mb-8">
                We're a team of scientists, engineers, and environmental specialists dedicated to solving the world's most pressing water challenges through innovation and sustainable practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center">
                  <span className="text-brand-green-medium font-semibold mr-2">Founded</span>
                  <span className="text-brand-green-dark">2018</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center">
                  <span className="text-brand-green-medium font-semibold mr-2">Team</span>
                  <span className="text-brand-green-dark">120+ Experts</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center">
                  <span className="text-brand-green-medium font-semibold mr-2">Global Presence</span>
                  <span className="text-brand-green-dark">30+ Countries</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="LiquidTree team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6">Our Mission</h2>
            <p className="text-xl text-brand-gray">
              To revolutionize water management through innovative technologies that conserve resources, reduce environmental impact, and ensure water security for future generations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-brand-green-light/20 p-8 rounded-xl">
              <div className="bg-brand-green-medium/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-brand-green-medium" />
              </div>
              <h3 className="text-xl font-semibold text-brand-green-dark mb-4">Sustainability</h3>
              <p className="text-brand-gray">
                Developing solutions that minimize resource consumption and environmental impact while maximizing efficiency.
              </p>
            </div>
            
            <div className="bg-brand-green-light/20 p-8 rounded-xl">
              <div className="bg-brand-green-medium/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-brand-green-medium" />
              </div>
              <h3 className="text-xl font-semibold text-brand-green-dark mb-4">Innovation</h3>
              <p className="text-brand-gray">
                Pushing the boundaries of water technology through continuous research and development.
              </p>
            </div>
            
            <div className="bg-brand-green-light/20 p-8 rounded-xl">
              <div className="bg-brand-green-medium/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-brand-green-medium" />
              </div>
              <h3 className="text-xl font-semibold text-brand-green-dark mb-4">Accessibility</h3>
              <p className="text-brand-gray">
                Making advanced water management solutions accessible to communities and businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-brand-green-dark text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6 opacity-90">
                LiquidTree was founded in 2018 by Dr. Sarah Chen and Dr. Michael Rodriguez, two environmental engineers with a shared vision of transforming water management through technology.
              </p>
              <p className="text-lg mb-6 opacity-90">
                After witnessing the devastating effects of water scarcity in communities around the world, they assembled a team of experts to develop innovative solutions that could address these challenges.
              </p>
              <p className="text-lg opacity-90">
                Today, LiquidTree has grown into a global leader in water technology, with projects in over 30 countries and partnerships with major corporations, governments, and NGOs.
              </p>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="LiquidTree founders" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-tan text-brand-green-dark p-4 rounded-lg shadow-lg">
                  <p className="font-semibold">Founded by environmental engineers with a vision</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-10 text-center">Our Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-green-medium/30"></div>
              
              {/* Timeline items */}
              <div className="space-y-20">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-green-medium"></div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                      <h4 className="text-xl font-semibold mb-2">2018</h4>
                      <p className="opacity-90">LiquidTree founded in San Francisco, California</p>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="bg-brand-green-medium/20 p-4 rounded-lg">
                        <p className="opacity-90">Initial research on membrane filtration technology begins</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-green-medium"></div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                      <div className="bg-brand-green-medium/20 p-4 rounded-lg">
                        <p className="opacity-90">First prototype of water recycling system developed</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <h4 className="text-xl font-semibold mb-2">2020</h4>
                      <p className="opacity-90">Series A funding secured, $12M investment</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-green-medium"></div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                      <h4 className="text-xl font-semibold mb-2">2022</h4>
                      <p className="opacity-90">Global expansion begins, offices open in Europe and Asia</p>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="bg-brand-green-medium/20 p-4 rounded-lg">
                        <p className="opacity-90">Launch of AquaCore™ commercial water management platform</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-green-medium"></div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                      <div className="bg-brand-green-medium/20 p-4 rounded-lg">
                        <p className="opacity-90">100th major installation completed, saving over 1 billion gallons annually</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <h4 className="text-xl font-semibold mb-2">Today</h4>
                      <p className="opacity-90">Continuing to innovate and expand our global impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">Our Leadership Team</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Meet the experts driving our mission forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-brand-green-light/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Sarah Chen" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-green-dark mb-1">Dr. Sarah Chen</h3>
                <p className="text-brand-green-medium mb-4">Co-Founder & CEO</p>
                <p className="text-brand-gray text-sm">Environmental engineer with 15+ years of experience in water treatment technologies.</p>
              </div>
            </div>
            
            <div className="bg-brand-green-light/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Michael Rodriguez" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-green-dark mb-1">Dr. Michael Rodriguez</h3>
                <p className="text-brand-green-medium mb-4">Co-Founder & CTO</p>
                <p className="text-brand-gray text-sm">Specializes in membrane technology and advanced filtration systems.</p>
              </div>
            </div>
            
            <div className="bg-brand-green-light/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Emily Zhang" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-green-dark mb-1">Dr. Emily Zhang</h3>
                <p className="text-brand-green-medium mb-4">Chief Research Officer</p>
                <p className="text-brand-gray text-sm">Leading our R&D initiatives with a focus on next-generation water purification.</p>
              </div>
            </div>
            
            <div className="bg-brand-green-light/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="James Wilson" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-green-dark mb-1">James Wilson</h3>
                <p className="text-brand-green-medium mb-4">Chief Operations Officer</p>
                <p className="text-brand-gray text-sm">Oversees global operations and implementation of LiquidTree systems.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-brand-green-dark text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300">
              Meet the Full Team
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-green-light/30">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 md:p-16 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6">Join Our Mission</h2>
            <p className="text-xl text-brand-gray mb-10 max-w-3xl mx-auto">
              We're always looking for talented individuals who are passionate about water conservation and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-brand-green-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-opacity-90 transition duration-300">
                View Open Positions
              </button>
              <button className="bg-brand-tan text-brand-green-dark font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-opacity-90 transition duration-300">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;