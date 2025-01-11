'use client';

import { useState } from 'react';
import { FiX, FiArrowRight } from 'react-icons/fi';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setTimeout(() => {
          setEmail('');
          setStatus('idle');
          onClose();
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4">
      <div className="relative bg-[#111] border border-gray-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
        {/* Botón de cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <FiX size={24} />
        </button>

        {/* Contenido del modal */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h3>
          <p className="text-gray-400">Be the first to know when diceverse launches</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-gray-800 
                       text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2
                     bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium
                     hover:from-purple-500 hover:to-blue-500 transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {status === 'loading' ? 'Joining...' :
              status === 'success' ? 'Welcome aboard! 🎉' :
              status === 'error' ? 'Try Again' :
              'Join Waitlist'}
            {status === 'idle' && <FiArrowRight />}
          </button>

          {status === 'error' && (
            <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
