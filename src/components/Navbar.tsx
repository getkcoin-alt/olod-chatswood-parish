'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Church, 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Clock, 
  Globe, 
  Heart,
  ChevronRight 
} from 'lucide-react';
import { PARISH_INFO } from '@/data/parishData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/plan-a-visit', label: 'Plan a Visit' },
    { href: '/mass-times', label: 'Mass & Sacraments' },
    { href: '/ministries', label: 'Ministries' },
    { href: '/chinese-catholic-association', label: 'Chinese Community (CCA)' },
    { href: '/events', label: 'Events' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Essential Utility Bar */}
      <div className="bg-parish-midnight text-parish-goldLight/90 border-b border-parish-navy px-4 py-2 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-parish-gold" />
              <span>94 Archer St, Chatswood NSW 2067</span>
            </span>
            <span className="hidden md:inline text-parish-muted">|</span>
            <a 
              href={`tel:${PARISH_INFO.phone.replace(/[^0-9]/g, '')}`} 
              className="inline-flex items-center gap-1.5 hover:text-white transition"
              aria-label="Call Parish Office"
            >
              <Phone className="w-3.5 h-3.5 text-parish-gold" />
              <span>{PARISH_INFO.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/mass-times" 
              className="inline-flex items-center gap-1.5 text-parish-gold hover:text-white transition font-medium"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Next Mass Schedule</span>
            </Link>
            <span className="text-parish-muted">|</span>
            <Link 
              href="/chinese-catholic-association" 
              className="inline-flex items-center gap-1 hover:text-white transition text-xs bg-parish-burgundy/60 hover:bg-parish-burgundy px-2 py-0.5 rounded text-amber-100"
            >
              <Globe className="w-3 h-3" />
              <span>中文 (CCA)</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className="bg-parish-navy text-white px-4 py-3.5 md:py-4 transition-all"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Parish Title */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-parish-gold rounded p-1"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-parish-midnight border-2 border-parish-gold flex items-center justify-center text-parish-gold shadow-sm group-hover:bg-parish-burgundy transition-colors duration-300">
              <Church className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <span className="block font-serif text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-parish-gold transition-colors">
                Our Lady of Dolours
              </span>
              <span className="block text-xs uppercase tracking-widest text-parish-goldLight font-semibold">
                Chatswood Catholic Parish
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors duration-150 ${
                  isActive(link.href)
                    ? 'bg-parish-burgundy text-white shadow-sm font-semibold'
                    : 'text-gray-200 hover:text-parish-gold hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <Link
              href="/plan-a-visit"
              className="ml-3 inline-flex items-center gap-1.5 bg-parish-gold hover:bg-amber-400 text-parish-midnight font-bold px-4 py-2 rounded-md text-sm transition-transform hover:scale-[1.02] shadow-sm"
            >
              <span>First Visit?</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/plan-a-visit"
              className="bg-parish-gold text-parish-midnight text-xs font-bold px-3 py-1.5 rounded"
            >
              Plan Visit
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-parish-gold"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-parish-midnight/60 pb-2 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-base font-medium flex items-center justify-between ${
                    isActive(link.href)
                      ? 'bg-parish-burgundy text-white font-semibold'
                      : 'text-gray-200 hover:bg-white/10 hover:text-parish-gold'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block bg-parish-gold hover:bg-amber-400 text-parish-midnight font-bold py-2.5 rounded-md"
                >
                  Contact Parish Office
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
