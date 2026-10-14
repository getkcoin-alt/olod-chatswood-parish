'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Calendar, CheckCircle, ChevronRight, Bell } from 'lucide-react';
import { MASS_SCHEDULE, PARISH_INFO } from '@/data/parishData';

export default function NextMassWidget() {
  const [currentDayName, setCurrentDayName] = useState<string>('Sunday');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Determine current day in Sydney time (Australia/Sydney)
    try {
      const formatter = new Intl.DateTimeFormat('en-AU', {
        timeZone: 'Australia/Sydney',
        weekday: 'long',
      });
      const dayName = formatter.format(new Date());
      setCurrentDayName(dayName);
    } catch {
      setCurrentDayName('Sunday');
    }
    setMounted(true);
  }, []);

  // Filter today's masses
  const todaysMasses = mounted
    ? (currentDayName === 'Saturday' || currentDayName === 'Sunday'
        ? MASS_SCHEDULE.weekends.filter(m => m.day === currentDayName)
        : MASS_SCHEDULE.weekdays.filter(m => m.day === currentDayName))
    : MASS_SCHEDULE.weekends.filter(m => m.day === 'Sunday');

  return (
    <div className="bg-white rounded-xl shadow-lg border border-parish-sand overflow-hidden">
      {/* Header Banner */}
      <div className="bg-parish-navy px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b-2 border-parish-gold">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-parish-midnight text-parish-gold">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-semibold text-parish-gold tracking-wider">
              Liturgical Schedule
            </span>
            <h3 className="font-serif text-lg font-bold text-white">
              Mass & Devotions for {mounted ? currentDayName : 'Today'}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-950 text-emerald-200 border border-emerald-700">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Schedule Verified</span>
          </span>
        </div>
      </div>

      {/* Body Listing */}
      <div className="p-6">
        {todaysMasses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {todaysMasses.map((item, idx) => (
              <div 
                key={idx} 
                className="p-3.5 rounded-lg border border-gray-100 bg-parish-ivory/60 hover:border-parish-gold transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-xl font-bold font-serif text-parish-navy">
                    {item.time}
                  </div>
                  <div className="text-sm font-semibold text-parish-burgundy mt-0.5">
                    {item.label}
                  </div>
                </div>
                {item.notes && (
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                    {item.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600">
            Please consult our full schedule for solemnities, public holidays and liturgical feast days.
          </p>
        )}

        {/* Action strip */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-medium text-parish-charcoal">Sacrament of Reconciliation:</span>
            <span>Thursdays 7:00 pm &amp; Saturdays 9:30 am</span>
          </div>

          <Link
            href="/mass-times"
            className="inline-flex items-center gap-1 font-semibold text-parish-blue hover:text-parish-navy group"
          >
            <span>View Full Weekly &amp; Language Schedule</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
