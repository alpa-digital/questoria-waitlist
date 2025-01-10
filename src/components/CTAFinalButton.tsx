'use client';

import { useRouter } from 'next/navigation';
import { FiArrowRight } from 'react-icons/fi';

export function CTAFinalButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push('https://contate.me/questoria')}
      className="px-12 py-4 bg-black/80 hover:bg-black/90 border border-gray-800 
                rounded-full text-white font-medium flex items-center gap-2
                transition-all duration-300 backdrop-blur-sm"
    >
      Join Waitlist
      <FiArrowRight className="group-hover:translate-x-0.5 transition-transform duration-200" />
    </button>
  );
}