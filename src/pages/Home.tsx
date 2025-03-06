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
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6">The Urgent Need for Clean Air in Dense Urban Areas</h2>
              <p className="text-brand-gray mb-6 text-lg">
              Rapid urbanization and industrialization have led to a dramatic decline in air quality in many cities across the globe, particularly in densely populated areas.
              </p>
              <p className="text-brand-gray mb-8 text-lg">
              Traditional green spaces are often insufficient to combat the rising levels of harmful pollutants, posing significant risks to public health and the environment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-brand-green-medium/20 rounded-full p-3 mr-4">
                    <BarChart className="h-6 w-6 text-brand-green-medium" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-green-dark mb-1">High Pollution Levels</h3>
                    <p className="text-brand-gray">Dense urban areas often experience dangerously high levels of air pollution, exceeding safe limits and impacting respiratory health.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-green-medium/20 rounded-full p-3 mr-4">
                    <Droplet className="h-6 w-6 text-brand-green-medium" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-green-dark mb-1">Limited Green Space</h3>
                    <p className="text-brand-gray">The scarcity of available land for traditional green spaces restricts the natural capacity for air purification in many urban environments.</p>
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
                  <p className="font-semibold">Innovative solutions are needed to address the growing challenge of urban air pollution.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">Introducing the Liquid Tree: A Revolutionary Approach to Urban Air Purification</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            The Liquid Tree is a fully functional prototype designed to combat air pollution in densely populated areas, offering a concentrated, nature-based solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-brand-green-light/20 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300 border-t-4 border-brand-green-medium">
              <div className="bg-brand-green-medium/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Recycle className="h-8 w-8 text-brand-green-medium" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-green-dark mb-3">Concentrated Air Purification</h3>
              <p className="text-brand-gray mb-4">
              The Liquid Tree's unique design allows it to absorb CO2 and release oxygen at a rate comparable to a large number of conventional trees, maximizing air purification in limited spaces.
              </p>
              <a href="#" className="text-brand-green-medium font-medium flex items-center hover:text-brand-green-dark">
                View technology <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-brand-green-light/20 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300 border-t-4 border-brand-green-medium">
              <div className="bg-brand-green-medium/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Gauge className="h-8 w-8 text-brand-green-medium" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-green-dark mb-3">Versatile Deployment</h3>
              <p className="text-brand-gray mb-4">
              The Liquid Tree's compact form factor enables flexible installation in various urban locations, including sidewalks, road medians, and building facades.
              </p>
              <a href="#" className="text-brand-green-medium font-medium flex items-center hover:text-brand-green-dark">
              Explore Applications <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-brand-green-light/20 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300 border-t-4 border-brand-green-medium">
              <div className="bg-brand-green-medium/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-brand-green-medium" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-green-dark mb-3">Sustainable Innovation</h3>
              <p className="text-brand-gray mb-4">
              The Liquid Tree project represents a commitment to developing sustainable, nature-based solutions for a greener future in our cities.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Goals and Beyond: Creating a Sustainable Future</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
            The Liquid Tree project aims to deliver a fully functional prototype, paving the way for further development and commercialization of this innovative technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Future applications of Liquid Tree technology" 
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
                    <h3 className="text-xl font-semibold mb-2">Prototype Development</h3>
                    <p className="opacity-90">
                    The primary goal is to create a fully functional Liquid Tree unit, demonstrating the feasibility and potential of this technology.
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
                    <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                    <p className="opacity-90">
                    The project will focus on optimizing the Liquid Tree's performance, ensuring efficient CO2 absorption and oxygen production.
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
                    <h3 className="text-xl font-semibold mb-2">Scalability and Commercialization</h3>
                    <p className="opacity-90">
                    The project will lay the groundwork for future scalability and commercialization of Liquid Tree technology, enabling wider adoption and impact.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Support a Greener Future?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join us in our mission to combat urban air pollution and create a more sustainable future for our cities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-brand-green-dark font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-brand-green-light transition duration-300">
              Get Involved
              </button>
              <button className="bg-transparent border-2 border-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-brand-green-dark transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;