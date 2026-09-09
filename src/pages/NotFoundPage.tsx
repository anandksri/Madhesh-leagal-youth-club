import React from 'react';
import { PageId } from '../types';
import { ArrowLeft, Scale } from 'lucide-react';

interface NotFoundPageProps {
  onNavigateHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#F6F8FB] px-4 py-20">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A] text-[#D4A72C] flex items-center justify-center mx-auto mb-6 shadow-xs">
          <Scale className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#174A7E]">
          Error 404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] mt-1 mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed mb-8">
          The civic resource or page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-[#0B1F3A] hover:bg-[#174A7E] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
};
