import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#020202] text-white pt-32 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24">
          <div className="mb-16 lg:mb-0">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-6 block">
              Ready to listen?
            </span>
            <h2 className="font-display font-bold text-6xl md:text-7xl uppercase leading-none mb-10 text-white">
              Start a <br /> Project
            </h2>
            <a
              href="#"
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary hover:bg-white transition-all text-black duration-300 shadow-[0_0_25px_rgba(212,175,55,0.4)] group"
            >
              <span className="material-icons-outlined text-3xl -rotate-45 group-hover:rotate-0 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
            <div>
              <h4 className="font-bold uppercase mb-6 text-sm text-white tracking-wider">
                Menu
              </h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#installations" className="hover:text-primary transition-colors">Installations</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase mb-6 text-sm text-white tracking-wider">
                Services
              </h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-primary transition-colors">Acoustic Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">System Calibration</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Home Theater</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Vintage Repair</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Consultation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase mb-6 text-sm text-white tracking-wider">
                Socials
              </h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Unsplash</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase mb-6 text-sm text-white tracking-wider">
                Legal
              </h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Warranty</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
          <p>© 2023 Audiophile Inc.</p>
          <p>Site by PixelHack Studios</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <h1 className="font-display font-bold text-[18vw] leading-none text-center text-white whitespace-nowrap -mb-10 lg:-mb-16 tracking-tighter">
          AUDIOPHILEZ
        </h1>
      </div>
    </footer>
  );
};

export default Footer;