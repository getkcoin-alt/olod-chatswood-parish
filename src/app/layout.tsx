import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PARISH_INFO } from '@/data/parishData';

export const metadata: Metadata = {
  metadataBase: new URL('https://olodchatswood.org'),
  title: {
    default: 'Our Lady of Dolours Catholic Parish Chatswood | Sydney NSW',
    template: '%s | Our Lady of Dolours Chatswood',
  },
  description:
    'Welcome to Our Lady of Dolours Catholic Parish in Chatswood, Sydney. Bringing the light of Christ to the city through vibrant liturgy, welcoming community, family ministries, and the Chinese Catholic Association.',
  keywords: [
    'Our Lady of Dolours',
    'Chatswood Catholic Parish',
    'Catholic Church Chatswood',
    'Mass times Chatswood',
    'Catholic Mass Sydney',
    'Chinese Catholic Association',
    'Chinese Mass Chatswood',
    'Diocese of Broken Bay',
    'Confession Chatswood',
    'Baptism Chatswood',
    'Catholic community Sydney',
  ],
  authors: [{ name: 'Our Lady of Dolours Catholic Parish' }],
  creator: 'Our Lady of Dolours Parish',
  publisher: 'Catholic Diocese of Broken Bay',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://olodchatswood.org',
    title: 'Our Lady of Dolours Catholic Parish Chatswood | A Place to Belong',
    description:
      'Discover Mass times, sacraments, multicultural fellowship, and a peaceful spiritual home at 94 Archer Street, Chatswood NSW.',
    siteName: 'Our Lady of Dolours Catholic Parish',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data (JSON-LD) for Local Church & PlaceOfWorship
  const churchSchema = {
    '@context': 'https://schema.org',
    '@type': ['PlaceOfWorship', 'CatholicChurch'],
    name: PARISH_INFO.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '94 Archer Street',
      addressLocality: 'Chatswood',
      addressRegion: 'NSW',
      postalCode: '2067',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.7963,
      longitude: 151.1834,
    },
    telephone: PARISH_INFO.phone,
    email: PARISH_INFO.email,
    url: 'https://olodchatswood.org',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Catholic Diocese of Broken Bay',
      url: 'https://www.bbcatholic.org.au',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '16:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:30',
        closes: '18:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '07:00',
        closes: '19:00',
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-parish-ivory text-parish-charcoal">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-parish-gold focus:text-parish-midnight focus:font-bold focus:rounded-md focus:shadow-xl"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
