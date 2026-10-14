'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Users, 
  Search, 
  Filter, 
  Mail, 
  Clock, 
  Heart, 
  Sparkles, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { MINISTRIES_DATA, MinistryItem } from '@/data/parishData';

export default function MinistriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Ministries' },
    { id: 'families', label: 'Families & Children' },
    { id: 'youth', label: 'Youth & Young Adults' },
    { id: 'faith', label: 'Faith Formation' },
    { id: 'prayer', label: 'Prayer & Worship' },
    { id: 'service', label: 'Community Service' },
    { id: 'seniors', label: 'Seniors & Care' },
    { id: 'cultural', label: 'Cultural Communities' },
  ];

  const filteredMinistries = useMemo(() => {
    return MINISTRIES_DATA.filter((m) => {
      const matchesCategory = selectedCategory === 'all' || m.category === selectedCategory;
      const matchesSearch = 
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-parish-ivory py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parish-sand text-parish-burgundy text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Community Directory</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-parish-navy mb-4">
            Parish Ministries &amp; Groups
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            God has given each of us unique gifts to share. Find a welcoming circle to grow in faith, make lifelong friends, and serve the greater Chatswood community.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-parish-sand shadow-sm mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by ministry name, keyword, or age group..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-parish-gold"
              />
            </div>

            {/* Clear filters button if active */}
            {(selectedCategory !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="text-xs font-semibold text-parish-burgundy hover:underline shrink-0"
              >
                Reset Filters
              </button>
            )}

          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-gray-100 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-parish-navy text-white shadow-sm font-semibold'
                    : 'bg-parish-ivory text-gray-700 hover:bg-parish-sand'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Ministries Results Count */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
          <span>Showing {filteredMinistries.length} parish {filteredMinistries.length === 1 ? 'ministry' : 'ministries'}</span>
          <span>Verified Parish Contact Routes</span>
        </div>

        {/* Ministries Grid */}
        {filteredMinistries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMinistries.map((ministry) => (
              <div
                key={ministry.id}
                id={ministry.id}
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between hover:shadow-md hover:border-parish-gold transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-parish-sand text-parish-charcoal">
                      {ministry.categoryLabel}
                    </span>
                    {ministry.isVerified && (
                      <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>

                  <h2 className="font-serif text-xl font-bold text-parish-navy mb-2">
                    {ministry.title}
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {ministry.description}
                  </p>

                  <div className="space-y-2 text-xs text-gray-600 mb-6 bg-parish-ivory/60 p-3 rounded-lg border border-gray-100">
                    <div>
                      <strong className="text-parish-navy block">Intended For:</strong>
                      <span>{ministry.targetAudience}</span>
                    </div>
                    <div>
                      <strong className="text-parish-navy block">Gathering Time:</strong>
                      <span className="flex items-center gap-1 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-parish-burgundy" />
                        <span>{ministry.meetingTime}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <a
                    href={`mailto:${ministry.contactEmail}`}
                    className="inline-flex items-center gap-1.5 font-semibold text-parish-navy hover:text-parish-burgundy"
                  >
                    <Mail className="w-3.5 h-3.5 text-parish-gold" />
                    <span>Contact Group</span>
                  </a>

                  {ministry.id === 'chinese-catholic-association' ? (
                    <Link
                      href="/chinese-catholic-association"
                      className="text-parish-burgundy font-bold hover:underline flex items-center gap-0.5"
                    >
                      <span>CCA Page</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  ) : (
                    <Link
                      href="/contact"
                      className="text-parish-blue font-semibold hover:underline"
                    >
                      Enquire via Office
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center max-w-lg mx-auto">
            <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-parish-navy mb-1">
              No ministries match your search
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Try adjusting your search terms or clearing the selected category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="bg-parish-navy text-white text-xs font-semibold px-4 py-2 rounded"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Volunteer & Safeguarding Notice */}
        <div className="mt-16 bg-white rounded-xl border border-parish-sand p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-lg font-bold text-parish-navy mb-1">
              Interested in Volunteering or Starting a New Ministry?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              All parish volunteers working with children or vulnerable adults hold verified Working With Children Checks (WWCC) and adhere to Diocesan safeguarding protocols.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-parish-burgundy hover:bg-parish-crimson text-white font-semibold px-6 py-2.5 rounded-md text-sm shrink-0 transition"
          >
            Speak with Pastoral Team
          </Link>
        </div>

      </div>
    </div>
  );
}
