import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Hero slider images and content
const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    title: 'Sustainable Water Solutions',
    subtitle: 'Innovative technologies for a water-secure future',
    cta: 'Explore Solutions'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    title: 'Water Conservation',
    subtitle: 'Helping businesses reduce water consumption by up to 70%',
    cta: 'Learn How'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    title: 'Global Impact',
    subtitle: 'Serving communities across 30+ countries worldwide',
    cta: 'See Our Impact'
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/80 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 opacity-0 animate-fadeIn" 
                    style={{ animation: index === currentSlide ? 'fadeIn 1s forwards 0.5s' : 'none' }}>
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-fadeIn"
                   style={{ animation: index === currentSlide ? 'fadeIn 1s forwards 0.8s' : 'none' }}>
                  {slide.subtitle}
                </p>
                <button className="bg-brand-green-medium hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 opacity-0 animate-fadeIn"
                        style={{ animation: index === currentSlide ? 'fadeIn 1s forwards 1.1s' : 'none' }}>
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-brand-green-medium w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;