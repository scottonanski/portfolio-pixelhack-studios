import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / testimonialsPerPage);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? totalPages - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === totalPages - 1 ? 0 : currentIndex + 1);
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * testimonialsPerPage;
    const end = start + testimonialsPerPage;
    return TESTIMONIALS.slice(start, end);
  };
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-3 block">
              Testimonials
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase text-white">
              Client Experiences
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button 
              onClick={handlePrevious}
              className="cursor-pointer w-12 h-12 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-colors"
            >
              <span className="material-icons-outlined text-sm">chevron_left</span>
            </button>
            <button 
              onClick={handleNext}
              className="cursor-pointer w-12 h-12 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-colors"
            >
              <span className="material-icons-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getVisibleTestimonials().map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-surface-dark p-8 rounded-2xl border border-white/5 relative hover:border-white/10 transition-colors"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-display font-bold text-lg text-white">
                    {testimonial.name}
                  </h4>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {testimonial.location}
                  </span>
                </div>
                <div className="flex text-primary text-xs">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="material-icons-outlined text-sm">
                      star
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 text-sm font-light italic leading-relaxed">
                {testimonial.quote}
              </p>
              <span className="material-icons-outlined absolute bottom-6 right-6 text-4xl text-white/25">
                format_quote
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;