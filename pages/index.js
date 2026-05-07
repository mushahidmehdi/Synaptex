import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import {
  HiOutlineGlobeAlt,
  HiOutlineTicket,
  HiOutlineComputerDesktop,
  HiOutlineAcademicCap,
  HiOutlineChartBarSquare,
  HiOutlineShoppingBag,
  HiOutlineMegaphone,
  HiOutlineUserGroup,
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineBuildingOffice2,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineArrowUpRight,
} from 'react-icons/hi2';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';

// ─── Exact Norzin palette adapted for Synaptex blue ──────
const DARK = {
  base: '#0E1117',
  baseSoft: '#161C26',
  accent: '#4A90D4',
  accentGlow: 'rgba(74,144,212,0.35)',
  text: '#F0F6FF',
  textMuted: '#8B99B5',
  glass: 'rgba(14,17,23,0.75)',
  border: 'rgba(139,153,181,0.12)',
  cardBg: '#161C26',
};
const LIGHT = {
  base: '#FAFBFF',
  baseSoft: '#F0F4FF',
  accent: '#1B3AB5',
  accentGlow: 'rgba(27,58,181,0.25)',
  text: '#0D1530',
  textMuted: '#5A6A8A',
  glass: 'rgba(250,251,255,0.82)',
  border: 'rgba(27,58,181,0.1)',
  cardBg: '#FFFFFF',
};

const ease = 'cubic-bezier(.65,0,.35,1)';

function getAutoTheme() {
  const h = new Date().getHours();
  return h >= 6 && h < 18 ? 'light' : 'dark';
}

const SERVICES = [
  {
    Icon: HiOutlineGlobeAlt,
    tag: 'Tourism',
    title: 'Travel & Religious Tourism',
    desc: 'Curated pilgrimage packages for Umrah, Ziarat, and beyond — partnering with Karvan Noor Zehra and Rupal Expeditions. Accommodation bookings worldwide via our partner global hotel booking platform.',
    size: 'large',
    img: 'https://images.unsplash.com/photo-1591604329758-ae65c8d2b28c?w=900&q=75&auto=format&fit=crop',
    link: {
      href: 'https://myservice.pk',
      anchor: 'global hotel booking platform',
    },
  },
  {
    Icon: HiOutlineComputerDesktop,
    tag: 'Technology',
    title: 'IT Solutions',
    desc: 'Software development, cloud infrastructure, cybersecurity, and digital automation for modern organisations — including booking software solutions like myservice.pk.',
    size: 'normal',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=75&auto=format&fit=crop',
    link: {
      href: 'https://myservice.pk',
      anchor: 'booking software solutions',
    },
  },
  {
    Icon: HiOutlineMegaphone,
    tag: 'Marketing',
    title: 'Digital Marketing',
    desc: 'SMM, SEO, performance analytics and targeted campaigns to grow your digital footprint.',
    size: 'normal',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=75&auto=format&fit=crop',
  },
  {
    Icon: HiOutlineTicket,
    tag: 'Visa',
    title: 'Ticketing & Visa',
    desc: 'Seamless visa guidance for pilgrimage routes and competitive ticketing on domestic and international carriers.',
    size: 'medium',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=75&auto=format&fit=crop',
  },
  {
    Icon: HiOutlineAcademicCap,
    tag: 'Training',
    title: 'Professional Training',
    desc: 'Industry-driven programs in IT, project management, leadership, and emerging technologies.',
    size: 'normal',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=75&auto=format&fit=crop',
  },
  {
    Icon: HiOutlineChartBarSquare,
    tag: 'Research',
    title: 'Market Research',
    desc: 'Competitive intelligence, consumer insights, and feasibility studies to drive data-backed decisions.',
    size: 'normal',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=75&auto=format&fit=crop',
  },
  {
    Icon: HiOutlineShoppingBag,
    tag: 'Procurement',
    title: 'Procurement Management',
    desc: 'Strategic sourcing, tender management, contract negotiation, and vendor performance evaluation.',
    size: 'normal',
    img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=700&q=75&auto=format&fit=crop',
  },
  {
    Icon: HiOutlineUserGroup,
    tag: 'Workshops',
    title: 'Workshops & Capacity Building',
    desc: 'Hands-on sessions on digital transformation, innovation, and business process improvement.',
    size: 'normal',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=75&auto=format&fit=crop',
  },
];

const PARTNERS = [
  'Karvan Noor Zehra',
  'Rupal Expeditions',
  'PIA',
  'Air Blue',
  'Iran Air',
  'Iraqi Airways',
  'Arguni Dry Fruits',
  'myservice.pk',
];

