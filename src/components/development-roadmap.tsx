'use client';

import React from 'react';
import { FaUser, FaDiceD20, FaCode, FaGamepad, FaMusic, FaMobile, FaSwords, FaUsers, FaGlobe, FaTools } from 'react-icons/fa';

const TimelineColumn = ({ title, phases, currentPhase = '' }) => {
  return (
    <div className="flex-1">
      <div className="relative bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-gray-800">
        <h3 className="text-xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h3>
        
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative group">
              {/* Línea conectora */}
              {index !== phases.length - 1 && (
                <div className="absolute left-6 top-12 h-[calc(100%+2rem)] w-0.5 bg-gradient-to-b from-purple-500/20 to-transparent" />
              )}
              
              {/* Contenedor del item */}
              <div className="flex items-center gap-4 relative">
                {/* Círculo con icono */}
                <div className={`relative z-10 w-12 h-12 rounded-full 
                  transition-all duration-300
                  border-2 flex items-center justify-center
                  ${phase.name === currentPhase ? 'border-purple-500 bg-purple-500/20' : 'border-gray-700 group-hover:border-purple-500/50'}
                  bg-black`}>
                  {phase.icon && (
                    <phase.icon className={`w-5 h-5 
                      ${phase.name === currentPhase ? 'text-purple-400' : 'text-gray-500 group-hover:text-purple-400'}
                      transition-colors duration-300`} />
                  )}
                </div>

                {/* Contenido */}
                <div className="flex-1">
                  <h4 className={`font-bold transition-colors duration-300 
                    ${phase.name === currentPhase ? 'text-purple-400' : 'text-white group-hover:text-purple-400'}`}>
                    {phase.name}
                    {phase.isMVP && (
                      <span className="ml-2 px-2 py-0.5 text-xs bg-purple-500/20 rounded-full text-purple-400">
                        MVP
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">
                    {phase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export function DevelopmentRoadmap() {
  const mvpPhases = [
    {
      name: 'Character Creation',
      description: 'Robust character creation and progression system',
      icon: FaUser
    },
    {
      name: 'Campaign Generation',
      description: 'AI-powered dynamic storyline generation',
      icon: FaDiceD20
    },
    {
      name: 'Game Logic',
      description: 'Core mechanics and gameplay systems',
      icon: FaCode
    },
    {
      name: 'Initial Setting',
      description: 'First playable world and mechanics',
      icon: FaGamepad
    },
    {
      name: 'Immersion System',
      description: 'Enhanced narrative experience',
      icon: FaMusic
    },
    {
      name: 'User Experience',
      description: 'Mobile-optimized interface',
      icon: FaMobile,
      isMVP: true
    }
  ];

  const futurePhases = [
    {
      name: 'Competitive Play',
      description: 'PvP adventures and challenges',
      icon: FaSwords
    },
    {
      name: 'Cooperative Play',
      description: 'Group campaigns and shared stories',
      icon: FaUsers
    },
    {
      name: 'New Settings',
      description: 'Additional worlds and game systems',
      icon: FaGlobe
    },
    {
      name: 'Community Tools',
      description: 'Create and share custom content',
      icon: FaTools
    }
  ];

  const currentPhase = 'Game Logic';

  return (
    <div className="w-full px-4 py-12">
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        <TimelineColumn 
          title="Path to MVP" 
          phases={mvpPhases}
          currentPhase={currentPhase}
        />
        <TimelineColumn 
          title="Post-MVP Evolution" 
          phases={futurePhases}
        />
      </div>
    </div>
  );
}

export default DevelopmentRoadmap;