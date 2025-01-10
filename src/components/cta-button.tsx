'use client';

import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { WaitlistModal } from './WaitlistModal';

interface CTAButtonProps {
  size?: 'normal' | 'large';
}

export function CTAButton({ size = 'normal' }: CTAButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buttonClass = size === 'large' 
    ? "w-[180px] h-[50px] text-base" 
    : "w-[142px] h-[42px] text-sm";

  return (
    <>
      <div className={`relative group ${buttonClass} bg-gradient-to-b from-[#333] to-[#131313] 
           flex items-center justify-center overflow-hidden rounded-3xl
           transition-all duration-200 hover:scale-105 hover:shadow-[0_0_100px_16px_#7b3bfc70]
           active:scale-100`}>
        {/* Animated gradient border */}
        <div className="absolute z-10 h-[330%] w-[100%] left-[-0%] top-[-100%] animate-border-spin"
             style={{
               background: `conic-gradient(
                 rgba(255, 223, 195) 15deg,
                 rgba(212, 149, 255) 30deg,
                 rgba(73, 234, 255) 45deg,
                 transparent 60deg
               )`
             }}
        />
        <div className="absolute z-10 h-[330%] w-[100%] left-[-0%] top-[-100%] animate-border-spin"
             style={{
               background: `conic-gradient(
                 transparent 180deg,
                 rgba(255, 223, 195) 195deg,
                 rgba(212, 149, 255) 210deg,
                 rgba(73, 234, 255) 225deg,
                 transparent 250deg
               )`
             }}
        />

        {/* Button content */}
        <button
          onClick={() => setIsModalOpen(true)}
          className={`w-[calc(100%-2px)] h-[calc(100%-2px)] absolute z-30 
            top-[1px] left-[1px] bg-black flex items-center justify-center 
            gap-3 rounded-3xl focus:outline-none group-hover:bg-black/90
            transition-colors duration-200`}
        >
          Join Waitlist
          <FiArrowRight size={size === 'large' ? 20 : 18} 
            className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      </div>

      <WaitlistModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
