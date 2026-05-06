import Head from 'next/head';
import Link from 'next/link';

const C = {
  base: '#0E1117',
  baseSoft: '#161C26',
  accent: '#4A90D4',
  text: '#F0F6FF',
  textMuted: '#8B99B5',
  border: 'rgba(139,153,181,0.12)',
  cardBg: '#161C26',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Umrah & Ziarat Travel Packages from Pakistan — Synaptex Consultancy',
  description:
    'Synaptex Consultancy partners with Karvan Noor Zehra and Rupal Expeditions to offer curated Umrah and Ziarat pilgrimage packages for Pakistani travellers.',
  author: { '@type': 'Person', name: 'Ghulam Hasnain' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  publisher: {
    '@type': 'Organization',
    name: 'Synaptex Consultancy',
    url: 'https://www.synaptexconsultancy.pk',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.synaptexconsultancy.pk/blog/umrah-ziarat-travel-packages-synaptex',
  },
  keywords:
    'Umrah packages Pakistan, Ziarat travel Pakistan, Synaptex travel, Karvan Noor Zehra, Rupal Expeditions, pilgrimage packages Pakistan',
};

export default function UmrahZiaratTravelSynaptex() {
  return (
    <>
      <Head>
        <title>Umrah & Ziarat Travel Packages from Pakistan | Synaptex Consultancy</title>
        <meta
          name="description"
          content="Synaptex Consultancy offers curated Umrah and Ziarat pilgrimage packages from Pakistan, partnering with Karvan Noor Zehra and Rupal Expeditions for a seamless spiritual journey."
        />
        <meta
          name="keywords"
          content="Umrah packages Pakistan 2026, Ziarat travel Pakistan, Synaptex travel consultancy, Karvan Noor Zehra, pilgrimage packages Rawalpindi"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.synaptexconsultancy.pk/blog/umrah-ziarat-travel-packages-synaptex" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <div style={{ background: C.base, minHeight: '100vh', fontFamily: "'Jost', sans-serif", fontWeight: 300, color: C.text }}>
        {/* Navbar */}
        <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(14,17,23,0.92)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.border}`, padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
          <Link href="/" style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, color: C.text, textDecoration: 'none', fontWeight: 600 }}>
            Synaptex
          </Link>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <Link href="/" style={{ color: C.textMuted, textDecoration: 'none', fontSize: 14 }}>← Back</Link>
            <Link href="/blog" style={{ color: C.textMuted, textDecoration: 'none', fontSize: 14 }}>Blog</Link>
          </div>
        </nav>

        {/* Hero */}
        <header style={{ maxWidth: 720, margin: '0 auto', padding: '72px 24px 48px' }}>
          <span style={{ display: 'inline-block', background: 'rgba(74,144,212,0.12)', color: C.accent, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 100, marginBottom: 24, border: '1px solid rgba(74,144,212,0.25)' }}>
            Umrah & Pilgrimage
          </span>
          <h1 style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic', fontSize: 'clamp(28px, 4.5vw, 48px)', fontWeight: 600, lineHeight: 1.2, margin: '0 0 24px', color: C.text }}>
            Umrah &amp; Ziarat Travel Packages from Pakistan — Synaptex Consultancy
          </h1>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', color: C.textMuted, fontSize: 13, flexWrap: 'wrap' }}>
            <span>By <strong style={{ color: C.text, fontWeight: 400 }}>Ghulam Hasnain</strong></span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>February 20, 2026</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>8 min read</span>
          </div>
        </header>

        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
          <hr style={{ border: 'none', borderTop: `1px solid ${C.border}`, marginBottom: 48 }} />
        </div>

        <article style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px 96px', lineHeight: 1.8, fontSize: 16 }}>
          <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 26, fontWeight: 600, color: C.text, margin: '0 0 16px' }}>
            A Journey That Deserves Proper Planning
          </h2>
          <p style={{ color: C.textMuted, marginBottom: 24 }}>
            For Muslims across Pakistan, the pilgrimage to Mecca for Umrah — or the Ziarat journeys to the holy shrines of Iraq, Iran, and Syria — represents one of the most meaningful experiences of a lifetime. Yet the logistics involved can be daunting: visa applications, airline tickets, hotel bookings close to the Haram, ground transportation, group coordination, and the ever-present risk of last-minute complications. Getting any one of these elements wrong can disrupt what should be a deeply spiritual journey.
          </p>
          <p style={{ color: C.textMuted, marginBottom: 40 }}>
            Synaptex Consultancy's travel division was built around a simple principle: a pilgrim should be focused entirely on their spiritual experience, not on administrative headaches. By partnering with two of Pakistan's most trusted pilgrimage operators — Karvan Noor Zehra and Rupal Expeditions — Synaptex offers end-to-end packages that handle every logistical detail from Rawalpindi and Skardu, all the way to the destination and back.
          </p>

          <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 26, fontWeight: 600, color: C.text, margin: '0 0 16px' }}>
            Umrah Packages: What Synaptex Covers
          </h2>
          <p style={{ color: C.textMuted, marginBottom: 24 }}>
            An Umrah package through Synaptex is comprehensive by design. The journey begins well before departure: the team assists with Umrah visa applications, advises on the documentation requirements, and coordinates with approved Saudi visa agents to minimise processing delays. For many pilgrims — particularly those travelling from Gilgit Baltistan, where local access to visa offices is limited — this facilitation alone is a significant relief.
          </p>

          <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, fontWeight: 600, color: C.text, margin: '0 0 12px' }}>
            Flights & Airlines
          </h3>
          <p style={{ color: C.textMuted, marginBottom: 24 }}>
            Synaptex works with PIA, Air Blue, and connecting international carriers to secure competitive group fares. Departure cities include Islamabad, Karachi, and Lahore, with connecting arrangements available for travellers coming from Skardu and the northern areas. Group departures are coordinated to ensure pilgrims travel together, reducing the anxiety of navigating unfamiliar airports alone.
          </p>

          <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, fontWeight: 600, color: C.text, margin: '0 0 12px' }}>
            Accommodation in Mecca & Medina
          </h3>
          <p style={{ color: C.textMuted, marginBottom: 24 }}>
            Hotel proximity to the Masjid al-Haram in Mecca and the Prophet's Mosque in Medina is one of the most critical factors in an Umrah journey's quality. Synaptex offers packages across a range of budgets — from economy hotels within walking distance of the Haram to mid-range and premium properties with direct views of the Kaaba. All accommodation bookings are confirmed in advance and cross-verified with the hotel, with digital confirmation records provided to every pilgrim before departure.
          </p>
          <p style={{ color: C.textMuted, marginBottom: 24 }}>
            For groups travelling under the Karvan Noor Zehra banner — primarily Shia pilgrims undertaking Umrah or Arbaeen — Synaptex ensures accommodation is arranged with attention to the specific logistical requirements of those journeys, including the Medina–Mecca–Jeddah circuit timing.
          </p>

          <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, fontWeight: 600, color: C.text, margin: '0 0 12px' }}>
            Ground Transportation & Guided Ziyarat
          </h3>
          <p style={{ color: C.textMuted, marginBottom: 40 }}>
            Once in Saudi Arabia, transportation between Jeddah airport, Mecca, and Medina is fully coordinated. Local guides accompany groups for ziyarat visits to the significant historical and religious sites in both cities. For elderly pilgrims or those travelling with young children, Synaptex arranges wheelchair-accessible transportation and priority support at key checkpoints.
          </p>

          <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 26, fontWeight: 600, color: C.text, margin: '0 0 16px' }}>
            Ziarat Packages to Iraq & Iran
          </h2>
          <p style={{ color: C.textMuted, marginBottom: 24 }}>
            Beyond Umrah, Synaptex and Karvan Noor Zehra organise Ziarat tours to the holy shrines of Imam Ali, Imam Hussain, and other revered figures in Najaf, Karbala, Samarra, and Kadhimiya in Iraq — as well as the shrines of Imam Reza in Mashhad and Lady Fatima Masuma in Qom, Iran. These journeys are among the most spiritually significant for Shia Muslims in Pakistan, and Synaptex brings the same logistical rigour to them that it applies to Umrah.
          </p>
          <p style={{ color: C.textMuted, marginBottom: 24 }}>
            Visas for Iraq and Iran require careful advance planning, with specific documentation and timing requirements that vary by nationality and travel history. Synaptex's experienced team navigates these complexities on behalf of pilgrims, drawing on established relationships with the relevant consulates and visa processing agents.
          </p>
          <p style={{ color: C.textMuted, marginBottom: 24 }}>
            Airlines used on these routes include Iran Air and Iraqi Airways, with Synaptex coordinating group bookings that offer both competitive pricing and the reliability of travelling with a organised group rather than individually. Accommodation in Najaf, Karbala, Mashhad, and Qom is arranged within walking distance of the main shrines wherever possible, and all group itineraries include sufficient free time for personal worship and reflection.
          </p>
          <p style={{ color: C.textMuted, marginBottom: 40 }}>
            Rupal Expeditions, Synaptex's partner for adventure and leisure travel in the northern areas, also offers combined journeys that allow pilgrims to extend their trip with sightseeing in Iran's historic cities — Isfahan, Shiraz, Tehran — making the most of the journey while keeping the spiritual purpose central.
          </p>

          <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 26, fontWeight: 600, color: C.text, margin: '0 0 16px' }}>
            Booking Your Pilgrimage with Synaptex
          </h2>
          <p style={{ color: C.textMuted, marginBottom: 24 }}>
            Packages are available throughout the year, with peak season slots filling quickly during Ramadan and the post-Eid period. Synaptex recommends initiating enquiries at least three months before your intended travel date to allow adequate time for visa processing, airline seat allocation, and hotel reservation confirmation.
          </p>
          <p style={{ color: C.textMuted, marginBottom: 0 }}>
            To discuss packages, pricing, and availability, contact the Synaptex travel team directly at <a href="mailto:Synaptexconsultancypvtltd@gmail.com" style={{ color: C.accent, textDecoration: 'none' }}>Synaptexconsultancypvtltd@gmail.com</a> or via WhatsApp on <a href="https://wa.me/923452502478" target="_blank" rel="noreferrer" style={{ color: C.accent, textDecoration: 'none' }}>+92-345-2502478</a>. The team operates from the Rawalpindi head office and the Skardu regional office, ensuring pilgrims across Pakistan have a local point of contact throughout their journey.
          </p>
        </article>

        {/* Footer */}
        <footer style={{ borderTop: `1px solid ${C.border}`, padding: '32px 24px', textAlign: 'center', color: C.textMuted, fontSize: 13 }}>
          <p style={{ margin: '0 0 8px' }}>© 2026 Synaptex Consultancy Pvt Ltd</p>
          <Link href="/blog" style={{ color: C.textMuted, textDecoration: 'none' }}>← All articles</Link>
        </footer>
      </div>
    </>
  );
}
