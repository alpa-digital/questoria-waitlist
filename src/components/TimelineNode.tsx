import React from 'react';

interface TimelineNodeProps {
  name: string;
  description: string;
  features: string[];
  label?: string;
}

export const TimelineNode: React.FC<TimelineNodeProps> = ({ name, description, features, label }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="w-[154px] py-2 border border-[#333] hover:border-purple-500/50 transition-all duration-200 rounded-3xl flex items-center justify-center text-[13px]">
        {name}
      </div>
      <div className="absolute left-[170px] top-0 w-64 bg-black/90 border border-purple-500/20 
           rounded-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
           transition-all duration-200 z-20 backdrop-blur-sm">
        <p className="text-sm font-bold text-purple-400 mb-2">{description}</p>
        <div className="space-y-1">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-purple-500 text-xs">•</span>
              <span className="text-xs text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      {label && <span className="text-gray-500 text-xs block mt-2 text-center">{label}</span>}
    </div>
  );
};