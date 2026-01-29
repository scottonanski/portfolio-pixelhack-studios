import React, { useState } from 'react';
import { MENU_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 backdrop-blur-md bg-black/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 flex gap-3">
            <span><img src="imgs/audiophilez.svg" alt="Audiophilez" className="inline w-8 h-8"/></span>
            <span className="font-display font-bold text-2xl tracking-widest text-primary uppercase drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
              Audiophilez
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {MENU_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium tracking-wide uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-primary hover:bg-white hover:text-black text-background-dark font-display font-bold px-6 py-2 rounded-full transition-all uppercase text-sm tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              Contact Us
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none p-2"
            >
              <span className="material-icons-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {MENU_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-primary block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide font-display mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;