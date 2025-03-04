import React from 'react';
import { ExternalLink, Award, HeartHandshake, DollarSign, Globe, Building } from 'lucide-react';

const External: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-green-light/30 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-6">External Partnerships</h1>
            <p className="text-xl text-brand-gray mb-8">
              LiquidTree collaborates with organizations worldwide to advance water management technology.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/3 mb-10 md:mb-0">
              <div className="flex items-center mb-6">
                <Building className="h-8 w-8 text-brand-green-medium mr-3" />
                <h2 className="text-3xl font-bold text-brand-green-dark">Affiliations</h2>
              </div>
              <p className="text-brand-gray mb-6">
                Our institutional affiliations and partnerships.
              </p>
            </div>
            
            <div className="md:w-2/3 md:pl-16">
              <div className="bg-brand-green-light/10 rounded-xl p-6">
                <p className="text-brand-gray">Affiliation content will be displayed here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section className="py-20 bg-brand-green-light/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/3 mb-10 md:mb-0">
              <div className="flex items-center mb-6">
                <DollarSign className="h-8 w-8 text-brand-green-medium mr-3" />
                <h2 className="text-3xl font-bold text-brand-green-dark">Funding</h2>
              </div>
              <p className="text-brand-gray mb-6">
                Our research and development funding sources.
              </p>
            </div>
            
            <div className="md:w-2/3 md:pl-16">
              <div className="bg-white rounded-xl shadow-md p-8">
                <p className="text-brand-gray">Funding information will be displayed here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/3 mb-10 md:mb-0">
              <div className="flex items-center mb-6">
                <HeartHandshake className="h-8 w-8 text-brand-green-medium mr-3" />
                <h2 className="text-3xl font-bold text-brand-green-dark">Collaborations</h2>
              </div>
              <p className="text-brand-gray mb-6">
                Our collaborative projects with academic institutions, industry partners, and government agencies.
              </p>
            </div>
            
            <div className="md:w-2/3 md:pl-16">
              <div className="bg-brand-green-light/10 rounded-xl p-8">
                <p className="text-brand-gray">Collaboration information will be displayed here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-brand-green-dark text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-brand-green-medium mr-3" />
              <h2 className="text-3xl font-bold">Our Sponsors</h2>
            </div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Organizations that support our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/10 p-8 rounded-xl flex items-center justify-center">
              <p className="text-xl">Sponsor placeholder</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl flex items-center justify-center">
              <p className="text-xl">Sponsor placeholder</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl flex items-center justify-center">
              <p className="text-xl">Sponsor placeholder</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl flex items-center justify-center">
              <p className="text-xl">Sponsor placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* External Links Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/3 mb-10 md:mb-0">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-brand-green-medium mr-3" />
                <h2 className="text-3xl font-bold text-brand-green-dark">External Resources</h2>
              </div>
              <p className="text-brand-gray mb-6">
                Valuable resources from our partners and other organizations.
              </p>
            </div>
            
            <div className="md:w-2/3 md:pl-16">
              <div className="bg-brand-green-light/10 rounded-xl p-8">
                <p className="text-brand-gray">External links will be displayed here.</p>
                <div className="mt-4">
                  <a href="#" className="flex items-center text-brand-green-medium hover:text-brand-green-dark">
                    Example resource <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-green-light/30">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 md:p-16 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6">Interested in Partnering?</h2>
            <p className="text-xl text-brand-gray mb-8">
              Contact us to explore collaboration opportunities.
            </p>
            <button className="bg-brand-green-dark text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default External;