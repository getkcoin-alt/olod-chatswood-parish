'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Globe, 
  Users, 
  Heart, 
  Sparkles, 
  Calendar, 
  BookOpen, 
  Mail, 
  CheckCircle, 
  Send, 
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Church
} from 'lucide-react';
import { CCA_TRANSLATIONS, PARISH_INFO } from '@/data/parishData';

type LanguageKey = 'en' | 'zh_CN' | 'zh_TW';

export default function CCAPage() {
  const [lang, setLang] = useState<LanguageKey>('en');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dialect: 'Cantonese (廣東話)',
    message: '',
  });

  const t = CCA_TRANSLATIONS[lang];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <div className="bg-parish-ivory py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb back to Parish */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-parish-navy hover:text-parish-burgundy transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Main Parish Website</span>
          </Link>

          {/* Tri-Language Selector */}
          <div className="inline-flex items-center p-1 rounded-full bg-white border border-gray-200 shadow-sm">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                lang === 'en'
                  ? 'bg-parish-burgundy text-white shadow'
                  : 'text-gray-600 hover:text-parish-navy'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('zh_CN')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                lang === 'zh_CN'
                  ? 'bg-parish-burgundy text-white shadow'
                  : 'text-gray-600 hover:text-parish-navy'
              }`}
            >
              简体中文
            </button>
            <button
              onClick={() => setLang('zh_TW')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                lang === 'zh_TW'
                  ? 'bg-parish-burgundy text-white shadow'
                  : 'text-gray-600 hover:text-parish-navy'
              }`}
            >
              繁體中文
            </button>
          </div>
        </div>

        {/* Hero Banner with Cultural Elegance */}
        <div className="relative rounded-3xl bg-gradient-to-r from-parish-navy via-parish-midnight to-parish-navy text-white p-8 sm:p-12 lg:p-16 border-4 border-parish-gold shadow-xl mb-14 overflow-hidden">
          {/* Subtle oriental traditional border detail watermark */}
          <div className="absolute right-6 -bottom-10 text-8xl md:text-9xl font-serif text-white/5 font-bold pointer-events-none select-none">
            主愛
          </div>

          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parish-burgundy text-amber-200 text-xs font-semibold mb-4">
              <Globe className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              {t.title}
            </h1>

            <p className="text-parish-goldLight text-lg sm:text-xl font-light leading-relaxed mb-8">
              {t.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300">
              <span className="flex items-center gap-1.5">
                <Church className="w-4 h-4 text-parish-gold" />
                <span>Our Lady of Dolours Chatswood</span>
              </span>
              <span>•</span>
              <span>Coordinator: Chinese Catholic Association</span>
              <span>•</span>
              <a href="#contact" className="text-parish-gold underline hover:text-white">
                Contact the CCA Team
              </a>
            </div>
          </div>
        </div>

        {/* Editorial Greeting / Welcome Section */}
        <section className="bg-white rounded-2xl border border-parish-sand p-8 sm:p-12 mb-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-parish-burgundy">
                Our Spiritual Home
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-parish-navy mt-1 mb-4">
                {t.introTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                {t.introText}
              </p>
              <div className="p-4 rounded-xl bg-parish-ivory border border-gray-100 text-xs text-gray-500">
                <p>
                  <em>
                    * Note for parish review: Content presented as a modernization concept developed in consultation with the CCA Coordinator. Official texts subject to final approval before publication.
                  </em>
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-parish-sand/50 p-6 rounded-2xl border border-parish-sand text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-parish-burgundy text-amber-200 flex items-center justify-center font-serif text-2xl font-bold mb-3 shadow">
                愛
              </div>
              <h3 className="font-serif font-bold text-parish-navy text-lg mb-1">
                {lang === 'en' ? 'Living the Faith in Communion' : '信德·望德·愛德'}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                {lang === 'en' 
                  ? 'Nurturing family faith, supporting older parishioners, and celebrating traditions with Christ at the centre.'
                  : '在基督的愛內，以母語共沐聖化恩寵，代代相傳信仰薪火。'}
              </p>
              <a
                href="#contact"
                className="inline-block bg-parish-navy hover:bg-parish-midnight text-white text-xs font-semibold px-4 py-2 rounded shadow"
              >
                {lang === 'en' ? 'Get In Touch' : '聯絡我們 / 報名'}
              </a>
            </div>
          </div>
        </section>

        {/* Activities and Gatherings */}
        <section className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-parish-burgundy">
              {lang === 'en' ? 'Community Gatherings' : '聚會與事工'}
            </span>
            <h2 className="font-serif text-3xl font-bold text-parish-navy mt-1">
              {t.activitiesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.activities.map((act, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between hover:border-parish-gold hover:shadow-md transition"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-parish-sand flex items-center justify-center text-parish-burgundy font-serif font-bold text-base mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-parish-navy mb-2">
                    {act.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {act.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Media / Photo Gallery Section (With Authentic Replacement Notice) */}
        <section className="bg-white rounded-2xl border border-parish-sand p-8 mb-14 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <h2 className="font-serif text-2xl font-bold text-parish-navy">
                {lang === 'en' ? 'Moments of Community & Worship' : '團體生活剪影'}
              </h2>
              <p className="text-xs text-gray-500">
                Celebrations, feasts and liturgies at Our Lady of Dolours
              </p>
            </div>
            <span className="text-xs bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded-full font-medium">
              Client asset upload slot ready
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="aspect-[4/3] rounded-xl bg-parish-sand/60 border border-dashed border-gray-300 flex flex-col items-center justify-center p-4 text-center">
              <Church className="w-8 h-8 text-parish-navy/40 mb-2" />
              <span className="text-xs font-semibold text-parish-navy">
                {lang === 'en' ? 'Lunar New Year Thanksgiving Mass' : '農曆新春感恩彌撒'}
              </span>
              <span className="text-[11px] text-gray-400 mt-1">St Peter Hall Fellowship</span>
            </div>

            <div className="aspect-[4/3] rounded-xl bg-parish-sand/60 border border-dashed border-gray-300 flex flex-col items-center justify-center p-4 text-center">
              <BookOpen className="w-8 h-8 text-parish-navy/40 mb-2" />
              <span className="text-xs font-semibold text-parish-navy">
                {lang === 'en' ? 'Chinese RCIA Group' : '華語成人慕道團'}
              </span>
              <span className="text-[11px] text-gray-400 mt-1">Faith Inquiries &amp; Baptism</span>
            </div>

            <div className="aspect-[4/3] rounded-xl bg-parish-sand/60 border border-dashed border-gray-300 flex flex-col items-center justify-center p-4 text-center">
              <Users className="w-8 h-8 text-parish-navy/40 mb-2" />
              <span className="text-xs font-semibold text-parish-navy">
                {lang === 'en' ? 'Mid-Autumn Family Gathering' : '中秋節家庭團聚'}
              </span>
              <span className="text-[11px] text-gray-400 mt-1">Intergenerational Fellowship</span>
            </div>
          </div>
        </section>

        {/* Contact & Inquiry Form */}
        <section id="contact" className="max-w-3xl mx-auto bg-white rounded-2xl border border-parish-sand p-8 sm:p-12 shadow-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parish-sand text-parish-burgundy text-xs font-semibold mb-2">
              <Mail className="w-3.5 h-3.5" />
              <span>{t.getInvolvedTitle}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-parish-navy">
              {lang === 'en' ? 'Connect with the CCA Coordinator' : '聯絡華人天主教聯誼會協調人'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-lg mx-auto">
              {t.getInvolvedSubtitle}
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-center">
              <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-serif text-xl font-bold mb-2">
                {lang === 'en' ? 'Inquiry Sent Successfully!' : '諮詢已成功送出！'}
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                {lang === 'en'
                  ? 'Thank you for reaching out. The CCA Coordinator and welcoming team will contact you shortly via email.'
                  : '感謝您的留言！聯誼會協調人及接待組同道將儘快與您透過電子郵件或電話取得聯繫。天主保佑！'}
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="text-xs font-semibold text-parish-navy underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {t.formName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-parish-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {t.formEmail} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-parish-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {t.formPhone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-parish-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    {t.formDialect}
                  </label>
                  <select
                    value={formData.dialect}
                    onChange={(e) => setFormData({ ...formData, dialect: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-parish-gold"
                  >
                    {t.dialectOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {t.formMessage}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    lang === 'en'
                      ? 'Tell us a little about yourself or what you would like to know...'
                      : '請簡單介紹您或您想諮詢的事宜...'
                  }
                  className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-parish-gold"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-parish-navy hover:bg-parish-midnight text-white font-bold py-3.5 rounded-md text-sm transition shadow flex items-center justify-center gap-2"
              >
                <span>{t.formSubmit}</span>
                <Send className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-gray-400 text-center">
                Official coordinator contact: cca@olodchatswood.org • Inquiries treated with pastoral confidentiality.
              </p>
            </form>
          )}
        </section>

      </div>
    </div>
  );
}
