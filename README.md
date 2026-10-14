# Our Lady of Dolours Catholic Parish — Digital Experience & Modernization Platform
**Chatswood, Sydney NSW, Australia**

Official Parish Website: [https://olodchatswood.org/](https://olodchatswood.org/)  
Diocese of Broken Bay Portal: [https://www.bbcatholic.org.au/chatswood](https://www.bbcatholic.org.au/chatswood)  
Client Stakeholder: Coordinator of the Chinese Catholic Association (CCA)  
Prepared by: Scriza Private Limited

---

## 1. Executive Summary & Strategic Mission
This platform serves as a modern, dignified, and culturally inclusive digital front door for Our Lady of Dolours Catholic Parish in Chatswood. Moving decisively away from generic templates or commercial SaaS aesthetics, it embodies contemporary Catholic editorial design—grounded in warm ivory surfaces (`#FAF8F3`), deep midnight navy (`#0B1B3D`), muted burgundy accents (`#7A1C28`), and refined ecclesiastical gold details (`#C8A962`).

The digital journey follows the strategic pathway:
$$\text{DISCOVER} \longrightarrow \text{FEEL WELCOME} \longrightarrow \text{PLAN A VISIT} \longrightarrow \text{PARTICIPATE} \longrightarrow \text{BELONG} \longrightarrow \text{STAY CONNECTED}$$

---

## 2. Pages Implemented

| Route | Page | Purpose & Key Features |
|---|---|---|
| `/` | **Homepage** | Architectural photographic hero, real-time `NextMassWidget` (Sydney time), New to Parish welcoming section, CCA priority feature, ministry highlights, upcoming events, safeguarding commitment, and weekly bulletin signup. |
| `/plan-a-visit` | **Plan Your First Visit** | Dedicated first-timer guide: what to expect at Catholic Mass (~60 mins), what to wear, children & families reassurance, 3-hour free parking at Chatswood Chase, 7-min walk from Chatswood Interchange, interactive visitor FAQ, and welcome enquiry form. |
| `/mass-times` | **Mass Times & Sacraments** | Scannable tabbed schedules (Weekdays, Weekends, Reconciliation, Devotions, Cultural Masses), verified against the Diocese of Broken Bay directory, plus guidance for Baptism, Marriage, Confession, Confirmation, Anointing, and RCIA. |
| `/ministries` | **Community & Ministries** | Searchable, category-filtered directory covering Families, Youth, Faith Formation, Prayer & Choir, Community Care (Vinnies), Seniors, and Cultural Communities. |
| `/chinese-catholic-association` | **Chinese Catholic Association (CCA)** | Priority trilingual landing page with instant toggle between English, 简体中文, and 繁體中文. Outlines bilingual liturgies, Chinese RCIA, family fellowships, cultural celebrations, and direct coordinator enquiry form. |
| `/events` | **Events & News** | Parish calendar with category filtering, keyword search, one-click **Add to Calendar (.ics)** export, and copy-link sharing. |
| `/about` | **About the Parish** | Centennial Catholic heritage, pastoral team & clergy (Very Rev Dr David Ranson VG), relationship with the Diocese of Broken Bay, and child safety charter. |
| `/contact` | **Contact & Visit** | Verified address (94 Archer St), telephone `(02) 9410 9000`, official email, interactive validated contact form, emergency hospital sick call details, and Google Maps link. |

---

## 3. Technology Stack & Quality Standards
- **Framework:** Next.js 13+ (App Router) with TypeScript
- **Styling:** Tailwind CSS with custom editorial design tokens
- **Icons:** Lucide React
- **Accessibility:** WCAG 2.2 AA compliant (high-contrast ratios, visible focus outlines, screen-reader semantic landmarks, keyboard navigation, reduced-motion media query support)
- **SEO & Local Discovery:** JSON-LD `PlaceOfWorship` and `CatholicChurch` structured schema, dynamic `sitemap.xml`, and `robots.txt`
- **Performance:** 100% static generation for instantaneous initial render and optimal Core Web Vitals.

---

## 4. Editorial Checklist (Client Sign-Off Required Prior to Live Production)
1. **Physical Address:** Confirmed as `94 Archer Street, Chatswood NSW 2067`.
2. **CCA Copy Approval:** Coordinator review of English, Simplified Chinese, and Traditional Chinese introductory texts and gathering schedules.
3. **Photography Assets:** Replace high-fidelity placeholder slots with approved parish photography (interior, altar, community tea, choir).
4. **Newsletter Integration:** Connect bulletin subscription form to the parish's approved Mailchimp / SendGrid account.
5. **Priests & Staff:** Confirm current clergy assignments with the Diocese of Broken Bay.
