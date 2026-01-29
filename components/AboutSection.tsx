import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-3 block">
              About Us
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase text-white">
              Crafting Fidelity
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-muted-dark hover:text-white transition-colors mb-2 group"
          >
            Read Story
            <span className="material-icons-outlined text-sm text-primary group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Engineer Image Card */}
          <div className="relative rounded-3xl overflow-hidden h-[600px] shadow-2xl shadow-black/80 border border-white/5 group">
            <img
              src="imgs/master-engineer.jpg"
              alt="Sound Engineer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 w-full p-10 flex items-end justify-between">
              <div>
                <p className="text-white font-display font-bold text-2xl mb-1">
                  Master Engineer
                </p>
                <p className="text-primary text-sm tracking-wider uppercase">
                  Sebastian V.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                <span className="material-icons-outlined text-primary text-lg group-hover:text-black">
                  mic
                </span>
              </div>
            </div>
          </div>

          {/* Intro Text Card */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="bg-surface-dark p-10 rounded-2xl border border-white/5 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="material-icons-outlined text-9xl text-white">
                  graphic_eq
                </span>
              </div>
              <h3 className="flex items-center gap-3 font-display font-bold text-xl uppercase mb-6 text-white">
                <span className="material-icons-outlined text-lg text-primary">
                  auto_awesome
                </span>
                Introduction
              </h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8 text-lg">
                Sound is not just empty space filled with noise. Our journey began with a simple idea: to reconnect the listener with the artist. Whether it's a private listening room or a professional studio, we engineer acoustics to ensure absolute clarity. We combine vintage aesthetics with modern acoustic science.
              </p>
              <div className="space-y-8 mt-8 pt-8 border-t border-white/5">
                <h4 className="font-display font-bold text-sm text-primary uppercase tracking-widest mb-6">
                  Contact Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider block mb-2">
                      Email
                    </span>
                    <a
                      href="mailto:hello@audiophile.com"
                      className="text-white hover:text-primary transition-colors text-lg"
                    >
                      hello@audiophile.com
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider block mb-2">
                      On Socket
                    </span>
                    <p className="text-white text-lg">+1 (500) 000-AUDIO</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <a
                    href="#"
                    className="bg-primary text-black text-xs font-bold uppercase px-6 py-3 rounded-lg hover:bg-white transition-colors shadow-lg shadow-primary/20"
                  >
                    Consultation
                  </a>
                  <a
                    href="#"
                    className="text-xs font-bold uppercase px-6 py-3 rounded-lg border border-white/20 text-white hover:border-primary hover:text-primary transition-colors bg-white/5"
                  >
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
