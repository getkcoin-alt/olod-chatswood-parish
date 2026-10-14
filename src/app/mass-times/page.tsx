'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Clock, 
  Calendar, 
  CheckCircle, 
  Globe, 
  Heart, 
  Sparkles, 
  BookOpen, 
  ShieldCheck,
  ChevronRight,
  Phone,
  Mail
} from 'lucide-react';
import { MASS_SCHEDULE, PARISH_INFO } from '@/data/parishData';

export default function MassTimesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'weekend' | 'weekday' | 'reconciliation' | 'cultural'>('all');

  const sacraments = [
    {
      title: 'Sacrament of Baptism',
      subtitle: 'Infants, Children and Adults',
      desc: 'Baptisms are celebrated on scheduled Sundays following the 10:30 am Mass. Parents are invited to attend a baptismal preparation evening led by our pastoral team.',
      action: 'Contact Parish Office to Register',
      contact: 'chatswoodoffice@bbcatholic.org.au',
    },
    {
      title: 'Sacrament of Marriage',
      subtitle: 'Holy Matrimony in Our Lady of Dolours',
      desc: 'Couples preparing for marriage should contact the parish at least six months prior to their intended wedding date to complete required canonical documentation and marriage preparation.',
      action: 'Enquire for Wedding Bookings',
      contact: 'chatswoodoffice@bbcatholic.org.au',
    },
    {
      title: 'Reconciliation & Confession',
      subtitle: 'Mercy, Forgiveness & Spiritual Peace',
      desc: 'Available every Thursday during evening Adoration (7:00 pm – 8:00 pm) and every Saturday morning (9:30 am – 10:30 am), or anytime by confidential appointment with a priest.',
      action: 'View Confession Times Above',
      contact: '(02) 9410 9000',
    },
    {
      title: 'First Holy Communion & Confirmation',
      subtitle: 'Children’s Sacramental Journey',
      desc: 'Parish-based sacramental programs for school-aged children are conducted each year in partnership with Our Lady of Dolours Primary School and local public/independent schools.',
      action: 'Learn About Children’s Programs',
      contact: 'sacraments@olodchatswood.org',
    },
    {
      title: 'Anointing of the Sick & Viaticum',
      subtitle: 'Comfort in Times of Illness or Surgery',
      desc: 'For parishioners facing serious illness, awaiting surgery, or near the end of life. Communal anointing Masses are celebrated periodically, and priests are available on-call for emergency hospital visitation.',
      action: 'Call for Emergency Pastoral Visit',
      contact: '(02) 9410 9000',
    },
    {
      title: 'RCIA (Rite of Christian Initiation of Adults)',
      subtitle: 'Becoming Catholic / Exploring Faith',
      desc: 'A gentle, supportive inquiry process for adults seeking to receive the sacraments of initiation (Baptism, Confirmation, Eucharist) at the Easter Vigil, with English and Chinese cohorts.',
      action: 'Join the RCIA Inquiry Journey',
      contact: 'rcia@olodchatswood.org',
    },
  ];

  return (
    <div className="bg-parish-ivory py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parish-sand text-parish-burgundy text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Official Liturgical Schedule</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-parish-navy mb-4">
            Mass Times, Sacraments &amp; Devotions
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            All are welcome to join us in daily worship, contemplative prayer, and community sacraments at 94 Archer Street, Chatswood.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Schedule verified: {PARISH_INFO.lastScheduleVerification}</span>
          </div>
        </div>

        {/* Schedule Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Liturgies' },
            { id: 'weekend', label: 'Weekend Masses' },
            { id: 'weekday', label: 'Weekday Masses' },
            { id: 'reconciliation', label: 'Reconciliation & Prayer' },
            { id: 'cultural', label: 'Cultural & Language Masses' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-parish-navy text-white shadow'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-parish-gold'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SCHEDULE BLOCKS */}
        <div className="space-y-12 mb-20">
          
          {/* 1. Weekend Masses */}
          {(activeTab === 'all' || activeTab === 'weekend') && (
            <section className="bg-white rounded-2xl border border-parish-sand p-6 sm:p-8 shadow-sm">
              <div className="border-b border-gray-100 pb-4 mb-6 flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-parish-navy">Weekend Mass Schedule</h2>
                  <p className="text-xs text-gray-500 mt-0.5">Celebrate the Lord&apos;s Day with our parish family</p>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded bg-parish-sand text-parish-burgundy text-xs font-semibold">
                  Saturday Vigil &amp; Sunday
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {MASS_SCHEDULE.weekends.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-gray-100 bg-parish-ivory/50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold text-parish-burgundy mb-1">
                        <span>{item.day}</span>
                        <span>{item.time}</span>
                      </div>
                      <h3 className="font-serif font-bold text-lg text-parish-navy">{item.label}</h3>
                    </div>
                    {item.notes && (
                      <p className="text-xs text-gray-600 mt-2 pt-2 border-t border-gray-200/60 leading-relaxed">
                        {item.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 2. Weekday Masses */}
          {(activeTab === 'all' || activeTab === 'weekday') && (
            <section className="bg-white rounded-2xl border border-parish-sand p-6 sm:p-8 shadow-sm">
              <div className="border-b border-gray-100 pb-4 mb-6 flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-parish-navy">Weekday Daily Masses</h2>
                  <p className="text-xs text-gray-500 mt-0.5">Quiet contemplation, daily Eucharist, and morning prayer</p>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded bg-parish-sand text-parish-burgundy text-xs font-semibold">
                  Monday – Friday
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {MASS_SCHEDULE.weekdays.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-gray-100 bg-parish-ivory/50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold text-parish-burgundy mb-1">
                        <span>{item.day}</span>
                        <span>{item.time}</span>
                      </div>
                      <h3 className="font-serif font-bold text-base text-parish-navy">{item.label}</h3>
                    </div>
                    {item.notes && (
                      <p className="text-xs text-gray-600 mt-2 pt-2 border-t border-gray-200/60 leading-relaxed">
                        {item.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 3. Reconciliation & Devotions */}
          {(activeTab === 'all' || activeTab === 'reconciliation') && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Reconciliation */}
              <section className="bg-white rounded-2xl border border-parish-sand p-6 sm:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-parish-navy mb-2">
                  Reconciliation (Confession)
                </h2>
                <p className="text-xs text-gray-500 mb-6">Experience the merciful healing peace of Christ</p>

                <div className="space-y-4">
                  {MASS_SCHEDULE.reconciliation.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-gray-100 bg-parish-ivory/50">
                      <div className="flex items-center justify-between text-xs font-semibold text-parish-burgundy mb-1">
                        <span>{item.day}</span>
                        <span>{item.time}</span>
                      </div>
                      <h3 className="font-serif font-bold text-base text-parish-navy">{item.label}</h3>
                      <p className="text-xs text-gray-600 mt-1">{item.notes}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Devotions & Prayer */}
              <section className="bg-white rounded-2xl border border-parish-sand p-6 sm:p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-parish-navy mb-2">
                  Daily Prayer &amp; Adoration
                </h2>
                <p className="text-xs text-gray-500 mb-6">Rosary, Divine Mercy, Eucharistic Adoration &amp; Novena</p>

                <div className="space-y-3">
                  {MASS_SCHEDULE.devotions.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg border border-gray-100 bg-parish-ivory/50 flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs font-bold text-parish-navy">{item.label}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.day} • {item.notes || 'In main sanctuary'}</div>
                      </div>
                      <span className="text-xs font-semibold text-parish-burgundy shrink-0">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          )}

          {/* 4. Cultural & Language Liturgies */}
          {(activeTab === 'all' || activeTab === 'cultural') && (
            <section className="bg-gradient-to-br from-parish-navy to-parish-midnight text-white rounded-2xl p-6 sm:p-8 shadow-md">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-parish-gold tracking-wider mb-2">
                <Globe className="w-4 h-4" />
                <span>Multicultural Liturgical Life</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                Cultural &amp; Language-Specific Liturgies
              </h2>
              <p className="text-sm text-gray-300 max-w-2xl mb-6">
                Our Lady of Dolours is a home for diverse languages and cultures, reflecting the universal Catholic Church.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {MASS_SCHEDULE.cultural.map((item, idx) => (
                  <div key={idx} className="bg-white/10 border border-white/15 p-5 rounded-xl">
                    <span className="inline-block px-2 py-0.5 rounded text-xs bg-parish-burgundy text-amber-100 font-semibold mb-2">
                      {item.language}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-white mb-1">{item.label}</h3>
                    <p className="text-xs text-parish-gold font-medium mb-2">{item.day} • {item.time}</p>
                    <p className="text-xs text-gray-300 leading-relaxed">{item.notes}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-gray-300">
                  Are you interested in connecting with our Chinese Catholic Association (CCA)?
                </span>
                <Link
                  href="/chinese-catholic-association"
                  className="bg-parish-gold hover:bg-amber-400 text-parish-midnight font-bold px-4 py-2 rounded text-xs transition"
                >
                  Visit Chinese Community (CCA)
                </Link>
              </div>
            </section>
          )}

        </div>

        {/* SACRAMENTS DIRECTORY */}
        <section className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-parish-burgundy">
              Life In The Church
            </span>
            <h2 className="font-serif text-3xl font-bold text-parish-navy mt-1 mb-3">
              The Seven Sacraments of the Church
            </h2>
            <p className="text-sm text-gray-600">
              From birth and youth to marriage and times of vulnerability, God&apos;s grace accompanies every milestone of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sacraments.map((sacrament, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <span className="text-xs font-semibold text-parish-burgundy uppercase">
                    {sacrament.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-parish-navy mt-1 mb-3">
                    {sacrament.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {sacrament.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-parish-navy">{sacrament.action}</span>
                  <Link href="/contact" className="text-parish-burgundy font-bold hover:underline">
                    Enquire →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
