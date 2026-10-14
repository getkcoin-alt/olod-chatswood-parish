'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Search, 
  Filter, 
  Download, 
  Share2, 
  Check, 
  AlertCircle,
  Tag,
  ArrowRight
} from 'lucide-react';
import { EVENTS_DATA, EventItem } from '@/data/parishData';

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', 'Liturgical', 'Community', 'Youth', 'Formation', 'Cultural'];

  const filteredEvents = useMemo(() => {
    return EVENTS_DATA.filter((e) => {
      const matchesCategory = selectedCategory === 'All' || e.category === selectedCategory;
      const matchesSearch =
        e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Generate .ics calendar download
  const handleDownloadICS = (event: EventItem) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Our Lady of Dolours Chatswood//Parish Events//EN
BEGIN:VEVENT
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (event: EventItem) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/events#${event.id}`);
      setCopiedId(event.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <div className="bg-parish-ivory py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parish-sand text-parish-burgundy text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Parish Calendar &amp; Fellowship</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-parish-navy mb-4">
            Parish Events &amp; Community Gatherings
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Stay connected with what is happening around Our Lady of Dolours—from solemn liturgical celebrations to family teas, youth encounters, and cultural feasts.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="bg-white p-6 rounded-2xl border border-parish-sand shadow-sm mb-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events by title, keyword, or venue..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-parish-gold"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-parish-navy text-white shadow-sm font-semibold'
                      : 'bg-parish-ivory text-gray-700 hover:bg-parish-sand'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Events Feed */}
        <div className="space-y-6 mb-16">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <article
                key={event.id}
                id={event.id}
                className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:shadow-md hover:border-parish-gold transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Date Block */}
                  <div className="lg:col-span-3 bg-parish-ivory border border-gray-100 p-4 rounded-xl text-center">
                    <span className="text-xs uppercase tracking-widest font-semibold text-parish-burgundy block mb-1">
                      {event.category}
                    </span>
                    <div className="text-2xl font-serif font-bold text-parish-navy">
                      {event.date}
                    </div>
                    <div className="mt-2 text-xs text-gray-600 flex items-center justify-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-parish-gold" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Centre Content */}
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3.5 h-3.5 text-parish-burgundy" />
                        <span>{event.location}</span>
                      </span>
                      {event.isDemonstration && (
                        <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded">
                          Sample Demonstration Event
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-parish-navy mb-3">
                      {event.title}
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Right Actions */}
                  <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-stretch gap-2 justify-end">
                    <button
                      onClick={() => handleDownloadICS(event)}
                      className="flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 bg-parish-sand hover:bg-parish-goldLight text-parish-navy font-semibold px-4 py-2 rounded-lg text-xs transition border border-gray-200"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Add to Calendar</span>
                    </button>

                    <button
                      onClick={() => handleShare(event)}
                      className="flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 bg-white hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg text-xs transition border border-gray-200"
                    >
                      {copiedId === event.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Link Copied!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-3.5 h-3.5" />
                          <span>Share Event</span>
                        </>
                      )}
                    </button>

                    {event.registrationUrl && (
                      <Link
                        href={event.registrationUrl}
                        className="flex-1 lg:flex-none inline-flex items-center justify-center gap-1 bg-parish-burgundy hover:bg-parish-crimson text-white font-semibold px-4 py-2 rounded-lg text-xs transition shadow-sm text-center"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>

                </div>
              </article>
            ))
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-lg mx-auto">
              <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-parish-navy mb-1">
                No events match this criteria
              </h3>
              <p className="text-xs text-gray-500 mb-4">
                Try selecting &ldquo;All&rdquo; or clearing your search term.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="bg-parish-navy text-white text-xs font-semibold px-4 py-2 rounded"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

        {/* Editorial Disclosure Banner */}
        <div className="bg-white rounded-xl border border-parish-sand p-6 text-xs text-gray-500 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-parish-gold shrink-0 mt-0.5" />
          <div>
            <strong className="text-parish-navy block font-semibold mb-0.5">
              Parish Administration Editorial Notice:
            </strong>
            <span>
              All parish events and community notices are curated in partnership with the parish office and ministry coordinators. Events marked &ldquo;Sample Demonstration Event&rdquo; illustrate calendar functionality and will be replaced with real-time approved schedules prior to live production sign-off.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
