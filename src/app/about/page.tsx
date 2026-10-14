import React from 'react';
import Link from 'next/link';
import { 
  Church, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Heart, 
  Sparkles, 
  ExternalLink,
  BookOpen,
  Award
} from 'lucide-react';
import { PARISH_INFO } from '@/data/parishData';

export default function AboutPage() {
  return (
    <div className="bg-parish-ivory py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parish-sand text-parish-burgundy text-xs font-semibold mb-3">
            <Church className="w-3.5 h-3.5" />
            <span>Our Heritage &amp; Mission</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-parish-navy mb-4">
            About Our Lady of Dolours
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            A centennial Catholic community rooted in the Gospel, reflecting the warmth, diversity, and compassionate heart of Christ in the vibrant city of Chatswood.
          </p>
        </div>

        {/* Strategic Mission Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-parish-sand shadow-sm text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-parish-sand text-parish-burgundy flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-parish-navy text-xl mb-2">Bringing Light to the City</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Living out Christ&apos;s love in the midst of a bustling commercial centre, offering a sanctuary of quiet dignity, sacred music, and genuine contemplation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-parish-sand shadow-sm text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-parish-sand text-parish-burgundy flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-parish-navy text-xl mb-2">Multicultural Communion</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Enriched by diverse cultural traditions, including our active Chinese Catholic Association (CCA), Filipino, and Indonesian communities worshipping as one family.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-parish-sand shadow-sm text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-parish-sand text-parish-burgundy flex items-center justify-center mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-parish-navy text-xl mb-2">Loving, Caring &amp; Serving</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Reaching out through pastoral visitation to hospitals, local aged-care homes, and supporting families facing financial hardship through the St Vincent de Paul Society.
            </p>
          </div>
        </div>

        {/* Parish History & Centennial Heritage */}
        <section className="bg-white rounded-2xl border border-parish-sand p-8 sm:p-12 mb-16 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-parish-burgundy">
              Historical Timeline
            </span>
            <h2 className="font-serif text-3xl font-bold text-parish-navy mt-1 mb-4">
              Over a Century of Catholic Faith in Chatswood
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                The Catholic presence in Chatswood traces back to the late nineteenth and early twentieth centuries. Established to serve the spiritual needs of families in Sydney&apos;s growing northern suburbs, Our Lady of Dolours has grown from a modest brick chapel into a regional centre of liturgical life and Catholic education.
              </p>
              <p>
                Our church building on Archer Street, dedicated to Our Lady of the Seven Sorrows (Dolours), stands as an enduring architectural landmark of faith amidst modern commercial towers, welcoming tens of thousands of worshippers and visitors each year.
              </p>
              <p>
                Adjacent to the church is Our Lady of Dolours Catholic Primary School (94A Archer Street), established by the Sisters of Mercy in 1896, continuing a rich tradition of holistic Catholic education and family formation.
              </p>
            </div>
          </div>
        </section>

        {/* Pastoral Leadership & Clergy Team */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-parish-burgundy">
              Pastoral Care
            </span>
            <h2 className="font-serif text-3xl font-bold text-parish-navy mt-1">
              Clergy &amp; Pastoral Leadership
            </h2>
            <p className="text-xs text-gray-500 mt-2">
              Serving in the Catholic Diocese of Broken Bay under the guidance of Bishop Anthony Randazzo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARISH_INFO.clergy.map((person, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-parish-gold transition"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-parish-sand text-parish-navy flex items-center justify-center font-serif text-xl font-bold mb-4">
                  {person.name.split(' ').slice(-1)[0][0]}
                </div>
                <h3 className="font-serif font-bold text-base text-parish-navy mb-1">
                  {person.name}
                </h3>
                <span className="text-xs font-semibold text-parish-burgundy block mb-2">
                  {person.role}
                </span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {person.notes}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Safeguarding Commitment */}
        <section className="bg-parish-navy text-white rounded-2xl p-8 sm:p-12 shadow-lg">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700 text-xs font-semibold mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>A Child-Friendly, Safe Parish</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
              Our Uncompromising Commitment to Child Safety
            </h2>

            <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6">
              Our Lady of Dolours Catholic Parish is committed to fostering a culture of safety, care, and transparency. In full alignment with the Diocesan Office for Safeguarding and NSW child protection legislation, we adhere to strict standards of screening, supervision, and ongoing child protection training for all clergy, staff, and parish volunteers.
            </p>

            <div className="p-4 rounded-xl bg-parish-midnight border border-gray-700 text-xs text-gray-300 space-y-1">
              <p><strong>Parish Safeguarding Officer:</strong> Available via the Parish Office at (02) 9410 9000</p>
              <p><strong>Diocesan Office for Safeguarding:</strong> (02) 8379 1605 | safeguarding@bbcatholic.org.au</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
