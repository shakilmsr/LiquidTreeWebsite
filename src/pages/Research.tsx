import React from 'react';
import { FlaskConical, FileText, BarChart2, ArrowRight, Download, ExternalLink } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-green-dark text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Innovation</h1>
              <p className="text-xl mb-8 opacity-90">
                Our cutting-edge research is driving the future of water management technology, with a focus on sustainability, efficiency, and accessibility.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-brand-green-medium/30 px-4 py-2 rounded-full flex items-center">
                  <span className="text-white font-semibold">15+ Patents</span>
                </div>
                <div className="bg-brand-green-medium/30 px-4 py-2 rounded-full flex items-center">
                  <span className="text-white font-semibold">30+ Research Papers</span>
                </div>
                <div className="bg-brand-green-medium/30 px-4 py-2 rounded-full flex items-center">
                  <span className="text-white font-semibold">5 Research Labs</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581093458791-9d8e8e0e5a9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Research laboratory" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">Our Research Focus</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Exploring innovative approaches to solve the world's most pressing water challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-brand-green-light/20 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-brand-green-medium/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FlaskConical className="h-8 w-8 text-brand-green-medium" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-green-dark mb-3">Advanced Filtration</h3>
              <p className="text-brand-gray mb-4">
                Developing next-generation membrane technologies that can filter contaminants at the molecular level while reducing energy consumption.
              </p>
              <ul className="text-brand-gray mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-green-medium mr-2">•</span>
                  <span>Graphene-based nanofiltration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green-medium mr-2">•</span>
                  <span>Biomimetic membranes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green-medium mr-2">•</span>
                  <span>Self-cleaning filter systems</span>
                </li>
              </ul>
              <a href="#" className="text-brand-green-medium font-medium flex items-center hover:text-brand-green-dark">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-brand-green-light/20 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-brand-green-medium/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BarChart2 className="h-8 w-8 text-brand-green-medium" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-green-dark mb-3">AI & Predictive Analytics</h3>
              <p className="text-brand-gray mb-4">
                Leveraging artificial intelligence to optimize water usage, predict maintenance needs, and identify potential water stress events.
              </p>
              <ul className="text-brand-gray mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-green-medium mr-2">•</span>
                  <span>Machine learning for usage patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green-medium mr-2">•</span>
                  <span>Predictive maintenance algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green-medium mr-2">•</span>
                  <span>Climate impact modeling</span>
                </li>
              </ul>
              <a href="#" className="text-brand-green-medium font-medium flex items-center hover:text-brand-green-dark">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-brand-green-light/20 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-brand-green-medium/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-brand-green-medium" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-green-dark mb-3">Sustainable Materials</h3>
              <p className="text-brand-gray mb-4">
                Researching eco-friendly materials and manufacturing processes to reduce the environmental footprint of water management systems.
              </p>
              <ul className="text-brand-gray mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-green-medium mr-2">•</span>
                  <span>Biodegradable filter components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green-medium mr-2">•</span>
                  <span>Recycled material integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green-medium mr-2">•</span>
                  <span>Low-carbon manufacturing</span>
                </li>
              </ul>
              <a href="#" className="text-brand-green-medium font-medium flex items-center hover:text-brand-green-dark">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-brand-green-light/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">Recent Publications</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Our research team regularly publishes findings in leading scientific journals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-brand-green-dark">Novel Graphene-Based Filtration Membranes for Enhanced Water Purification</h3>
                <span className="bg-brand-green-medium/20 text-brand-green-dark text-sm px-3 py-1 rounded-full">2025</span>
              </div>
              <p className="text-brand-gray mb-4">
                Chen, S., Rodriguez, M., et al. Journal of Water Technology, 45(2), 112-128.
              </p>
              <p className="text-brand-gray mb-6">
                This study presents a breakthrough in membrane technology using graphene-oxide composites, achieving 99.9% contaminant removal with 40% less energy consumption.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="Dr. Sarah Chen" 
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-brand-green-dark font-medium">Dr. Sarah Chen</p>
                    <p className="text-sm text-brand-gray">Lead Researcher</p>
                  </div>
                </div>
                <a href="#" className="flex items-center text-brand-green-medium hover:text-brand-green-dark">
                  <Download className="h-5 w-5 mr-1" /> PDF
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-brand-green-dark">Predictive Analytics for Urban Water Management: A Machine Learning Approach</h3>
                <span className="bg-brand-green-medium/20 text-brand-green-dark text-sm px-3 py-1 rounded-full">2024</span>
              </div>
              <p className="text-brand-gray mb-4">
                Zhang, E., Wilson, J., et al. Environmental Data Science, 18(4), 345-362.
              </p>
              <p className="text-brand-gray mb-6">
                This paper demonstrates how machine learning algorithms can predict water usage patterns and potential infrastructure failures with 92% accuracy.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="Dr. Emily Zhang" 
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-brand-green-dark font-medium">Dr. Emily Zhang</p>
                    <p className="text-sm text-brand-gray">Lead Researcher</p>
                  </div>
                </div>
                <a href="#" className="flex items-center text-brand-green-medium hover:text-brand-green-dark">
                  <Download className="h-5 w-5 mr-1" /> PDF
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-brand-green-dark">Sustainable Materials for Water Treatment Infrastructure: A Life Cycle Assessment</h3>
                <span className="bg-brand-green-medium/20 text-brand-green-dark text-sm px-3 py-1 rounded-full">2024</span>
              </div>
              <p className="text-brand-gray mb-4">
                Rodriguez, M., Johnson, T., et al. Journal of Sustainable Engineering, 29(3), 201-218.
              </p>
              <p className="text-brand-gray mb-6">
                This research evaluates the environmental impact of various materials used in water treatment systems, identifying opportunities for carbon footprint reduction.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="Dr. Michael Rodriguez" 
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-brand-green-dark font-medium">Dr. Michael Rodriguez</p>
                    <p className="text-sm text-brand-gray">Lead Researcher</p>
                  </div>
                </div>
                <a href="#" className="flex items-center text-brand-green-medium hover:text-brand-green-dark">
                  <Download className="h-5 w-5 mr-1" /> PDF
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-brand-green-dark">Decentralized Water Treatment Systems for Rural Communities: A Case Study</h3>
                <span className="bg-brand-green-medium/20 text-brand-green-dark text-sm px-3 py-1 rounded-full">2023</span>
              </div>
              <p className="text-brand-gray mb-4">
                Wilson, J., Chen, S., et al. Water Resources Management, 37(1), 78-95.
              </p>
              <p className="text-brand-gray mb-6">
                This case study examines the implementation of modular water treatment units in rural areas, showing a 60% improvement in water access and quality.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="James Wilson" 
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-brand-green-dark font-medium">James Wilson</p>
                    <p className="text-sm text-brand-gray">Lead Researcher</p>
                  </div>
                </div>
                <a href="#" className="flex items-center text-brand-green-medium hover:text-brand-green-dark">
                  <Download className="h-5 w-5 mr-1" /> PDF
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center bg-brand-green-dark text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300">
              View All Publications <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Research Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4">Our Research Partners</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Collaborating with leading institutions to advance water technology
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-brand-green-light/10 p-6 rounded-xl flex items-center justify-center">
              <p className="text-xl font-semibold text-brand-green-dark">MIT</p>
            </div>
            <div className="bg-brand-green-light/10 p-6 rounded-xl flex items-center justify-center">
              <p className="text-xl font-semibold text-brand-green-dark">Stanford University</p>
            </div>
            <div className="bg-brand-green-light/10 p-6 rounded-xl flex items-center justify-center">
              <p className="text-xl font-semibold text-brand-green-dark">ETH Zurich</p>
            </div>
            <div className="bg-brand-green-light/10 p-6 rounded-xl flex items-center justify-center">
              <p className="text-xl font-semibold text-brand-green-dark">Tokyo Institute of Technology</p>
            </div>
            <div className="bg-brand-green-light/10 p-6 rounded-xl flex items-center justify-center">
              <p className="text-xl font-semibold text-brand-green-dark">Water Research Institute</p>
            </div>
            <div className="bg-brand-green-light/10 p-6 rounded-xl flex items-center justify-center">
              <p className="text-xl font-semibold text-brand-green-dark">Global Water Alliance</p>
            </div>
            <div className="bg-brand-green-light/10 p-6 rounded-xl flex items-center justify-center">
              <p className="text-xl font-semibold text-brand-green-dark">UN Water Program</p>
            </div>
            <div className="bg-brand-green-light/10 p-6 rounded-xl flex items-center justify-center">
              <p className="text-xl font-semibold text-brand-green-dark">European Water Initiative</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-green-dark text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between bg-brand-green-medium/30 rounded-2xl p-10 md:p-16">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Collaborating?</h2>
              <p className="text-xl opacity-90">
                We're always open to new research partnerships and collaborations that advance water technology.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-end">
              <button className="bg-white text-brand-green-dark font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-brand-green-light transition duration-300 flex items-center">
                Contact Research Team <ExternalLink className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;