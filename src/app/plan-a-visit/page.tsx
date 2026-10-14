'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Clock, 
  MapPin, 
  Car, 
  Train, 
  HelpCircle, 
  Send, 
  CheckCircle, 
  Sparkles, 
  Users, 
  ShieldCheck,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { PARISH_INFO } from '@/data/parishData';

export default function PlanAVisitPage() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formQuestion, setFormQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Do I need to be Catholic or register in advance to attend Mass?',
      a: 'No. You are completely welcome to attend any of our public Sunday or weekday Masses without registering or signing up in advance. Simply walk in, take any seat you feel comfortable in, and experience the liturgy with us.',
    },
    {
      q: 'How long does a Catholic Mass last?',
      a: 'A typical Sunday Mass lasts approximately 55 to 60 minutes. Weekday Masses are slightly shorter, usually around 30 to 35 minutes.',
    },
    {
      q: 'What should I wear?',
      a: 'Please come as you are. Most parishioners dress in neat, comfortable casual or smart-casual clothing. There is no strict dress code—what matters most is your presence and respectful participation.',
    },
    {
      q: 'What happens with young children if they are fussy or noisy?',
      a: 'Children are warmly celebrated here! We understand that little ones can be vocal or wriggly. You do not need to feel embarrassed or leave. At our Sunday 9:00 am Family Mass, we also run the Children’s Liturgy of the Word during school terms, where children gather with trained parish catechists.',
    },
    {
      q: 'Can I receive Holy Communion if I am not Catholic?',
      a: 'According to Catholic tradition, Holy Communion (the consecrated bread and wine) is reserved for Catholics in communion with the Church. However, everyone is warmly invited to come forward during Communion with their arms crossed gently over their chest to receive a personal priestly blessing, or you may comfortably remain seated in prayer.',
    },
    {
      q: 'Where do I park my car?',
      a: 'Our Lady of Dolours is located directly across the street from Chatswood Chase Shopping Centre (entry via Archer St or Victoria Ave), which offers 3 hours of free customer parking. Street parking is also available in nearby surrounding residential streets.',
    },
  ];

  return (
    <div className="bg-parish-ivory py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-parish-sand text-parish-burgundy text-xs md:text-sm font-semibold mb-4">
            <Heart className="w-4 h-4 text-parish-burgundy" />
            <span>You Are Warmly Welcome</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-parish-navy mb-6">
            Plan Your First Visit
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Whether you are exploring Catholic spirituality, moving into the Chatswood area, or returning to church after some time away, we would love to welcome you. Here is everything you need to know for a peaceful, stress-free visit.
          </p>
        </div>

        {/* 4 Pillars of Reassurance */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl border border-parish-sand shadow-sm text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-parish-sand flex items-center justify-center text-parish-burgundy mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-parish-navy text-base mb-2">Around 60 Minutes</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Sunday Mass is reverent, unhurried, and approximately one hour in duration.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-parish-sand shadow-sm text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-parish-sand flex items-center justify-center text-parish-burgundy mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-parish-navy text-base mb-2">Come As You Are</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Neat and comfortable casual attire is welcomed. You will never feel judged.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-parish-sand shadow-sm text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-parish-sand flex items-center justify-center text-parish-burgundy mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-parish-navy text-base mb-2">Family Friendly</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Children are a joy to our community. Sunday 9:00 am Family Mass is specially tailored.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-parish-sand shadow-sm text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-parish-sand flex items-center justify-center text-parish-burgundy mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-parish-navy text-base mb-2">No Sign-Up Needed</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Public Masses are completely open. No registration or ticket is ever required.
            </p>
          </div>
        </div>

        {/* What Happens at a Catholic Mass - Step by step */}
        <section className="bg-white rounded-2xl border border-parish-sand p-8 sm:p-12 mb-16 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-parish-burgundy">
              Step-by-Step Walkthrough
            </span>
            <h2 className="font-serif text-3xl font-bold text-parish-navy mt-1">
              What to Expect During the Liturgy
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              If you have never attended a Catholic Mass, here is the simple flow of the service. You are welcome to follow along or just observe peacefully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-2 border-parish-gold pl-5">
              <span className="text-xs font-bold text-parish-burgundy uppercase">Part 1</span>
              <h3 className="font-serif font-bold text-lg text-parish-navy mt-1 mb-2">The Introductory Rites</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The community stands as the priest and ministers process in with an opening hymn. We begin in the name of the Father, Son and Holy Spirit, followed by a moment of quiet humility seeking God&apos;s mercy and peace.
              </p>
            </div>

            <div className="border-l-2 border-parish-gold pl-5">
              <span className="text-xs font-bold text-parish-burgundy uppercase">Part 2</span>
              <h3 className="font-serif font-bold text-lg text-parish-navy mt-1 mb-2">Liturgy of the Word</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We sit to listen to scripture readings from the Old and New Testaments, followed by a psalm. The priest reads the Gospel and gives a practical, encouraging 10-minute homily connecting God&apos;s word to modern life.
              </p>
            </div>

            <div className="border-l-2 border-parish-gold pl-5">
              <span className="text-xs font-bold text-parish-burgundy uppercase">Part 3</span>
              <h3 className="font-serif font-bold text-lg text-parish-navy mt-1 mb-2">Liturgy of the Eucharist</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The central heart of Catholic worship: gifts of bread and wine are brought to the altar. The priest prays the Eucharistic prayer of thanksgiving. Parishioners then proceed forward for Communion or a blessing.
              </p>
            </div>

            <div className="border-l-2 border-parish-gold pl-5">
              <span className="text-xs font-bold text-parish-burgundy uppercase">Part 4</span>
              <h3 className="font-serif font-bold text-lg text-parish-navy mt-1 mb-2">Concluding Blessing &amp; Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We receive a final blessing and are sent forth to &ldquo;go in peace to love and serve the Lord&rdquo; across our families, workplaces and the Chatswood city community.
              </p>
            </div>
          </div>
        </section>

        {/* Getting Here: Location, Transit & Accessibility */}
        <section className="bg-parish-navy text-white rounded-2xl p-8 sm:p-12 mb-16 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-parish-gold">
                Getting to Chatswood
              </span>
              <h2 className="font-serif text-3xl font-bold mt-1 mb-4 text-white">
                Location, Transit &amp; Parking
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Our Lady of Dolours is conveniently situated in central Chatswood, surrounded by public transit and ample shopping centre parking.
              </p>

              <div className="space-y-4 text-sm text-gray-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-parish-midnight text-parish-gold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">94 Archer Street, Chatswood NSW 2067</strong>
                    <span className="text-xs text-gray-400">Located directly opposite Chatswood Chase on Archer Street.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-parish-midnight text-parish-gold shrink-0">
                    <Train className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Trains &amp; Metro (Chatswood Interchange)</strong>
                    <span className="text-xs text-gray-400">An easy 7-minute level walk (approx. 500 metres) along Victoria Avenue or Orchard Road.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-parish-midnight text-parish-gold shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Parking</strong>
                    <span className="text-xs text-gray-400">Chatswood Chase parking directly across the road (up to 3 hours free). Limited on-street parking also available.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://maps.google.com/?q=94+Archer+Street+Chatswood+NSW+2067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-parish-gold hover:bg-amber-400 text-parish-midnight font-bold px-6 py-3 rounded-md text-sm transition shadow"
                >
                  Open in Google Maps
                </a>
                <Link
                  href="/mass-times"
                  className="bg-white/10 hover:bg-white/20 text-white border border-gray-500 font-medium px-6 py-3 rounded-md text-sm transition"
                >
                  View Mass Times
                </Link>
              </div>
            </div>

            {/* Embedded Visual Map Preview */}
            <div className="lg:col-span-5 bg-parish-midnight border border-gray-700 p-6 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-parish-navy border border-parish-gold flex items-center justify-center text-parish-gold mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Parish Precinct Map</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                The church entrance faces Archer Street. Level wheelchair ramp access is located on the southern flank of the building.
              </p>
              <div className="p-3 bg-parish-navy/90 rounded text-xs text-parish-goldLight font-mono">
                Lat: -33.7963° S | Long: 151.1834° E
              </div>
            </div>

          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-parish-burgundy">
              Common Questions
            </span>
            <h2 className="font-serif text-3xl font-bold text-parish-navy mt-1">
              Frequently Asked Questions for First-Time Visitors
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-parish-sand overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-serif font-bold text-parish-navy text-base hover:bg-parish-ivory/50 transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-parish-burgundy shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-parish-ivory/30">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Ask a Question Before Visiting (Non-Intimidating Form) */}
        <section className="max-w-2xl mx-auto bg-white rounded-2xl border border-parish-sand p-8 sm:p-10 shadow-sm">
          <div className="text-center mb-6">
            <h2 className="font-serif text-2xl font-bold text-parish-navy">
              Still Have a Question Before You Visit?
            </h2>
            <p className="text-xs text-gray-600 mt-1">
              Send a note to our pastoral welcome team. We are happy to answer anything from accessibility to what happens during Sunday coffee.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm text-center">
              <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <strong className="block font-serif text-base mb-1">Message Received with Gratitude!</strong>
              <span>One of our parish welcoming team will reply to your email shortly. We look forward to meeting you!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Sarah Mitchell"
                  className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-parish-gold"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="e.g. sarah@example.com"
                  className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-parish-gold"
                />
              </div>

              <div>
                <label htmlFor="question" className="block text-xs font-semibold text-gray-700 mb-1">
                  How can we help make your first visit comfortable?
                </label>
                <textarea
                  id="question"
                  rows={3}
                  value={formQuestion}
                  onChange={(e) => setFormQuestion(e.target.value)}
                  placeholder="Ask anything about Mass times, children, accessibility, or what to expect..."
                  className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-parish-gold"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-parish-navy hover:bg-parish-midnight text-white font-bold py-3 rounded-md text-sm transition shadow flex items-center justify-center gap-2"
              >
                <span>Send Welcome Enquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </section>

      </div>
    </div>
  );
}
