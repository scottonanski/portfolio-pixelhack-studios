import React from 'react';
import { MARQUEE_ITEMS } from '../constants';

const Marquee: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto mt-32 border-t border-b border-white/10 py-6 bg-surface-dark/30 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center justify-between text-xs font-bold tracking-[0.2em] text-text-muted-dark uppercase overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex gap-12 w-full justify-center min-w-max">
          {/* Duplicate items to create seamless loop */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
            <React.Fragment key={index}>
              <span className={index % 2 === 0 ? "text-gray-500" : "text-white"}>
                {item}
              </span>
              <span className="text-primary">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;