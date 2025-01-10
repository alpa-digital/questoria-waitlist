'use client';

import React from 'react';

interface TimelineNodeProps {
  name: string;
  description: string;
  features: string[];
  label?: string;
}

export const TimelineNode: React.FC<TimelineNodeProps> = ({ name, description, features, label }) => {
  return (
    <div className="relative group">
      {/* Card principal */}
      <div className="w-[154px] py-2 border border-[#333] hover:border-purple-500/50 
           transition-all duration-200 rounded-3xl flex items-center justify-center text-[13px]">
        {name}
      </div>

      {/* Tooltip con detalles */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 
           bg-black/90 border border-purple-500/20 rounded-lg p-4
           opacity-0 invisible group-hover:opacity-100 group-hover:visible 
           transition-all duration-200 z-20 backdrop-blur-sm">
        {/* Contenido del tooltip */}
        <p className="text-sm font-bold text-purple-400 mb-3">{description}</p>
        <div className="space-y-2">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-purple-500 text-xs">•</span>
              <span className="text-xs text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        {/* Flecha indicadora */}
        <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 rotate-45 
             w-3 h-3 bg-black/90 border-r border-b border-purple-500/20"></div>
      </div>

      {/* Etiqueta inferior */}
      {label && (
        <span className="text-gray-500 text-xs block mt-2 text-center">
          {label}
        </span>
      )}
    </div>
  );
};

export default TimelineNode;