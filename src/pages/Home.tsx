import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { Droplet, BarChart, Lightbulb, ArrowRight, Recycle, Gauge, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />
      
      {/* Current Scenario Section */}
      <section className="py-20 bg-brand-green-light/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6">Current Water Scenario</h2>
              <p className="text-brand-gray mb-6 text-lg">
                Today, over 2 billion people live in water-stressed countries, and this number is expected to grow. 
                Industrial water usage accounts for 22% of global consumption, with significant inefficiencies and waste.
              </p>
              <p className="text-brand-gray mb-8 text-lg">
                Climate change is exacerbating water scarcity, with extreme weather events becoming more frequent and severe. 
                The need for sustainable water management solutions has never been more critical.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-brand-green-medium/20 rounded-full p-3 mr-4">
                    <BarChart className="h-6 w-6 text-brand-green-medium" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-green-dark mb-1">70%</h3>
                    <p className="text-brand-gray">of freshwater is used for agriculture globally</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-green-medium/20 rounded-full p-3 mr-4">
                    <Droplet className="h-6 w-6 text-brand-green-medium" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-green-dark mb-1">30%</h3>
                    <p className="text-brand-gray">of water is lost through leakage in urban systems</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Current water challenges" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-brand-green-medium text-white p-4 rounded-lg shadow-lg">
                  <p className="font-semibold">Water scarcity affects 40% of the global population</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ongoing Innovation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">Ongoing Innovation</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              LiquidTree is at the forefront of water technology innovation, developing solutions that address today's challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-brand-green-light/20 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300 border-t-4 border-brand-green-medium">
              <div className="bg-brand-green-medium/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Recycle className="h-8 w-8 text-brand-green-medium" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-green-dark mb-3">Advanced Recycling</h3>
              <p className="text-brand-gray mb-4">
                Our membrane bioreactor technology recycles up to 95% of industrial wastewater, enabling closed-loop water systems.
              </p>
              <a href="#" className="text-brand-green-medium font-medium flex items-center hover:text-brand-green-dark">
                View technology <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-brand-green-light/20 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300 border-t-4 border-brand-green-medium">
              <div className="bg-brand-green-medium/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Gauge className="h-8 w-8 text-brand-green-medium" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-green-dark mb-3">Smart Monitoring</h3>
              <p className="text-brand-gray mb-4">
                IoT-enabled sensors and AI analytics provide real-time monitoring of water quality and usage patterns.
              </p>
              <a href="#" className="text-brand-green-medium font-medium flex items-center hover:text-brand-green-dark">
                Explore system <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-brand-green-light/20 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300 border-t-4 border-brand-green-medium">
              <div className="bg-brand-green-medium/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-brand-green-medium" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-green-dark mb-3">Energy Efficiency</h3>
              <p className="text-brand-gray mb-4">
                Low-energy treatment processes reduce the carbon footprint of water management by up to 60%.
              </p>
              <a href="#" className="text-brand-green-medium font-medium flex items-center hover:text-brand-green-dark">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center bg-brand-green-dark text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300">
              View all innovations <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Future Potential Section */}
      <section className="py-20 bg-gradient-to-br from-brand-green-dark to-brand-gray text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Potential</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Our vision for the future of water management and the transformative impact of our technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Future water technology" 
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div>
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-brand-green-medium bg-opacity-30 rounded-full w-12 h-12 flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Decentralized Systems</h3>
                    <p className="opacity-90">
                      By 2030, our modular water treatment units will enable communities to operate independently of centralized infrastructure, increasing resilience and access.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-brand-green-medium bg-opacity-30 rounded-full w-12 h-12 flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Zero Liquid Discharge</h3>
                    <p className="opacity-90">
                      Our next-generation technologies aim to achieve 100% water recycling in industrial processes, eliminating wastewater discharge entirely.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-brand-green-medium bg-opacity-30 rounded-full w-12 h-12 flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
                    <p className="opacity-90">
                      Advanced AI will predict water stress events months in advance, allowing for proactive resource management and crisis prevention.
                    </p>
                  </div>
                </div>
              </div>
              
              <button className="mt-10 bg-brand-tan text-brand-green-dark font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300">
                Join Our Vision
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-brand-green-dark to-brand-green-medium rounded-2xl p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Water Management?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Join hundreds of forward-thinking organizations that are making a difference with LiquidTree solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-brand-green-dark font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-brand-green-light transition duration-300">
                Request a Demo
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

export default Home;