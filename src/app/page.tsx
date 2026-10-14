'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Church, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Globe, 
  Compass, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Send,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import NextMassWidget from '@/components/NextMassWidget';
import { PARISH_INFO, MINISTRIES_DATA, EVENTS_DATA } from '@/data/parishData';

export default function HomePage() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterError('');
    setNewsletterSubmitted(true);
  };

  return (
    <div>
      {/* 1. HERO SECTION: Architectural dignity & sincere welcome */}
      <section className="relative bg-parish-midnight text-white overflow-hidden py-20 md:py-32 border-b-4 border-parish-gold">
        {/* Subtle patterned overlay with ecclesiastical tone */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#C8A962_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        {/* Soft radial glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-parish-blue/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-parish-burgundy/25 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            
            {/* Mission Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-parish-navy border border-parish-gold/50 text-parish-goldLight text-xs md:text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-parish-gold" />
              <span>Bringing the Light of Christ to the City</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              A Place to Belong. <br />
              <span className="text-parish-goldLight italic">A Community of Faith.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 font-light">
              Welcome to Our Lady of Dolours Catholic Parish in the vibrant heart of Chatswood. Whether you have worshipped here for decades or are stepping into a Catholic church for the very first time, there is a warm, peaceful place here for you.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/plan-a-visit"
                className="inline-flex items-center justify-center gap-2 bg-parish-gold hover:bg-amber-400 text-parish-midnight font-bold px-7 py-3.5 rounded-md text-base shadow-lg transition-transform hover:-translate-y-0.5 focus:ring-4 focus:ring-parish-gold/50"
              >
                <span>Plan Your First Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/ministries"
                className="inline-flex items-center justify-center gap-2 bg-parish-navy/80 hover:bg-parish-navy text-white border border-gray-600 hover:border-parish-gold font-medium px-7 py-3.5 rounded-md text-base transition-colors"
              >
                <span>Explore Our Community</span>
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-10 pt-6 border-t border-gray-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-gray-300">
              <div>
                <span className="text-parish-gold font-bold block text-base font-serif">Over 100 Years</span>
                <span>Of continuous Catholic presence</span>
              </div>
              <div>
                <span className="text-parish-gold font-bold block text-base font-serif">Multicultural</span>
                <span>English, Chinese, Filipino &amp; more</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-parish-gold font-bold block text-base font-serif">Daily Liturgies</span>
                <span>Daily Mass, Adoration &amp; Confession</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. REAL-TIME MASS TIMES & LITURGY HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <NextMassWidget />
      </section>

      {/* 3. NEW TO THE PARISH: The Strategic Welcoming Journey */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white to-parish-sand/60 rounded-2xl border border-parish-sand shadow-sm p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-parish-burgundy">
                Your First Step
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-parish-navy mt-2 mb-4">
                Stepping Through Our Doors for the First Time?
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                Visiting a new church can sometimes feel unfamiliar or overwhelming. We want you to feel at complete ease before you even arrive. No registration is required to join Sunday worship, there is no dress code, and you are welcome to simply sit, listen, pray and find quiet peace.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <h3 className="font-semibold text-parish-navy text-sm mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>What to Expect at Mass</span>
                  </h3>
                  <p className="text-xs text-gray-600">
                    A reverent 60-minute service of scripture readings, hymns, prayer and Communion.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <h3 className="font-semibold text-parish-navy text-sm mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Families &amp; Children</span>
                  </h3>
                  <p className="text-xs text-gray-600">
                    Children are a gift! Enjoy our Sunday 9:00 am Children’s Liturgy of the Word.
                  </p>
                </div>
              </div>

              <Link
                href="/plan-a-visit"
                className="inline-flex items-center gap-2 bg-parish-burgundy hover:bg-parish-crimson text-white font-semibold px-6 py-3 rounded-md text-sm transition-colors shadow-sm"
              >
                <span>Read the Complete First-Timer Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right card: Practical details snapshot */}
            <div className="lg:col-span-5 bg-parish-navy text-white p-8 rounded-xl shadow-md border-t-4 border-parish-gold">
              <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-parish-gold" />
                <span>Visit Essentials</span>
              </h3>

              <div className="space-y-4 text-sm text-gray-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-parish-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">94 Archer Street, Chatswood</strong>
                    <span className="text-xs text-gray-300">Directly opposite Chatswood Chase. 7-minute walk from Chatswood Train &amp; Metro Interchange.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-parish-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Recommended Sunday Liturgies</strong>
                    <span className="text-xs text-gray-300">9:00 am (Family Mass) • 10:30 am (Choral) • 5:30 pm (Youth)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-parish-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Accessibility &amp; Parking</strong>
                    <span className="text-xs text-gray-300">Level wheelchair access via side ramp. Free 3-hour parking available across the road at Chatswood Chase.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-700">
                <Link
                  href="/contact"
                  className="w-full text-center block bg-white/10 hover:bg-white/20 text-parish-goldLight font-medium py-2 rounded text-xs transition"
                >
                  Have a Question Before Attending? Ask Our Team
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CHINESE CATHOLIC ASSOCIATION (Priority Stakeholder Section) */}
      <section className="py-16 bg-gradient-to-r from-parish-navy via-parish-midnight to-parish-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parish-burgundy text-amber-200 text-xs font-semibold mb-4">
                <Globe className="w-3.5 h-3.5" />
                <span>Multicultural Life • 华人天主教联谊会</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
                Chinese Catholic Association (CCA)
              </h2>

              <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6">
                Our parish is blessed with a vibrant Chinese Catholic community. Coordinated in close harmony with parish leadership, the CCA brings together Cantonese and Mandarin-speaking parishioners for bilingual prayer, adult faith formation (RCIA), cultural celebrations, and mutual pastoral care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                  <h3 className="font-serif font-bold text-parish-gold text-sm mb-1">
                    粵語及普通話交流
                  </h3>
                  <p className="text-xs text-gray-300">
                    Bilingual scripture circles, prayers and cultural hospitality.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                  <h3 className="font-serif font-bold text-parish-gold text-sm mb-1">
                    華語成人慕道 (RCIA)
                  </h3>
                  <p className="text-xs text-gray-300">
                    Journeying together into the Catholic faith in your native tongue.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                  <h3 className="font-serif font-bold text-parish-gold text-sm mb-1">
                    新春感恩與節慶
                  </h3>
                  <p className="text-xs text-gray-300">
                    Lunar New Year Mass, Mid-Autumn feasts and family gatherings.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/chinese-catholic-association"
                  className="bg-parish-gold hover:bg-amber-400 text-parish-midnight font-bold px-6 py-3 rounded-md text-sm transition shadow"
                >
                  Visit the CCA Community Page
                </Link>
                <Link
                  href="/chinese-catholic-association#contact"
                  className="bg-white/10 hover:bg-white/20 text-white border border-gray-400 font-medium px-6 py-3 rounded-md text-sm transition"
                >
                  Contact the Coordinator
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-parish-burgundy/40 border border-amber-300/30 p-8 rounded-2xl text-center backdrop-blur-sm">
              <span className="text-5xl font-serif text-parish-gold block mb-3 font-bold">
                信愛共融
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                歡迎光臨 車士活聖母七苦堂
              </h3>
              <p className="text-xs text-amber-100 leading-relaxed mb-6">
                無論您是新抵雪梨還是探尋信仰，華人天主教聯誼會全體同道隨時為您和家人提供溫暖支持。
              </p>
              <div className="text-xs text-gray-200 border-t border-amber-200/20 pt-4">
                <span>Coordinator: Chinese Catholic Association</span>
                <span className="block mt-1 font-semibold text-amber-300">Email: cca@olodchatswood.org</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. MINISTRIES & COMMUNITY DISCOVERY */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-parish-burgundy">
              Get Involved
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-parish-navy mt-1">
              Find a Community for Your Stage of Life
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mt-2">
              From toddlers and youth to seniors, musicians, and compassionate outreach volunteers, Our Lady of Dolours thrives through over twenty active ministries.
            </p>
          </div>

          <Link
            href="/ministries"
            className="inline-flex items-center gap-1.5 font-semibold text-parish-blue hover:text-parish-navy text-sm shrink-0"
          >
            <span>View All Ministries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Ministry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MINISTRIES_DATA.slice(0, 6).map((ministry) => (
            <div
              key={ministry.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-parish-gold transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2.5 py-1 rounded text-xs font-medium bg-parish-sand text-parish-charcoal mb-3">
                  {ministry.categoryLabel}
                </span>
                <h3 className="font-serif text-xl font-bold text-parish-navy mb-2">
                  {ministry.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {ministry.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>{ministry.meetingTime}</span>
                <Link
                  href={`/ministries#${ministry.id}`}
                  className="font-semibold text-parish-burgundy hover:underline"
                >
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. UPCOMING EVENTS HIGHLIGHT */}
      <section className="py-16 bg-parish-sand/40 border-y border-parish-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-parish-burgundy">
                Parish Life
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-parish-navy mt-1">
                Upcoming Gatherings &amp; Events
              </h2>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 font-semibold text-parish-blue hover:text-parish-navy text-sm"
            >
              <span>View Full Parish Calendar</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS_DATA.slice(0, 3).map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow transition-shadow flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="px-2 py-0.5 rounded bg-parish-ivory border border-gray-200 font-medium text-parish-burgundy">
                      {event.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-parish-gold" />
                      <span>{event.date}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-parish-navy mb-2">
                    {event.title}
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="px-6 py-3 bg-parish-ivory border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{event.time}</span>
                  </span>
                  <Link
                    href="/events"
                    className="font-semibold text-parish-blue hover:underline"
                  >
                    Event Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMMUNITY SERVICE & PASTORAL CARE: Vinnies & Care for the Sick */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-parish-navy text-white rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-parish-gold">
              Faith in Action
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-4 text-white">
              Loving, Caring and Serving the City of Chatswood
            </h2>
            <p className="text-gray-200 leading-relaxed text-base sm:text-lg mb-8">
              Inspired by the Gospel and the patronal tenderness of Our Lady of Dolours, our parish actively supports families facing crisis, homebound seniors, and local individuals in need through the St Vincent de Paul Society and our pastoral visitation ministries.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/ministries#vinnies-st-vincent-de-paul"
                className="bg-parish-gold hover:bg-amber-400 text-parish-midnight font-bold px-6 py-3 rounded-md text-sm transition"
              >
                Support or Join Vinnies
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-gray-500 font-medium px-6 py-3 rounded-md text-sm transition"
              >
                Request Pastoral Care
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER SUBSCRIPTION & APPROVED COMMUNICATIONS */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-parish-burgundy">
            Stay in Touch
          </span>
          <h2 className="font-serif text-3xl font-bold text-parish-navy mt-1 mb-3">
            Subscribe to the Weekly Parish Bulletin
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto mb-8">
            Receive Father David&apos;s weekly reflection, Mass intentions, upcoming readings, and parish community announcements directly in your inbox every Friday.
          </p>

          {newsletterSubmitted ? (
            <div className="max-w-md mx-auto p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Thank you! You have been added to our weekly bulletin preview.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-parish-gold"
              />
              <button
                type="submit"
                className="bg-parish-navy hover:bg-parish-midnight text-white font-semibold px-6 py-3 rounded-md text-sm transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          {newsletterError && (
            <p className="text-xs text-red-600 mt-2">{newsletterError}</p>
          )}

          <p className="text-xs text-gray-400 mt-3">
            We respect your privacy. Unsubscribe at any time. Demonstration mode: connects to parish provider upon official launch.
          </p>
        </div>
      </section>
    </div>
  );
}