const TEAM = [
  {
    initials: 'GH',
    name: 'Ghulam Hasnain',
    role: 'CEO & Managing Director',
    email: 'arguni.hasnain@gmail.com',
    phone: '0345-2502478',
    linkedin: 'arguni_hasnain',
    bio: '8+ years spanning visa consultancy, IT advisory, market research, and policy advocacy. MPhil — Quaid-i-Azam University, Islamabad.',
  },
  {
    initials: 'MS',
    name: 'Muhammad Sadiq',
    role: 'Director',
    bio: 'Founding Director overseeing strategic direction and long-term growth. Deep commitment to the socio-economic development of Gilgit-Baltistan.',
  },
  {
    initials: 'MB',
    name: 'Muhammad Baqir',
    role: 'Director — Digital',
    bio: 'Leads digital transformation and capacity-building, keeping IT solutions and marketing strategies ahead of market trends.',
  },
];

const OFFICES = [
  {
    city: 'Rawalpindi',
    label: 'Head Office',
    address: 'Rajazar Road, Sadiqabad, Haji Chowk',
    email: 'Synaptexconsultancypvtltd@gmail.com',
    whatsapp: '+92-345-2502478',
    web: 'www.synaptexconsultancy.pk',
  },
  {
    city: 'Skardu',
    label: 'Regional Office',
    address: 'Agha Hadi Chowk, Skardu, Gilgit Baltistan',
    email: 'Synaptexconsultancypvtltd@gmail.com',
    whatsapp: '+92-345-2502478',
    web: 'www.synaptexconsultancy.pk',
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeKey, setThemeKey] = useState('dark');
  const [manual, setManual] = useState(true);
  const [active, setActive] = useState('');
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    if (!manual) setThemeKey(getAutoTheme());
  }, [manual]);
  useEffect(() => {
    if (manual) return;
    const iv = setInterval(() => setThemeKey(getAutoTheme()), 60000);
    return () => clearInterval(iv);
  }, [manual]);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 60);
      setShowTop(window.scrollY > 500);
      for (const id of ['contact', 'offices', 'team', 'services', 'about']) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 150 >= el.offsetTop) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll('.fu').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const c = themeKey === 'dark' ? DARK : LIGHT;
  const isDark = themeKey === 'dark';
  const toggle = () => {
    setManual(true);
    setThemeKey((k) => (k === 'dark' ? 'light' : 'dark'));
  };

  const sp = (extra = {}) => ({
    transition: `0.4s ${ease}`,
    ...extra,
  });

  return (
    <>
      <Head>
        <title>
          Synaptex Consultancy Pvt Ltd | IT, Travel & Business Consulting —
          Pakistan
        </title>
        <meta
          name='description'
          content='Synaptex Consultancy Pvt Ltd offers IT solutions, Umrah & Ziarat travel packages, digital marketing, professional training, market research, and procurement management across Pakistan — headquartered in Rawalpindi with a regional office in Skardu, Gilgit Baltistan.'
        />
        <meta
          name='keywords'
          content='consultancy Pakistan, IT solutions Rawalpindi, Umrah packages Pakistan, digital marketing Pakistan, professional training Islamabad, market research Pakistan, procurement management, Skardu Gilgit Baltistan, Synaptex'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow' />
        <meta name='author' content='Synaptex Consultancy Pvt Ltd' />
        <meta name='geo.region' content='PK-PB' />
        <meta name='geo.placename' content='Rawalpindi, Pakistan' />
        <link rel='canonical' href='https://www.synaptexconsultancy.pk/' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.synaptexconsultancy.pk/' />
        <meta property='og:site_name' content='Synaptex Consultancy Pvt Ltd' />
        <meta
          property='og:title'
          content='Synaptex Consultancy — IT, Travel & Business Solutions, Pakistan'
        />
        <meta
          property='og:description'
          content='Forward-thinking consultancy firm delivering IT solutions, Umrah travel packages, digital marketing, and professional training from Rawalpindi and Skardu.'
        />
        <meta
          property='og:image'
          content='https://www.synaptexconsultancy.pk/og-image.png'
        />
        <meta property='og:locale' content='en_PK' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Synaptex Consultancy — IT, Travel & Business Solutions'
        />
        <meta
          name='twitter:description'
          content='IT solutions, Umrah travel, digital marketing & professional training — Rawalpindi & Skardu, Pakistan.'
        />
        <meta
          name='twitter:image'
          content='https://www.synaptexconsultancy.pk/og-image.png'
        />

        {/* JSON-LD Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Synaptex Consultancy Pvt Ltd',
              url: 'https://www.synaptexconsultancy.pk',
              logo: 'https://www.synaptexconsultancy.pk/logo.png',
              foundingDate: '2023',
              description:
                'Forward-thinking consultancy firm delivering IT solutions, Umrah & Ziarat travel packages, digital marketing, professional training, market research, and procurement management.',
              address: [
                {
                  '@type': 'PostalAddress',
                  streetAddress: 'Rajazar Road, Sadiqabad, Haji Chowk',
                  addressLocality: 'Rawalpindi',
                  addressRegion: 'Punjab',
                  addressCountry: 'PK',
                },
                {
                  '@type': 'PostalAddress',
                  streetAddress: 'Agha Hadi Chowk',
                  addressLocality: 'Skardu',
                  addressRegion: 'Gilgit-Baltistan',
                  addressCountry: 'PK',
                },
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+92-345-2502478',
                contactType: 'customer service',
                email: 'Synaptexconsultancypvtltd@gmail.com',
                availableLanguage: ['English', 'Urdu'],
              },
              sameAs: [
                'https://www.facebook.com/Synaptexconsultancypvtltd',
                'https://www.instagram.com/Synaptexconsultancypvtltd',
              ],
              knowsAbout: [
                'IT Solutions',
                'Digital Marketing',
                'Umrah Travel',
                'Professional Training',
                'Market Research',
                'Procurement Management',
              ],
              areaServed: 'Pakistan',
            }),
          }}
        />

        <link rel='icon' type='image/png' href='/logo.png' />
        <link rel='apple-touch-icon' href='/logo.png' />
      </Head>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; background: ${c.base}; }
        body { font-family: 'Jost', sans-serif; font-weight: 300; letter-spacing: 0.01em; background: ${c.base}; color: ${c.text}; overflow-x: hidden; -webkit-font-smoothing: antialiased; transition: background 0.5s ease, color 0.5s ease; }
        h1, h2, h3 { font-family: 'Bodoni Moda', serif; font-weight: 500; letter-spacing: -0.02em; line-height: 1.1; }
        a { text-decoration: none; color: inherit; transition: 0.4s ${ease}; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${c.base}; }
        ::-webkit-scrollbar-thumb { background: ${c.baseSoft}; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: ${c.accent}; }
        .fu { opacity: 0; transform: translateY(40px); transition: opacity 1s ${ease}, transform 1s ${ease}; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes heroReveal { to { opacity: 1; transform: translateY(0); } }
        .nav-link:hover, .nav-link.active { color: ${c.accent}; }
        .btn-primary { background: ${c.accent}; color: ${isDark ? '#0E1117' : '#fff'}; padding: 1rem 2.5rem; border-radius: 100px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.75rem; display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer; border: none; transition: 0.4s ${ease}; }
        .btn-primary:hover { transform: scale(1.02); box-shadow: 0 0 24px ${c.accentGlow}; }
        .btn-secondary { border: 1px solid ${c.border}; color: ${c.text}; background: transparent; padding: 1rem 2.5rem; border-radius: 100px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.75rem; display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer; transition: 0.4s ${ease}; }
        .btn-secondary:hover { border-color: ${c.accent}; background: ${isDark ? 'rgba(74,144,212,0.08)' : 'rgba(27,58,181,0.05)'}; }
        .bento-card { background: ${c.cardBg}; border: 1px solid ${c.border}; border-radius: 24px; padding: 2.5rem; display: flex; flex-direction: column; justify-content: flex-end; transition: 0.4s ${ease}; position: relative; overflow: hidden; min-height: 300px; }
        .bento-card:hover { border-color: ${c.accent}; transform: translateY(-5px); box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
        .bento-card.large { grid-column: span 2; grid-row: span 2; min-height: 500px; }
        .bento-card.medium { grid-column: span 2; }
        .bento-tag { color: ${c.accent}; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 0.5rem; font-family: 'Jost', sans-serif; font-weight: 600; }
        .bento-title { font-size: 2.2rem; margin-bottom: 0.75rem; color: #F0F6FF; }
        .bento-desc { color: rgba(220,232,255,0.78); font-size: 0.95rem; line-height: 1.6; font-weight: 300; }
        .partner-item { flex-shrink: 0; padding: 1rem 1.75rem; background: ${c.cardBg}; border: 1px solid ${c.border}; border-radius: 12px; display: flex; align-items: center; justify-content: center; transition: 0.4s ${ease}; white-space: nowrap; }
        .partner-item:hover { border-color: ${c.accent}; }
        .team-card { background: ${c.cardBg}; border: 1px solid ${c.border}; border-radius: 24px; padding: 2.5rem; transition: 0.4s ${ease}; }
        .team-card:hover { border-color: ${c.accent}; transform: translateY(-5px); box-shadow: 0 20px 60px rgba(0,0,0,0.2); }
        .office-card { background: ${c.cardBg}; border: 1px solid ${c.border}; border-radius: 24px; padding: 2.5rem; transition: 0.4s ${ease}; }
        .office-card:hover { border-color: ${c.accent}; transform: translateY(-5px); }
        .theme-btn { background: transparent; border: 1px solid ${c.border}; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: ${c.text}; transition: 0.2s ${ease}; }
        .theme-btn:hover { border-color: ${c.accent}; color: ${c.accent}; }
        @media (max-width: 1024px) { .bento-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .bento-grid { grid-template-columns: 1fr !important; } .bento-card.large, .bento-card.medium { grid-column: span 1; grid-row: span 1; min-height: 260px; } .dnav { display: none !important; } .mnav { display: flex !important; } .mobile-nav { padding: 0 1rem !important; } }
        @media (min-width: 641px) { .dnav { display: flex !important; } .mnav { display: none !important; } }
      `}</style>

      {/* ══ NAVBAR — floating pill ══════════════════════════ */}
      <nav
        className='mobile-nav'
        style={{
          position: 'fixed',
          top: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 2rem)',
          maxWidth: 1100,
          height: '4.5rem',
          background: c.glass,
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: `1px solid ${c.border}`,
          borderRadius: 100,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          padding: '0 2rem',
          transition: `border-color 0.4s ${ease}, box-shadow 0.4s ${ease}`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = c.accent;
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = c.border;
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Logo */}
        <a
          href='#'
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            flexShrink: 0,
          }}
        >
          <Image
            src='/logo.png'
            alt='Synaptex'
            width={38}
            height={38}
            style={{ objectFit: 'contain' }}
          />
          <span
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: 1,
              color: c.text,
            }}
          >
            Synaptex
          </span>
        </a>

        {/* Desktop links */}
        <div
          className='dnav'
          style={{ marginLeft: 'auto', gap: '2.5rem', alignItems: 'center' }}
        >
          {['About', 'Services', 'Team', 'Offices', 'Blog'].map((l) => (
            <a
              key={l}
              className={`nav-link${active === l.toLowerCase() ? ' active' : ''}`}
              href={l === 'Blog' ? '/blog' : `#${l.toLowerCase()}`}
              style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: active === l.toLowerCase() ? c.accent : c.textMuted,
              }}
            >
              {l}
            </a>
          ))}

          <button className='theme-btn' onClick={toggle}>
            {isDark ? <HiOutlineMoon size={15} /> : <HiOutlineSun size={15} />}
          </button>

          <a
            href='#contact'
            className='btn-primary'
            style={{ marginLeft: '0.5rem', fontSize: '0.72rem' }}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile */}
        <div
          className='mnav'
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <button className='theme-btn' onClick={toggle}>
            {isDark ? <HiOutlineMoon size={15} /> : <HiOutlineSun size={15} />}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              background: 'transparent',
              border: `1px solid ${c.border}`,
              borderRadius: 8,
              width: 40,
              height: 40,
              cursor: 'pointer',
              position: 'relative',
              flexShrink: 0,
            }}
          >
            {[
              menuOpen
                ? 'translateY(-50%) rotate(45deg)'
                : 'translateY(calc(-50% - 5px))',
              null,
              menuOpen
                ? 'translateY(-50%) rotate(-45deg)'
                : 'translateY(calc(-50% + 5px))',
            ].map((tf, i) => (
              <span
                key={i}
                style={{
                  position: 'absolute',
                  left: 9,
                  right: 9,
                  height: 2,
                  background: c.text,
                  borderRadius: 2,
                  top: '50%',
                  transition: `transform 0.25s ${ease}, opacity 0.25s ${ease}`,
                  transform: tf ?? 'translateY(-50%)',
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1001,
            background: c.base,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2.5rem',
          }}
        >
          {['About', 'Services', 'Team', 'Offices', 'Blog', 'Contact'].map(
            (l, i) => (
              <a
                key={l}
                href={l === 'Blog' ? '/blog' : `#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: '2.2rem',
                  fontWeight: 300,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: c.text,
                }}
                onMouseEnter={(e) => (e.target.style.color = c.accent)}
                onMouseLeave={(e) => (e.target.style.color = c.text)}
              >
                {l}
              </a>
            ),
          )}
        </div>
      )}

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section
        style={{
          height: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#F0F6FF',
          overflow: 'hidden',
        }}
      >
        {/* Dark background — deep navy gradient simulating a dark photo */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            background: isDark
              ? 'radial-gradient(ellipse at 40% 60%, #0B1A3A 0%, #050B18 50%, #020509 100%)'
              : 'radial-gradient(ellipse at 40% 60%, #1a2f5e 0%, #0d1e40 50%, #070d20 100%)',
          }}
        />
        {/* Subtle texture overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            opacity: 0.5,
          }}
        />
        {/* Bottom fade to bg */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            zIndex: 2,
            background: `linear-gradient(to bottom, transparent 0%, transparent 30%, ${c.base}08 45%, ${c.base}20 55%, ${c.base}50 70%, ${c.base}90 85%, ${c.base} 100%)`,
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: 860,
            padding: '0 2rem',
            opacity: 0,
            transform: 'translateY(30px)',
            animation: `heroReveal 1.2s cubic-bezier(.65,0,.35,1) 0.3s forwards`,
          }}
        >
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: c.accent,
              marginBottom: '0.75rem',
              marginTop: '3rem',
            }}
          >
            Rawalpindi & Skardu · Est. 2023
          </p>

          <h1
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: 'clamp(2.8rem, 8vw, 6rem)',
              fontStyle: 'italic',
              fontWeight: 500,
              lineHeight: 1.08,
              marginBottom: '1.5rem',
              color: '#F0F6FF',
            }}
          >
            Empowering Business
            <br />
            Through Smart Solutions
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(240,246,255,0.65)',
              maxWidth: 560,
              margin: '0 auto 2.5rem',
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Bridging traditional business practices and modern digital
            transformation through IT solutions, strategic research, and expert
            consultancy.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a href='#services' className='btn-primary'>
              Explore Services
            </a>
            <a
              href='#about'
              className='btn-secondary'
              style={{
                color: 'rgba(240,246,255,0.8)',
                borderColor: 'rgba(240,246,255,0.2)',
              }}
            >
              Our Story
            </a>
          </div>
        </div>
      </section>

      {/* ══ STATS STRIP ═════════════════════════════════════ */}
      <div
        style={{
          background: c.baseSoft,
          borderBottom: `1px solid ${c.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '2.5rem clamp(1.5rem,5%,5rem)',
            display: 'flex',
            gap: '3rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            ['2023', 'Founded'],
            ['2', 'Office Locations'],
            ['7+', 'Service Areas'],
            ['8+', 'Years Leadership Experience'],
          ].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: 'clamp(1.8rem,3vw,2.5rem)',
                  fontWeight: 600,
                  color: c.accent,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: c.textMuted,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginTop: 4,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ ABOUT ════════════════════════════════════════════ */}
      <section
        id='about'
        style={{
          padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5%,5rem)',
          background: c.base,
        }}
      >
        <div className='fu' style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: c.accent,
                  marginBottom: '0.75rem',
                }}
              >
                Company Profile
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem,3.5vw,2.8rem)',
                  marginBottom: '1.5rem',
                }}
              >
                Driving growth,
                <br />
                innovation &<br />
                operational excellence
              </h2>
              <p
                style={{
                  color: c.textMuted,
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  marginBottom: '1.25rem',
                }}
              >
                Synaptex Consultancy Pvt Ltd. is a forward-thinking consultancy
                firm established in 2023, committed to driving business growth
                and operational excellence — headquartered in Rawalpindi with a
                regional office in Skardu, Gilgit Baltistan.
              </p>
              <p
                style={{
                  color: c.textMuted,
                  fontSize: '1rem',
                  lineHeight: 1.85,
                }}
              >
                We combine industry expertise with innovative approaches to
                empower organisations and deliver sustainable long-term success
                — including travel bookings through our partner{' '}
                <a
                  href='https://myservice.pk'
                  target='_blank'
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  hotel booking platform Pakistan
                </a>
                .
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {[
                {
                  label: 'Mission',
                  text: 'To empower organisations with innovative IT solutions, practical training, and efficient procurement services — delivering excellence through collaboration, innovation, and integrity in every project.',
                },
                {
                  label: 'Vision',
                  text: 'To be a leading consultancy recognised for transforming businesses through cutting-edge technology and strategic excellence — enabling clients to thrive in the digital age.',
                },
              ].map(({ label, text }) => (
                <div
                  key={label}
                  style={{
                    padding: '1.75rem 2rem',
                    background: c.baseSoft,
                    border: `1px solid ${c.border}`,
                    borderRadius: 16,
                    transition: `border-color 0.4s ${ease}`,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = c.accent)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = c.border)
                  }
                >
                  <p
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: c.accent,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      color: c.textMuted,
                      fontSize: '0.95rem',
                      lineHeight: 1.8,
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES — Bento Grid ════════════════════════════ */}
      <section
        id='services'
        style={{
          padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5%,5rem)',
          background: c.baseSoft,
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className='fu' style={{ marginBottom: '3.5rem' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: c.accent,
                marginBottom: '0.75rem',
              }}
            >
              What We Offer
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>
              Core services
            </h2>
          </div>

          <div
            className='fu bento-grid'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoRows: 'minmax(280px,auto)',
              gap: '1.25rem',
            }}
          >
            {SERVICES.map(({ Icon, tag, title, desc, size, img, link }, i) => (
              <div key={i} className={`bento-card ${size}`}>
                {/* Blurred photo background */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(3px) brightness(0.55)',
                    transform: 'scale(1.08)',
                    borderRadius: 24,
                  }}
                />
                {/* Gradient overlay — dark at bottom, lighter at top */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 24,
                    background:
                      'linear-gradient(to top, rgba(4,6,14,0.95) 0%, rgba(4,6,14,0.6) 55%, rgba(4,6,14,0.25) 100%)',
                  }}
                />
                {/* Accent colour tint strip at very top */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 120,
                    borderRadius: 24,
                    background: `radial-gradient(ellipse at 50% 0%, ${c.accentGlow} 0%, transparent 70%)`,
                  }}
                />
                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: 'rgba(74,144,212,0.18)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(74,144,212,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#7DB8E8',
                      marginBottom: '1.5rem',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={26} />
                  </div>
                  <p className='bento-tag'>{tag}</p>
                  <h3 className='bento-title'>{title}</h3>
                  <p className='bento-desc'>
                    {link
                      ? desc
                          .replace(link.anchor, '%%LINK%%')
                          .split('%%LINK%%')
                          .map((part, j, arr) =>
                            j < arr.length - 1 ? (
                              <span key={j}>
                                {part}
                                <a
                                  href={link.href}
                                  target='_blank'
                                  style={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                  }}
                                >
                                  {link.anchor}
                                </a>
                              </span>
                            ) : (
                              <span key={j}>{part}</span>
                            ),
                          )
                      : desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PARTNERS — Marquee ══════════════════════════════ */}
      <section
        style={{
          padding: '3.5rem 0',
          background: c.base,
          borderTop: `1px solid ${c.border}`,
          borderBottom: `1px solid ${c.border}`,
          overflow: 'hidden',
        }}
      >
        <p
          style={{
            textAlign: 'center',
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: c.textMuted,
            marginBottom: '2rem',
          }}
        >
          Key Partners & Clients
        </p>
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              animation: 'marquee 22s linear infinite',
              width: 'max-content',
            }}
          >
            {[...PARTNERS, ...PARTNERS].map((p, i) =>
              p === 'myservice.pk' ? (
                <a
                  key={i}
                  href='https://myservice.pk'
                  target='_blank'
                  className='partner-item'
                  style={{ textDecoration: 'none' }}
                >
                  <span
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: c.textMuted,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {p}
                  </span>
                </a>
              ) : (
                <div key={i} className='partner-item'>
                  <span
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: c.textMuted,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {p}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ══ TEAM ════════════════════════════════════════════ */}
      <section
        id='team'
        style={{
          padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5%,5rem)',
          background: c.baseSoft,
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className='fu' style={{ marginBottom: '3.5rem' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: c.accent,
                marginBottom: '0.75rem',
              }}
            >
              Leadership
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>Our team</h2>
          </div>
          <div
            className='fu'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
              gap: '1.25rem',
            }}
          >
            {TEAM.map((m, i) => (
              <div key={i} className='team-card'>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg,#2DDCD4,#4A90D4,#1B3AB5)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#fff',
                    fontFamily: "'Bodoni Moda', serif",
                    marginBottom: '1.5rem',
                    letterSpacing: 1,
                  }}
                >
                  {m.initials}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.35rem' }}>
                  {m.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: c.accent,
                    marginBottom: '1rem',
                  }}
                >
                  {m.role}
                </p>
                <p
                  style={{
                    color: c.textMuted,
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                  }}
                >
                  {m.bio}
                </p>
                {m.email && (
                  <div
                    style={{
                      marginTop: '1.5rem',
                      paddingTop: '1.5rem',
                      borderTop: `1px solid ${c.border}`,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.6rem',
                    }}
                  >
                    {[
                      [HiOutlineEnvelope, m.email],
                      [HiOutlinePhone, m.phone],
                      [FaLinkedin, m.linkedin],
                    ].map(([Icon, v], j) => (
                      <div
                        key={j}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          fontSize: '0.85rem',
                          color: c.textMuted,
                        }}
                      >
                        <Icon
                          size={16}
                          style={{ color: c.accent, flexShrink: 0 }}
                        />
                        {v}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SUBSIDIARY ══════════════════════════════════════ */}
      <section
        style={{
          padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5%,5rem)',
          background: c.base,
        }}
      >
        <div className='fu' style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: c.accent,
              marginBottom: '2rem',
            }}
          >
            Our Subsidiaries
          </p>
          <div
            style={{
              background: c.baseSoft,
              border: `1px solid ${c.border}`,
              borderRadius: 24,
              padding: '2.5rem',
              display: 'flex',
              gap: '1.75rem',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              transition: `border-color 0.4s ${ease}`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = c.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = c.border)}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                flexShrink: 0,
                background: 'linear-gradient(135deg,#2DDCD4,#4A90D4,#1B3AB5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
              }}
            >
              🌿
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>
                Arguni Dry Fruits
              </h3>
              <p className='bento-tag' style={{ marginBottom: '1rem' }}>
                Premium Organic · Skardu, Gilgit Baltistan
              </p>
              <p
                style={{
                  color: c.textMuted,
                  fontSize: '0.95rem',
                  lineHeight: 1.85,
                }}
              >
                Bringing the pure, nutrient-rich treasures of the Himalayas to
                the global market. Sourcing, processing, and distributing 100%
                natural dry fruits, nuts, and herbal products — supporting local
                farming communities through ethical and sustainable trade.
              </p>
              <a
                href='/arguni-dry-fruits'
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  marginTop: '1.5rem',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: c.accent,
                }}
              >
                Explore Arguni →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ OFFICES ═════════════════════════════════════════ */}
      <section
        id='offices'
        style={{
          padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5%,5rem)',
          background: c.baseSoft,
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className='fu' style={{ marginBottom: '3.5rem' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: c.accent,
                marginBottom: '0.75rem',
              }}
            >
              Where to Find Us
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>
              Our offices
            </h2>
          </div>
          <div
            className='fu'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))',
              gap: '1.25rem',
            }}
          >
            {OFFICES.map((o, i) => (
              <div key={i} className='office-card'>
                <p
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: c.accent,
                    marginBottom: '0.5rem',
                  }}
                >
                  {o.label}
                </p>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.75rem' }}>
                  {o.city}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.9rem',
                  }}
                >
                  {[
                    [HiOutlineMapPin, o.address],
                    [HiOutlineEnvelope, o.email],
                    [FaWhatsapp, o.whatsapp],
                    [HiOutlineGlobeAlt, o.web],
                    [FaFacebook, '@Synaptexconsultancypvtltd'],
                    [FaInstagram, '@Synaptexconsultancypvtltd'],
                  ].map(([Icon, val], j) => (
                    <div
                      key={j}
                      style={{
                        display: 'flex',
                        gap: '0.85rem',
                        alignItems: 'flex-start',
                      }}
                    >
                      <Icon
                        size={17}
                        style={{ color: c.accent, flexShrink: 0, marginTop: 2 }}
                      />
                      <span
                        style={{
                          fontSize: '0.9rem',
                          color: c.textMuted,
                          lineHeight: 1.55,
                        }}
                      >
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BLOG PREVIEW ════════════════════════════════════ */}
      <section
        style={{
          padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5%,5rem)',
          background: c.base,
          borderTop: `1px solid ${c.border}`,
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            className='fu'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: c.accent,
                  marginBottom: '0.75rem',
                }}
              >
                Explore the World
              </p>
              <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>
                Travel guides &amp; destinations
              </h2>
            </div>
            <a
              href='/blog'
              style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                color: c.accent,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              All articles <HiOutlineArrowUpRight size={14} />
            </a>
          </div>
          <div
            className='fu'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              {
                href: '/blog/professional-training-capacity-building-pakistan',
                tag: 'Training',
                title: 'Professional Training & Capacity Building in Pakistan',
                date: 'Apr 5, 2026',
              },
              {
                href: '/blog/it-solutions-smes-pakistan',
                tag: 'Technology',
                title: 'IT Solutions for Small & Medium Businesses in Pakistan',
                date: 'Mar 10, 2026',
              },
              {
                href: '/blog/umrah-ziarat-travel-packages-synaptex',
                tag: 'Umrah',
                title: 'Umrah & Ziarat Travel Packages from Pakistan',
                date: 'Feb 20, 2026',
              },
              {
                href: '/blog/digital-marketing-businesses-pakistan',
                tag: 'Marketing',
                title: 'Digital Marketing for Pakistani Businesses',
                date: 'Jan 15, 2026',
              },
            ].map(({ href, tag, title, date }) => (
              <a
                key={href}
                href={href}
                style={{
                  background: c.cardBg,
                  border: `1px solid ${c.border}`,
                  borderRadius: 20,
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: `border-color 0.4s ${ease}, transform 0.4s ${ease}`,
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = c.accent;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = c.border;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <p
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: c.accent,
                  }}
                >
                  {tag}
                </p>
                <h3
                  style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: '1.15rem',
                    fontWeight: 500,
                    lineHeight: 1.35,
                    color: c.text,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: '0.78rem',
                    color: c.textMuted,
                    marginTop: 'auto',
                  }}
                >
                  {date}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════════════ */}
      <section
        id='contact'
        style={{
          padding: 'clamp(5rem,10vw,9rem) clamp(1.5rem,5%,5rem)',
          textAlign: 'center',
          background: c.base,
          borderTop: `1px solid ${c.border}`,
        }}
      >
        <div className='fu' style={{ maxWidth: 680, margin: '0 auto' }}>
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: c.accent,
              marginBottom: '0.75rem',
            }}
          >
            Get Started
          </p>
          <h2
            style={{
              fontSize: 'clamp(2.2rem,5vw,3.8rem)',
              fontStyle: 'italic',
              marginBottom: '1.25rem',
              lineHeight: 1.1,
            }}
          >
            Partner for sustainable growth
          </h2>
          <p
            style={{
              color: c.textMuted,
              fontSize: '1rem',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              maxWidth: 480,
              margin: '0 auto 2.5rem',
            }}
          >
            Ready to transform your business? Reach out and let&apos;s build
            something that lasts. For travel bookings, explore our partner{' '}
            <a
              href='https://myservice.pk'
              target='_blank'
              style={{
                textDecoration: 'none',
                fontSize: '0.02rem',
                color: 'transparent',
              }}
            >
              online hotel booking Pakistan
            </a>
            .
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href='mailto:Synaptexconsultancypvtltd@gmail.com'
              className='btn-primary'
            >
              <HiOutlineEnvelope size={15} /> Send an Email
            </a>
            <a
              href='https://wa.me/923452502478'
              target='_blank'
              rel='noreferrer'
              className='btn-secondary'
            >
              <FaWhatsapp size={15} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════ */}
      <footer
        style={{
          background: c.baseSoft,
          borderTop: `1px solid ${c.border}`,
          padding: 'clamp(3.5rem,6vw,5.5rem) clamp(1.5rem,5%,5rem) 2rem',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))',
              gap: '3rem',
              marginBottom: '3.5rem',
            }}
          >
            {/* Brand */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: '1rem',
                }}
              >
                <Image
                  src='/logo.png'
                  alt='Synaptex'
                  width={32}
                  height={32}
                  style={{ objectFit: 'contain' }}
                />
                <span
                  style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: 15,
                    fontWeight: 600,
                    letterSpacing: 1,
                  }}
                >
                  Synaptex
                </span>
              </div>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: c.textMuted,
                  lineHeight: 1.75,
                  marginBottom: '1.25rem',
                }}
              >
                Smart solutions for a digital-first world — since 2023.
              </p>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {[FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href='#'
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: '50%',
                        border: `1px solid ${c.border}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: c.textMuted,
                        transition: `all 0.3s ${ease}`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = c.accent;
                        e.currentTarget.style.color = c.accent;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = c.border;
                        e.currentTarget.style.color = c.textMuted;
                      }}
                    >
                      <Icon size={13} />
                    </a>
                  ),
                )}
              </div>
            </div>

            <div>
              <p
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: c.text,
                  marginBottom: '1.25rem',
                }}
              >
                Services
              </p>
              {[
                'IT Solutions',
                'Digital Marketing',
                'Travel & Tourism',
                'Professional Training',
                'Market Research',
                'Procurement',
              ].map((s) => (
                <p
                  key={s}
                  style={{
                    fontSize: '0.88rem',
                    color: c.textMuted,
                    marginBottom: '0.7rem',
                  }}
                >
                  {s}
                </p>
              ))}
            </div>

            <div>
              <p
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: c.text,
                  marginBottom: '1.25rem',
                }}
              >
                Company
              </p>
              {['About', 'Our Team', 'Offices', 'Subsidiaries'].map((s) => (
                <p
                  key={s}
                  style={{
                    fontSize: '0.88rem',
                    color: c.textMuted,
                    marginBottom: '0.7rem',
                  }}
                >
                  {s}
                </p>
              ))}
            </div>

            <div>
              <p
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: c.text,
                  marginBottom: '1.25rem',
                }}
              >
                Contact
              </p>
              {[
                [HiOutlineEnvelope, 'Synaptexconsultancypvtltd@gmail.com'],
                [FaWhatsapp, '+92-345-2502478'],
                [HiOutlineGlobeAlt, 'www.synaptexconsultancy.pk'],
              ].map(([Icon, v], i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    marginBottom: '0.7rem',
                  }}
                >
                  <Icon
                    size={16}
                    style={{ color: c.accent, flexShrink: 0, marginTop: 2 }}
                  />
                  <span
                    style={{
                      fontSize: '0.85rem',
                      color: c.textMuted,
                      lineHeight: 1.55,
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderTop: `1px solid ${c.border}`,
              paddingTop: '1.75rem',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem',
              alignItems: 'center',
            }}
          >
            <p style={{ fontSize: '0.82rem', color: c.textMuted }}>
              © 2025 Synaptex Consultancy Pvt Ltd. All rights reserved.
              {' · '}
              <a
                href='/book-a-hotel'
                style={{
                  fontSize: '0.001rem',
                  color: 'transparent',
                  textDecoration: 'none',
                }}
              >
                Book a Hotel
              </a>
            </p>
            <p style={{ fontSize: '0.78rem', color: c.textMuted }}>
              <a
                href='https://myservice.pk'
                target='_blank'
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  zIndex: -999,
                }}
              >
                .
              </a>{' '}
              · Rawalpindi · Skardu, Gilgit Baltistan
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href='https://wa.me/923452502478'
        target='_blank'
        rel='noreferrer'
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 90,
          width: 50,
          height: 50,
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          transition: 'transform .2s, box-shadow .2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <FaWhatsapp size={22} color='#fff' />
      </a>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: 86,
            right: 24,
            zIndex: 90,
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: c.baseSoft,
            border: `1px solid ${c.border}`,
            color: c.textMuted,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all .2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = c.accent;
            e.currentTarget.style.color = c.accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = c.border;
            e.currentTarget.style.color = c.textMuted;
          }}
        >
          ↑
        </button>
      )}
    </>
  );
}
