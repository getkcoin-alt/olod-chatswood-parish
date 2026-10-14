import React from 'react';
import Link from 'next/link';
import { 
  Church, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ExternalLink, 
  Heart,
  Globe
} from 'lucide-react';
import { PARISH_INFO } from '@/data/parishData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-parish-midnight text-gray-300 pt-16 pb-12 border-t-4 border-parish-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Identity & Welcome */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-parish-navy border border-parish-gold flex items-center justify-center text-parish-gold">
                <Church className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-white tracking-wide">
                  Our Lady of Dolours
                </h2>
                <p className="text-xs text-parish-gold uppercase tracking-widest font-semibold">
                  Chatswood Parish
                </p>
              </div>
            </div>
            
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Bringing the light of Christ to the city. A welcoming Catholic community of faith, hospitality, prayer and compassion in Sydney&apos;s lower North Shore.
            </p>

            <div className="text-xs bg-parish-navy/70 p-3 rounded border border-parish-blue/30 text-gray-300">
              <span className="text-parish-gold font-semibold block mb-1">
                Catholic Diocese of Broken Bay
              </span>
              Under the pastoral leadership of Most Rev Anthony Randazzo DD JCL, Bishop of Broken Bay.
            </div>
          </div>

          {/* Col 2: Verified Location & Hours */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-parish-gold" />
              <span>Location & Contact</span>
            </h3>

            <div className="space-y-3 text-sm">
              <div>
                <strong className="text-white block font-medium">Church Address:</strong>
                <p className="text-gray-300">{PARISH_INFO.address}</p>
                <p className="text-xs text-gray-400 mt-0.5">(Opposite Chatswood Chase Shopping Centre)</p>
              </div>

              <div>
                <strong className="text-white block font-medium">Parish Office & Priory:</strong>
                <p className="text-gray-300 flex items-center gap-1.5 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-parish-gold" />
                  <a href={`tel:${PARISH_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-parish-gold underline">
                    {PARISH_INFO.phone}
                  </a>
                </p>
                <p className="text-gray-300 flex items-center gap-1.5 mt-1 text-xs">
                  <Mail className="w-3.5 h-3.5 text-parish-gold" />
                  <a href={`mailto:${PARISH_INFO.email}`} className="hover:text-parish-gold underline">
                    {PARISH_INFO.email}
                  </a>
                </p>
              </div>

              <div>
                <strong className="text-white block font-medium">Office Hours:</strong>
                <p className="text-xs text-gray-300 flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-parish-gold" />
                  <span>{PARISH_INFO.officeHours}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-4">
              Parish Pathways
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/plan-a-visit" className="hover:text-parish-gold transition flex items-center gap-1.5">
                  <span className="text-parish-gold font-bold">›</span>
                  <span>First Time Visitor Guide</span>
                </Link>
              </li>
              <li>
                <Link href="/mass-times" className="hover:text-parish-gold transition flex items-center gap-1.5">
                  <span className="text-parish-gold font-bold">›</span>
                  <span>Mass & Reconciliation Schedule</span>
                </Link>
              </li>
              <li>
                <Link href="/chinese-catholic-association" className="hover:text-parish-gold transition flex items-center gap-1.5 text-amber-200">
                  <Globe className="w-3.5 h-3.5 text-parish-gold" />
                  <span>Chinese Catholic Association (CCA)</span>
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="hover:text-parish-gold transition flex items-center gap-1.5">
                  <span className="text-parish-gold font-bold">›</span>
                  <span>Ministries & Volunteer Groups</span>
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-parish-gold transition flex items-center gap-1.5">
                  <span className="text-parish-gold font-bold">›</span>
                  <span>Upcoming Parish Events</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-parish-gold transition flex items-center gap-1.5">
                  <span className="text-parish-gold font-bold">›</span>
                  <span>Parish History & Clergy</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-parish-gold transition flex items-center gap-1.5">
                  <span className="text-parish-gold font-bold">›</span>
                  <span>Enquiries & Directions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Child Safeguarding & Care */}
          <div>
            <h3 className="font-serif text-base font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>A Safe & Caring Parish</span>
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed mb-3">
              Our Lady of Dolours Parish and the Diocese of Broken Bay are committed to the safety, wellbeing and dignity of all children, young people and vulnerable adults.
            </p>

            <div className="bg-parish-navy/90 p-3 rounded border border-gray-700 text-xs text-gray-300">
              <p className="font-semibold text-white mb-1">Diocesan Safeguarding Office:</p>
              <p>Ph: (02) 8379 1605</p>
              <p>Email: safeguarding@bbcatholic.org.au</p>
            </div>

            <div className="mt-4">
              <a 
                href="https://www.bbcatholic.org.au/chatswood" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-parish-gold hover:underline"
              >
                <span>Diocese of Broken Bay Parish Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Legal & Respect */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            &copy; {currentYear} Our Lady of Dolours Catholic Parish Chatswood. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span>Website modernised with care by Scriza Private Limited</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-white underline">
              Privacy & Safeguarding Notice
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
