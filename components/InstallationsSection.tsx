import React from 'react';
import { PROJECTS } from '../constants';

const InstallationsSection: React.FC = () => {
  return (
    <section id="installations" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-3 block">
              Portfolio
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase text-white">
              Curated Installations
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-primary pb-1"
            >
              View All Works
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-4/3 border border-white/10 shadow-lg shadow-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <span className="bg-primary text-black px-6 py-3 rounded-full text-xs font-bold uppercase shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    View Project
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4 group-hover:border-primary/50 transition-colors">
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {project.location}
                  </p>
                </div>
                <span className="text-primary/50 text-2xl font-display font-bold uppercase group-hover:translate-x-1 transition-transform group-hover:text-primary">
                  {project.number}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationsSection;