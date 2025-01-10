import React from 'react';

interface TimelineProps {
  items: { title: string; description: string }[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute inset-0 border-l-4 border-dashed border-gray-300"></div>
      <ul className="space-y-10">
        {items.map((item, index) => (
          <li key={index} className="relative flex items-start">
            <div className="absolute left-[-20px] top-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg"></div>
            <div className="ml-10">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
            <div className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};
