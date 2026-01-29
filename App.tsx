import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import InstallationsSection from './components/InstallationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <InstallationsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;