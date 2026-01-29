import React, { useState } from 'react';
import { SERVICES } from '../constants';

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState('1');
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);
  const [isImageChanging, setIsImageChanging] = useState(false);

  const serviceImages: { [key: string]: string } = {
    '1': 'imgs/acoustic-consultation.jpg', // Custom System Calibration
    '2': 'imgs/room-geometry.jpg',        // Room Geometry Analysis
    '3': 'imgs/speaker-placement.jpg',     // Speaker Placement Optimization
    '4': 'imgs/reverb-control.jpg',        // Reverberation Control
  };

  const serviceDescriptions: { [key: string]: string } = {
    '1': '"The listening room is the most important component in your audio chain. We shape the invisible to reveal the audible."',
    '2': '"Room geometry dictates how sound waves interact with surfaces. We analyze and optimize these relationships for perfect acoustics."',
    '3': '"Speaker placement is both science and art. We position your equipment to create the ideal soundstage and imaging."',
    '4': '"Reverberation control transforms a room from chaotic to controlled. We tame reflections for clarity and precision."',
  };

  const handleServiceClick = (serviceId: string) => {
    if (serviceId !== selectedService) {
      setIsImageChanging(true);
      setTimeout(() => {
        setSelectedService(serviceId);
        setIsImageChanging(false);
      }, 300);
    }
  };

  const handlePrevious = () => {
    const currentIndex = SERVICES.findIndex(s => s.id === selectedService);
    const previousIndex = currentIndex === 0 ? SERVICES.length - 1 : currentIndex - 1;
    handleServiceClick(SERVICES[previousIndex].id);
  };

  const handleNext = () => {
    const currentIndex = SERVICES.findIndex(s => s.id === selectedService);
    const nextIndex = currentIndex === SERVICES.length - 1 ? 0 : currentIndex + 1;
    handleServiceClick(SERVICES[nextIndex].id);
  };
  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-3 block">
              Services
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase text-white">
              Acoustic Consultation
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button 
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black hover:animate-pulse transition-colors"
            >
              <span className="material-icons-outlined text-sm">chevron_left</span>
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black hover:animate-pulse transition-colors"
            >
              <span className="material-icons-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-gray-400 mb-10 font-light text-lg">
              Our consultation service is designed to craft the perfect sonic environment. We optimize speaker placement, room geometry, and material selection.
            </p>
            {SERVICES.map((service) => (
              <div key={service.id} className="group cursor-pointer" onClick={() => handleServiceClick(service.id)}>
                <div className={`flex items-center justify-between p-6 rounded-xl border transition-all duration-300 ${
                  selectedService === service.id 
                    ? 'bg-surface-accent border-primary/50' 
                    : 'bg-surface-dark border-white/5 hover:border-primary/50 hover:bg-surface-accent'
                }`}>
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-lg bg-black/50 flex items-center justify-center border border-white/5 group-hover:border-primary/30">
                      <span className="material-icons-outlined text-primary">
                        {service.icon}
                      </span>
                    </div>
                    <span className="font-display font-bold uppercase tracking-wide text-sm text-gray-200 group-hover:text-white">
                      {service.title}
                    </span>
                  </div>
                  <span className="material-icons-outlined opacity-0 group-transition-opacity text-primary -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:duration-700">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div id="image-container" className="lg:col-span-7">
            <div className="h-full min-h-[500px] rounded-2xl overflow-hidden relative shadow-2xl shadow-black border border-white/10 group">
              <img
                src={serviceImages[selectedService]}
                alt={SERVICES.find(s => s.id === selectedService)?.title || "Service Image"}
                className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
                  isImageChanging ? 'opacity-0' : 'opacity-80 group-hover:opacity-100'
                }`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-xl p-6 rounded-xl border border-white/10 max-w-sm">
                <div className="w-12 h-1 bg-primary mb-3"></div>
                <p className="text-gray-200 text-sm font-light italic leading-relaxed">
                  {serviceDescriptions[selectedService]}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="accordion-container" className="grid grid-cols-1 gap-6 mt-16">


          <div className="bg-surface-dark border border-white/5 rounded-lg overflow-hidden">
            <div 
              className="flex justify-between items-center p-5 cursor-pointer hover:bg-white/5 transition-colors group"
              onClick={() => setExpandedAccordion(expandedAccordion === 'faq1' ? null : 'faq1')}
            >
              <span className="text-xs uppercase font-bold tracking-wider text-gray-400 group-hover:text-white">
                Do you provide at-home consultations?
              </span>
              <span className={`material-icons-outlined text-sm text-primary transition-transform duration-700 ${
                expandedAccordion === 'faq1' ? 'rotate-180' : 'group-hover:rotate-180'
              }`}>
                expand_more
              </span>
            </div>
            <div className={`overflow-hidden transition-all duration-700 ${
              expandedAccordion === 'faq1' ? 'max-h-96' : 'max-h-0'
            }`}>
              <div className="px-5 py-5 text-gray-400 text-sm leading-relaxed transition-all duration-700">
                Yes, we offer comprehensive at-home consultations throughout the metropolitan area. Our certified acoustic specialists visit your space to take precise measurements and provide personalized recommendations for optimal sound quality.
              </div>
            </div>
          </div>



          <div className="bg-surface-dark border border-white/5 rounded-lg overflow-hidden">
            <div 
              className="flex justify-between items-center p-5 cursor-pointer hover:bg-white/5 transition-colors group"
              onClick={() => setExpandedAccordion(expandedAccordion === 'faq2' ? null : 'faq2')}
            >
              <span className="text-xs uppercase font-bold tracking-wider text-gray-400 group-hover:text-white">
                What budget ranges do you work with?
              </span>
              <span className={`material-icons-outlined text-sm text-primary transition-transform duration-700 ${
                expandedAccordion === 'faq2' ? 'rotate-180' : 'group-hover:rotate-180'
              }`}>
                expand_more
              </span>
            </div>
            <div className={`overflow-hidden transition-all duration-700 ${
              expandedAccordion === 'faq2' ? 'max-h-96' : 'max-h-0'
            }`}>
              <div className="px-5 py-5 text-gray-400 text-sm leading-relaxed transition-all duration-700">
                We work with budgets ranging from $5,000 for basic room optimization to $100,000+ for complete high-end installations. Every project receives the same level of expertise and attention to acoustic detail.
              </div>
            </div>
          </div>

          <div className="bg-surface-dark border border-white/5 rounded-lg overflow-hidden">
            <div 
              className="flex justify-between items-center p-5 cursor-pointer hover:bg-white/5 transition-colors group"
              onClick={() => setExpandedAccordion(expandedAccordion === 'faq3' ? null : 'faq3')}
            >
              <span className="text-xs uppercase font-bold tracking-wider text-gray-400 group-hover:text-white">
                How long does a typical consultation take?
              </span>
              <span className={`material-icons-outlined text-sm text-primary transition-transform duration-700 ${
                expandedAccordion === 'faq3' ? 'rotate-180' : 'group-hover:rotate-180'
              }`}>
                expand_more
              </span>
            </div>
            <div className={`overflow-hidden transition-all duration-700 ${
              expandedAccordion === 'faq3' ? 'max-h-96' : 'max-h-0'
            }`}>
              <div className="px-5 py-5 text-gray-400 text-sm leading-relaxed transition-all duration-700">
                A comprehensive acoustic consultation typically takes 2-3 hours for residential spaces. This includes room measurements, acoustic analysis, equipment assessment, and detailed recommendations. Larger commercial projects may require additional time for thorough evaluation.
              </div>
            </div>
          </div>

            <div className="bg-surface-dark border border-white/5 rounded-lg overflow-hidden">
            <div 
              className="flex justify-between items-center p-5 cursor-pointer hover:bg-white/5 transition-colors group"
              onClick={() => setExpandedAccordion(expandedAccordion === 'faq4' ? null : 'faq4')}
            >
              <span className="text-xs uppercase font-bold tracking-wider text-gray-400 group-hover:text-white">
                Do you offer ongoing support after installation?
              </span>
              <span className={`material-icons-outlined text-sm text-primary transition-transform duration-700 ${
                expandedAccordion === 'faq4' ? 'rotate-180' : 'group-hover:rotate-180'
              }`}>
                expand_more
              </span>
            </div>
            <div className={`overflow-hidden transition-all duration-700 ${
              expandedAccordion === 'faq4' ? 'max-h-96' : 'max-h-0'
            }`}>
              <div className="px-5 py-5 text-gray-400 text-sm leading-relaxed transition-all duration-700">
                Absolutely. We provide 90 days of complimentary fine-tuning and support after installation. Our team ensures your system performs optimally as it settles into your space. We also offer annual maintenance packages and system upgrades to keep your audio experience evolving with technology.
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
