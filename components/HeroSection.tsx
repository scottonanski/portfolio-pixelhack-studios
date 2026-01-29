import React from "react";
import Marquee from "./Marquee";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-12 lg:pt-40 lg:pb-0 overflow-hidden bg-[#050505]"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">

{/* Ripple CTA */}
<div className="absolute -top-18 -right-10 sm:right-6 md:right-12 z-100 pointer-events-none">
  <div className="relative w-64 h-64 grid place-items-center pointer-events-auto group cursor-pointer">

    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 opacity-70" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 opacity-50" />
    </div>

    <div className="relative z-10 text-center px-3 py-2">
      <span className="font-display font-bold uppercase text-sm tracking-widest leading-tight text-white group-hover:text-primary transition-colors">
        Let&apos;s Work <br /> Together
      </span>
    </div>

  </div>
</div>

        {/* Hero Header Text */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20">
          <h1 className="font-display font-bold text-7xl sm:text-8xl md:text-8xl leading-none uppercase tracking-tighter">
            <span className="text-primary block md:inline">Pure</span>{" "}
            <span className="block md:inline">Audio</span>
          </h1>
        </div>




        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[700px]">
          {/* Col 1: Stacked */}
          <div className="flex flex-col gap-4 h-full">
            <div className="flex-1 relative rounded-2xl overflow-hidden border border-white/10 group min-h-[250px]">
              <img
                src="imgs/hero-turntable.jpg"
                alt="Vintage Turntable"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[120%] opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 border border-white/10 px-2 py-1 rounded-full backdrop-blur-sm">
                  Analog Source
                </span>
              </div>
            </div>
            <div className="flex-1 relative rounded-2xl overflow-hidden border border-white/10 group min-h-[250px]">
              <img
                src="imgs/audio-woman.jpg"
                alt="Listening Experience"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[120%] opacity-100 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 border border-white/10 px-2 py-1 rounded-full backdrop-blur-sm">
                  Immersion
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Tall */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 h-[500px] lg:h-full group">
            <img
              src="imgs/hero-woofer.jpg"
              alt="Speaker Detail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[120%] opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/90"></div>
            <div className="absolute bottom-8 left-6">
              <h3 className="font-display text-3xl font-bold uppercase text-white mb-2">
                High Fidelity
              </h3>
              <p className="text-sm text-gray-400 max-w-[200px]">
                Precision engineering for the ultimate soundscapes.
              </p>
            </div>
          </div>

          {/* Col 3: Stacked */}
          <div className="flex flex-col gap-4 h-full">
            <div className="flex-1 relative rounded-2xl overflow-hidden border border-white/10 group min-h-[250px]">
              <img
                src="imgs/hero-tubes.jpg"
                alt="Vacuum Tubes"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[120%] opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 right-4">
                <span className="material-icons-outlined text-primary/80">
                  bolt
                </span>
              </div>
            </div>
            <div className="flex-1 relative rounded-2xl overflow-hidden border border-white/10 group min-h-[250px]">
              <img
                src="imgs/hero-mixer.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[120%] opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-4 right-4">
                <span className="material-icons-outlined text-white/50">
                  album
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Tall */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 h-[500px] lg:h-full group">
            <img
              src="imgs/audio-man.jpg"
              alt="Sound Engineer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[120%] opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute top-8 right-6 text-right">
              <span className="block text-primary font-bold text-lg">04</span>
              <span className="block text-xs uppercase tracking-widest text-gray-500">
                Indulge
              </span>
            </div>
            <div className="absolute bottom-8 right-6">
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all">
                <span className="material-icons-outlined text-lg">
                  arrow_downward
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
};

export default HeroSection;
