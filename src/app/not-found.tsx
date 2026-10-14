import React from 'react';
import Link from 'next/link';
import { Church, ArrowLeft, Clock } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-parish-ivory px-4 py-16">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-parish-sand text-center shadow-sm">
        <div className="w-16 h-16 mx-auto rounded-full bg-parish-sand text-parish-burgundy flex items-center justify-center mb-4">
          <Church className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-parish-burgundy">
          Page Not Found
        </span>
        <h1 className="font-serif text-3xl font-bold text-parish-navy mt-1 mb-3">
          Peace Be With You
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
          The page you are looking for may have been moved or updated. Let us help you find your way back.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-parish-navy text-white text-xs font-semibold py-2.5 rounded shadow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/mass-times"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-parish-sand text-parish-navy text-xs font-semibold py-2.5 rounded border border-gray-200"
          >
            <Clock className="w-4 h-4 text-parish-burgundy" />
            <span>Mass Times</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
