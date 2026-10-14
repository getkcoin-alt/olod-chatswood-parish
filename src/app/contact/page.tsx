'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  ShieldCheck, 
  Train, 
  Car,
  ExternalLink
} from 'lucide-react';
import { PARISH_INFO } from '@/data/parishData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="bg-parish-ivory py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parish-sand text-parish-burgundy text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>We Are Here For You</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-parish-navy mb-4">
            Contact &amp; Visit Us
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Have an enquiry about Mass times, baptisms, marriages, pastoral visitation, or connecting with our Chinese Catholic Association? Reach out to our parish office team.
          </p>
        </div>

        {/* 2-Column Layout: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Practical Details & Directions */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl border border-parish-sand p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-parish-navy mb-6">
                Parish Office Details
              </h2>

              <div className="space-y-6 text-sm text-gray-700">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-parish-sand text-parish-burgundy shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-parish-navy block font-semibold">Physical Location</strong>
                    <p className="mt-0.5">{PARISH_INFO.address}</p>
                    <p className="text-xs text-gray-500 mt-1">Opposite Chatswood Chase Shopping Centre</p>
                    <p className="text-xs text-gray-500">Postal: {PARISH_INFO.postalAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-parish-sand text-parish-burgundy shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-parish-navy block font-semibold">Telephone</strong>
                    <a 
                      href={`tel:${PARISH_INFO.phone.replace(/[^0-9]/g, '')}`}
                      className="text-parish-burgundy font-bold hover:underline block mt-0.5"
                    >
                      {PARISH_INFO.phone}
                    </a>
                    <span className="text-xs text-gray-500">General enquiries &amp; sacramental bookings</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-parish-sand text-parish-burgundy shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-parish-navy block font-semibold">Official Email</strong>
                    <a 
                      href={`mailto:${PARISH_INFO.email}`}
                      className="text-parish-blue hover:underline block mt-0.5"
                    >
                      {PARISH_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-parish-sand text-parish-burgundy shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-parish-navy block font-semibold">Parish Office Hours</strong>
                    <p className="mt-0.5">{PARISH_INFO.officeHours}</p>
                    <span className="text-xs text-gray-500">Closed on public holidays &amp; weekends</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="https://maps.google.com/?q=94+Archer+Street+Chatswood+NSW+2067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-parish-sand hover:bg-parish-goldLight text-parish-navy font-bold py-2.5 rounded-lg text-xs transition border border-gray-200"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Emergency & Pastoral Care Box */}
            <div className="bg-parish-navy text-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-parish-goldLight mb-2">
                Urgent Hospital or Sick Call
              </h3>
              <p className="text-xs text-gray-200 leading-relaxed mb-3">
                If someone in your family is critically ill or in hospital requiring the Sacrament of the Anointing of the Sick (Viaticum), please call the parish office directly:
              </p>
              <a
                href={`tel:${PARISH_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="text-white font-bold text-base hover:text-parish-gold block font-mono"
              >
                {PARISH_INFO.phone}
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-parish-sand p-8 sm:p-10 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-parish-navy mb-2">
                Send an Online Enquiry
              </h2>
              <p className="text-xs text-gray-600 mb-6">
                Your message will be delivered securely to the appropriate pastoral staff member.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-center">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-serif text-2xl font-bold mb-2">Enquiry Successfully Submitted</h3>
                  <p className="text-sm text-gray-700 leading-relaxed max-w-md mx-auto mb-6">
                    Thank you, <strong>{formData.name}</strong>. Your message regarding <em>{formData.subject}</em> has been received by our parish administration. We will reply to <strong>{formData.email}</strong> within 1–2 business days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Enquiry',
                        message: '',
                      });
                    }}
                    className="bg-parish-navy text-white text-xs font-semibold px-5 py-2.5 rounded shadow"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
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
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@example.com"
                        className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-parish-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
                        Contact Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0412 345 678"
                        className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-parish-gold"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 mb-1">
                        Enquiry Type
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-parish-gold"
                      >
                        <option value="General Enquiry">General Parish Enquiry</option>
                        <option value="First Visit">Visiting for the First Time</option>
                        <option value="Chinese Catholic Association">Chinese Catholic Association (CCA)</option>
                        <option value="Baptism Enquiry">Sacrament of Baptism</option>
                        <option value="Marriage Enquiry">Sacrament of Marriage</option>
                        <option value="Children Sacraments">Children’s Sacramental Programs</option>
                        <option value="RCIA Inquirer">RCIA / Becoming Catholic</option>
                        <option value="Pastoral Care">Pastoral Care / Sick Visitation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know how we can assist you..."
                      className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-parish-gold"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-parish-navy hover:bg-parish-midnight text-white font-bold py-3.5 rounded-md text-sm transition shadow flex items-center justify-center gap-2"
                  >
                    <span>Submit Enquiry to Parish Office</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="pt-2 text-[11px] text-gray-500 text-center space-y-1">
                    <p>
                      <strong>Privacy Commitment:</strong> Your personal information is collected solely to respond to your inquiry and is never shared, sold, or displayed publicly.
                    </p>
                    <p>
                      Demonstration Notice: In production, this form routes directly to the Broken Bay parish office email.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
