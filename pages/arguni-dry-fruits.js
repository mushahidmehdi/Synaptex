import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const C = {
  base: '#0A0F0A',
  baseSoft: '#111A11',
  accent: '#6DB560',
  accentGlow: 'rgba(109,181,96,0.28)',
  accentDim: 'rgba(109,181,96,0.12)',
  accentBorder: 'rgba(109,181,96,0.25)',
  text: '#EDF5EB',
  textMuted: '#8AA887',
  border: 'rgba(109,181,96,0.1)',
  cardBg: '#111A11',
  glass: 'rgba(10,15,10,0.82)',
};

const ease = 'cubic-bezier(.65,0,.35,1)';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?w=1600&q=85&auto=format&fit=crop',
  apricots:
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&q=80&auto=format&fit=crop',
  walnuts:
    'https://placehold.co/900x600/0d1f0d/6DB560?text=GB+Walnuts',
  almonds:
    'https://placehold.co/900x600/0d1f0d/6DB560?text=High-Altitude+Almonds',
  pinenuts:
    'https://placehold.co/900x600/0d1f0d/6DB560?text=Chilgoza+Pine+Nuts',
  mulberry:
    'https://placehold.co/900x600/0d1f0d/6DB560?text=Dried+Mulberries',
  valley:
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop',
  harvest:
    'https://placehold.co/900x600/0d1f0d/6DB560?text=Apricot+Kernel+Oil',
  skardu:
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop',
  packing:
    'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=900&q=80&auto=format&fit=crop',
};

const FALLBACK =
  'https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?w=900&q=80&auto=format&fit=crop';
const imgFallback = (e) => {
  e.currentTarget.src = FALLBACK;
  e.currentTarget.onerror = null;
};

const PRODUCTS = [
  {
    name: 'Sun-Dried Skardu Apricots',
    tag: 'Bestseller',
    img: IMG.apricots,
    desc: 'Hand-harvested at peak ripeness and sun-cured on mountain rooftops for 2–4 weeks. No sulphur, no additives — just pure Himalayan sweetness. Available in whole (with stone), pitted halves, and kernel-included varieties.',
    nutrients: [
      'Beta-carotene (Vitamin A)',
      'Iron & Potassium',
      'Dietary Fibre',
      'Natural Sugars',
    ],
    seasons: 'Harvest: July–August · New stock: October',
  },
  {
    name: 'Gilgit Baltistan Walnuts',
    tag: 'Premium',
    img: IMG.walnuts,
    desc: 'Thin-shelled walnuts from century-old trees across Hunza, Nagar, and Gilgit valleys. Plumper kernels, richer flavour, and higher polyphenol content than commercial varieties. Available in shell or shelled.',
    nutrients: [
      'Omega-3 ALA (2.5g/serving)',
      'Polyphenols',
      'Magnesium',
      'Protein',
    ],
    seasons: 'Harvest: September–October · Available year-round',
  },
  {
    name: 'High-Altitude Almonds',
    tag: 'Natural',
    img: IMG.almonds,
    desc: 'Grown in the lower valleys of Gilgit and Ghizer at 1,800–2,500m. Smaller than commercial almonds but markedly richer in flavour and vitamin E. Slow high-altitude development produces denser, more nutritious kernels.',
    nutrients: ['Vitamin E', 'Magnesium', 'Calcium', 'Healthy Fats'],
    seasons: 'Harvest: August–September · Available year-round',
  },
  {
    name: 'Chilgoza Pine Nuts',
    tag: 'Rare & Prized',
    img: IMG.pinenuts,
    desc: 'Hand-collected from Pinus gerardiana forests at 2,500m+ in Baltistan. Buttery, resinous, and incomparably flavourful. One of the rarest and most nutritionally dense dry fruits on earth — stock is strictly seasonal.',
    nutrients: [
      'Protein (30%)',
      'Pinolenic Acid',
      'Manganese (383% DV)',
      'Vitamin E',
    ],
    seasons: 'Harvest: October–December · Very limited stock',
  },
  {
    name: 'Dried Mulberries',
    tag: 'Natural',
    img: IMG.mulberry,
    desc: 'White and black mulberries sun-dried in early summer across Hunza and Ghizer. Intensely sweet, rich in resveratrol, iron, and natural vitamin C. A traditional Hunza staple eaten year-round.',
    nutrients: [
      'Resveratrol',
      'Iron & Vitamin C',
      '1-DNJ (blood sugar support)',
      'Anthocyanins',
    ],
    seasons: 'Harvest: May–June · Available until sold out',
  },
  {
    name: 'Apricot Kernel Oil',
    tag: 'Cold-Pressed',
    img: IMG.harvest,
    desc: 'Cold-pressed from hand-cracked Hunza apricot kernels. Light-textured, rich in oleic and linoleic fatty acids and vitamin E. Used traditionally as a cooking oil, skin moisturiser, and hair treatment across the Hunza Valley.',
    nutrients: ['Oleic Acid', 'Linoleic Acid', 'Vitamin E', 'Zero Additives'],
    seasons: 'Produced post-harvest · Year-round availability',
  },
];

const PROCESS = [
  {
    step: '01',
    title: 'Direct Farm Sourcing',
    desc: 'We work face-to-face with farming families across Hunza, Nagar, Ghanche, Astore, and Skardu districts — no middlemen, full traceability from orchard to pack.',
  },
  {
    step: '02',
    title: 'Traditional Harvesting',
    desc: 'All produce is hand-picked at peak ripeness or hand-collected from remote forests. No mechanised harvesting — the mountains make that impossible and unnecessary.',
  },
  {
    step: '03',
    title: 'Natural Drying & Curing',
    desc: 'Fruits are sun-dried using traditional methods on clean rooftops and drying racks. No kilns, no sulphur dioxide, no artificial preservatives — ever.',
  },
  {
    step: '04',
    title: 'Hand-Sorting & Quality Check',
    desc: 'Every batch is hand-sorted by our Skardu team to remove damaged or substandard pieces. We reject anything that does not meet our standard — even if it costs us yield.',
  },
  {
    step: '05',
    title: 'Hygienic Packaging',
    desc: 'Clean-room packing in food-grade materials. Retail packs, bulk sacks, and custom corporate gifting packaging all available.',
  },
  {
    step: '06',
    title: 'Nationwide Delivery',
    desc: 'Dispatched via reliable courier from Skardu to any address in Pakistan. Typical lead time 2–3 working days. International export enquiries welcome.',
  },
];

const BLOG_LINKS = [
  {
    href: '/blog/dry-fruits-gilgit-baltistan-complete-guide',
    title: 'Dry Fruits of Gilgit Baltistan — A Complete Guide',
    tag: 'Dry Fruits',
  },
  {
    href: '/blog/health-benefits-hunza-dry-fruits',
    title: 'Health Benefits of Hunza Dry Fruits',
    tag: 'Nutrition',
  },
  {
    href: '/blog/hunza-apricots-golden-fruit-pakistan',
    title: "Hunza Apricots — Pakistan's Golden Fruit",
    tag: 'Apricots',
  },
  {
    href: '/blog/chilgoza-pine-nuts-gilgit-baltistan',
    title: "Chilgoza — The World's Most Prized Nut",
    tag: 'Pine Nuts',
  },
  {
    href: '/blog/buy-dry-fruits-gilgit-baltistan-online',
    title: 'How to Buy Authentic GB Dry Fruits',
    tag: "Buyer's Guide",
  },
];

export default function ArguniDryFruits() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Head>
        <title>
          Arguni Dry Fruits — Premium Organic Produce from Gilgit Baltistan
        </title>
        <meta
          name='description'
          content='Arguni Dry Fruits sources, processes and distributes 100% natural dry fruits, nuts and herbal products from Gilgit Baltistan — Hunza apricots, walnuts, chilgoza pine nuts, almonds, and more. Order direct from Skardu.'
        />
        <meta
          name='keywords'
          content='Arguni dry fruits, Hunza apricots buy, dry fruits Gilgit Baltistan, chilgoza pine nuts Pakistan, walnuts Skardu, organic dry fruits Pakistan, buy dry fruits online Pakistan'
        />
        <meta name='robots' content='index, follow' />
        <link
          rel='canonical'
          href='https://www.synaptexconsultancy.pk/arguni-dry-fruits'
        />
        <meta
          property='og:title'
          content='Arguni Dry Fruits — Premium Organic Produce from Gilgit Baltistan'
        />
        <meta
          property='og:description'
          content='100% natural dry fruits from the Himalayas — Hunza apricots, walnuts, chilgoza, almonds, mulberries and apricot kernel oil. Direct from Skardu, GB.'
        />
        <meta property='og:image' content={IMG.hero} />
        <link rel='icon' type='image/png' href='/logo.png' />
        <link rel='apple-touch-icon' href='/logo.png' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Arguni Dry Fruits',
              description:
                'Premium organic dry fruits from Gilgit Baltistan — subsidiary of Synaptex Consultancy Pvt Ltd.',
              parentOrganization: {
                '@type': 'Organization',
                name: 'Synaptex Consultancy Pvt Ltd',
                url: 'https://www.synaptexconsultancy.pk',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Agha Hadi Chowk',
                addressLocality: 'Skardu',
                addressRegion: 'Gilgit-Baltistan',
                addressCountry: 'PK',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+92-345-2502478',
                contactType: 'sales',
                email: 'Synaptexconsultancypvtltd@gmail.com',
              },
              sameAs: ['https://www.facebook.com/Synaptexconsultancypvtltd'],
              knowsAbout: [
                'Dry Fruits',
                'Organic Produce',
                'Gilgit Baltistan Agriculture',
                'Hunza Apricots',
                'Chilgoza Pine Nuts',
              ],
            }),
          }}
        />
      </Head>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Jost', sans-serif; font-weight: 300; background: ${C.base}; color: ${C.text}; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        h1, h2, h3 { font-family: 'Bodoni Moda', serif; }
        a { text-decoration: none; color: inherit; }
        .product-card:hover { border-color: ${C.accent} !important; transform: translateY(-6px); box-shadow: 0 24px 60px rgba(0,0,0,0.4); }
        .product-card { transition: border-color 0.3s ${ease}, transform 0.3s ${ease}, box-shadow 0.3s ${ease}; }
        .process-card:hover { border-color: ${C.accent} !important; }
        .process-card { transition: border-color 0.3s ${ease}; }
        .blog-card:hover { border-color: ${C.accent} !important; transform: translateY(-3px); }
        .blog-card { transition: all 0.3s ${ease}; }
        .cta-btn:hover { transform: scale(1.03); box-shadow: 0 0 28px ${C.accentGlow}; }
        .cta-btn { transition: all 0.3s ${ease}; }
        .cta-outline:hover { border-color: ${C.accent} !important; background: ${C.accentDim} !important; }
        .cta-outline { transition: all 0.3s ${ease}; }
        @keyframes heroReveal { to { opacity: 1; transform: translateY(0); } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (max-width: 640px) {
          .hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .hero-btns a { text-align: center; }
          .products-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 641px) {
          .hamburger-btn { display: none !important; }
        }
      `}</style>

      {/* ── NAV ─────────────────────────────────────────── */}
      <nav
        style={{
          position: 'fixed',
          top: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 2rem)',
          maxWidth: 1100,
          height: '4rem',
          background: C.glass,
          backdropFilter: 'blur(20px)',
          border: `1px solid ${C.border}`,
          borderRadius: 100,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          padding: '0 1.5rem',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: `linear-gradient(135deg, #4CAF50, #2E7D32)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
              flexShrink: 0,
            }}
          >
            🌿
          </div>
          <span
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: 0.5,
              color: C.text,
            }}
          >
            Arguni Dry Fruits
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {[
            ['#products', 'Products'],
            ['#process', 'Our Process'],
            ['#contact', 'Order Now'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: C.textMuted,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                display: 'none',
              }}
              className='desktop-nav-link'
            >
              {label}
            </a>
          ))}
          <Link
            href='/'
            style={{
              fontSize: 12,
              color: C.textMuted,
              fontWeight: 400,
              letterSpacing: '0.05em',
              display: 'none',
            }}
            className='desktop-nav-link'
          >
            ← Synaptex
          </Link>
          <a
            href='#contact'
            style={{
              background: C.accent,
              color: '#0A0F0A',
              padding: '0.55rem 1.4rem',
              borderRadius: 100,
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
            className='cta-btn'
          >
            Order Now
          </a>
          <button
            className='hamburger-btn'
            onClick={() => setMenuOpen(true)}
            aria-label='Open menu'
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: C.text,
                  borderRadius: 2,
                }}
              />
            ))}
          </button>
        </div>
      </nav>
      <style>{`.desktop-nav-link { display: flex !important; } @media (max-width: 640px) { .desktop-nav-link { display: none !important; } }`}</style>

      {/* ── MOBILE MENU OVERLAY ─────────────────────────── */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1001,
            background: 'rgba(10,15,10,0.97)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label='Close menu'
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: C.text,
              fontSize: 28,
              lineHeight: 1,
            }}
          >
            ✕
          </button>
          {[
            ['#products', 'Products'],
            ['#process', 'Our Process'],
            ['#contact', 'Order Now'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: 'clamp(1.8rem, 8vw, 2.5rem)',
                fontWeight: 600,
                color: C.text,
                letterSpacing: '-0.01em',
              }}
            >
              {label}
            </a>
          ))}
          <Link
            href='/'
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: '0.85rem',
              color: C.textMuted,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginTop: '1rem',
            }}
          >
            ← Back to Synaptex
          </Link>
        </div>
      )}

      {/* ── HERO ────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={IMG.hero}
          alt='Premium dry fruits from Gilgit Baltistan'
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(160deg, rgba(10,15,10,0.72) 0%, rgba(10,15,10,0.55) 40%, rgba(10,15,10,0.85) 100%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            maxWidth: 820,
            padding: '0 1.5rem',
            opacity: 0,
            transform: 'translateY(30px)',
            animation:
              'heroReveal 1.2s cubic-bezier(.65,0,.35,1) 0.3s forwards',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(109,181,96,0.15)',
              border: '1px solid rgba(109,181,96,0.3)',
              borderRadius: 100,
              padding: '6px 18px',
              marginBottom: '1.5rem',
              marginTop: '3rem',
            }}
          >
            <span style={{ fontSize: 14 }}>🌿</span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: C.accent,
              }}
            >
              Premium Organic · Skardu, Gilgit Baltistan
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: 'clamp(2.6rem, 7vw, 5.5rem)',
              fontStyle: 'italic',
              fontWeight: 600,
              lineHeight: 1.08,
              marginBottom: '1.25rem',
              color: C.text,
            }}
          >
            Pure Himalayan Dry Fruits,
            <br />
            Direct from the Source
          </h1>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(237,245,235,0.72)',
              maxWidth: 560,
              margin: '0 auto 2.5rem',
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Arguni Dry Fruits brings the nutrient-rich treasures of the
            Karakoram and Himalaya to your table — sourced from verified farming
            families, naturally dried, and packed without additives.
          </p>
          <div
            className='hero-btns'
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href='#contact'
              className='cta-btn'
              style={{
                background: C.accent,
                color: '#0A0F0A',
                padding: '1rem 2.5rem',
                borderRadius: 100,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontSize: '0.78rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Order Direct ↗
            </a>
            <a
              href='#products'
              className='cta-outline'
              style={{
                border: '1px solid rgba(237,245,235,0.2)',
                color: 'rgba(237,245,235,0.8)',
                background: 'transparent',
                padding: '1rem 2.5rem',
                borderRadius: 100,
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontSize: '0.78rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Our Products
            </a>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            background: `linear-gradient(to bottom, transparent, ${C.base})`,
          }}
        />
      </section>

      {/* ── STATS ───────────────────────────────────────── */}
      <div
        style={{
          background: C.baseSoft,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div
          className='stats-row'
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '2.5rem clamp(1.5rem,5%,4rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
          }}
        >
          {[
            ['5+', 'Districts Sourced'],
            ['100%', 'Natural · No Additives'],
            ['6', 'Product Varieties'],
            ['Direct', 'Farm-to-Pack'],
          ].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  fontWeight: 600,
                  color: C.accent,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: C.textMuted,
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

      {/* ── STORY ───────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5%,4rem)',
          background: C.base,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: C.accent,
                marginBottom: '0.75rem',
              }}
            >
              Our Story
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                marginBottom: '1.5rem',
                color: C.text,
              }}
            >
              From the Himalayas
              <br />
              to your hands
            </h2>
            <p
              style={{
                color: C.textMuted,
                lineHeight: 1.85,
                marginBottom: '1.25rem',
                fontSize: '1rem',
              }}
            >
              Arguni Dry Fruits was born from a simple conviction: the
              extraordinary produce of Gilgit Baltistan — apricots dried on
              Hunza rooftops, walnuts cracked from century-old trees, chilgoza
              pine nuts hand-collected from remote Baltistan forests — deserves
              to reach consumers who genuinely value it.
            </p>
            <p
              style={{
                color: C.textMuted,
                lineHeight: 1.85,
                marginBottom: '1.25rem',
                fontSize: '1rem',
              }}
            >
              Based in Skardu and operating as a subsidiary of Synaptex
              Consultancy Pvt Ltd, we work directly with farming families across
              Hunza, Nagar, Ghanche, Astore, and Skardu districts. No middlemen.
              No mystery provenance. Every batch we pack can be traced back to
              the valley it came from.
            </p>
            <p
              style={{ color: C.textMuted, lineHeight: 1.85, fontSize: '1rem' }}
            >
              Our sourcing model is built on fair, direct trade — we pay growers
              above-market prices to incentivise quality and sustainable
              cultivation practices. When the farmers thrive, the produce is
              better. When the produce is better, our customers come back.
            </p>
          </div>
          <div
            style={{
              position: 'relative',
              borderRadius: 24,
              overflow: 'hidden',
              aspectRatio: '4/3',
            }}
          >
            <img
              src={IMG.valley}
              alt="Hunza Valley — home of Arguni's apricot orchards"
              onError={imgFallback}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                background:
                  'linear-gradient(to top, rgba(10,15,10,0.9), transparent)',
              }}
            >
              <p
                style={{
                  fontSize: 13,
                  color: 'rgba(237,245,235,0.7)',
                  fontStyle: 'italic',
                }}
              >
                The Hunza Valley — where Arguni's apricot orchards sit above
                2,400 metres
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ────────────────────────────────────── */}
      <section
        id='products'
        style={{
          padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5%,4rem)',
          background: C.baseSoft,
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: C.accent,
                marginBottom: '0.75rem',
              }}
            >
              What We Offer
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: C.text,
              }}
            >
              Our products
            </h2>
          </div>

          <div
            className='products-grid'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.25rem',
            }}
          >
            {PRODUCTS.map((p) => (
              <div
                key={p.name}
                className='product-card'
                style={{
                  background: C.cardBg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 20,
                  overflow: 'hidden',
                  cursor: 'default',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: 200,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    onError={imgFallback}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to bottom, transparent 50%, rgba(17,26,17,0.85) 100%)',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      background: C.accentDim,
                      border: `1px solid ${C.accentBorder}`,
                      borderRadius: 100,
                      padding: '3px 12px',
                      fontSize: 11,
                      fontWeight: 600,
                      color: C.accent,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3
                    style={{
                      fontFamily: "'Bodoni Moda', serif",
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: C.text,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: C.textMuted,
                      lineHeight: 1.7,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {p.desc}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 6,
                      marginBottom: '1rem',
                    }}
                  >
                    {p.nutrients.map((n) => (
                      <span
                        key={n}
                        style={{
                          background: C.accentDim,
                          border: `1px solid ${C.accentBorder}`,
                          borderRadius: 6,
                          padding: '2px 10px',
                          fontSize: 11,
                          color: C.accent,
                          fontWeight: 500,
                        }}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: 11,
                      color: C.textMuted,
                      borderTop: `1px solid ${C.border}`,
                      paddingTop: '0.75rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    🗓 {p.seasons}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKARDU BANNER ───────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          height: 380,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <img
          src={IMG.skardu}
          alt='Skardu, Gilgit Baltistan — home of Arguni Dry Fruits'
          onError={imgFallback}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(10,15,10,0.7)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 640,
            padding: '0 1.5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: C.accent,
              marginBottom: '1rem',
            }}
          >
            Based in Skardu, GB
          </p>
          <h2
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: C.text,
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Rooted in the region we source from
          </h2>
          <p
            style={{
              color: 'rgba(237,245,235,0.65)',
              fontSize: '1rem',
              lineHeight: 1.7,
            }}
          >
            Our physical presence in Skardu is what makes genuine direct
            sourcing possible. We visit the orchards, meet the farmers, and see
            every batch before it leaves the region.
          </p>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────── */}
      <section
        id='process'
        style={{
          padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5%,4rem)',
          background: C.base,
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: C.accent,
                marginBottom: '0.75rem',
              }}
            >
              How We Work
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                color: C.text,
              }}
            >
              From orchard to doorstep
            </h2>
          </div>
          <div
            className='process-grid'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.25rem',
            }}
          >
            {PROCESS.map((p) => (
              <div
                key={p.step}
                className='process-card'
                style={{
                  background: C.cardBg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 18,
                  padding: '2rem',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: C.accent,
                    opacity: 0.4,
                    lineHeight: 1,
                    marginBottom: '1.25rem',
                  }}
                >
                  {p.step}
                </div>
                <h3
                  style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: C.text,
                    marginBottom: '0.75rem',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: C.textMuted,
                    lineHeight: 1.75,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ETHICAL TRADE ───────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5%,4rem)',
          background: C.baseSoft,
          borderTop: `1px solid ${C.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {[
            {
              icon: '🌱',
              title: 'Naturally Organic',
              body: 'GB farmers have grown dry fruits without synthetic pesticides or fertilisers for generations. Organic is not a certification here — it is simply how things are done.',
            },
            {
              icon: '🤝',
              title: 'Fair to Farmers',
              body: 'We pay above-market prices directly to the families who grow our produce. No exploitation, no hidden deductions, no unnecessary middlemen cutting into grower income.',
            },
            {
              icon: '🏔️',
              title: 'Supporting Remote Communities',
              body: 'Many of the districts we source from have limited economic opportunities. Dry fruit sales are a primary income source — strong demand strengthens entire communities.',
            },
            {
              icon: '♻️',
              title: 'Sustainable Harvesting',
              body: 'We source only from orchards and forests where harvesting does not damage future yields. The chilgoza forests we work with are managed under sustainable collection agreements.',
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              style={{
                background: C.base,
                border: `1px solid ${C.border}`,
                borderRadius: 18,
                padding: '2rem',
              }}
            >
              <div style={{ fontSize: 32, marginBottom: '1rem' }}>{icon}</div>
              <h3
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: '0.75rem',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: C.textMuted,
                  lineHeight: 1.75,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BLOG ────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5%,4rem)',
          background: C.base,
          borderTop: `1px solid ${C.border}`,
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div
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
                  color: C.accent,
                  marginBottom: '0.75rem',
                }}
              >
                Learn More
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  color: C.text,
                }}
              >
                Articles about GB dry fruits
              </h2>
            </div>
            <Link
              href='/blog'
              style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                color: C.accent,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              All articles ↗
            </Link>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1rem',
            }}
          >
            {BLOG_LINKS.map(({ href, title, tag }) => (
              <Link
                key={href}
                href={href}
                className='blog-card'
                style={{
                  background: C.cardBg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding: '1.5rem',
                  display: 'block',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    background: C.accentDim,
                    border: `1px solid ${C.accentBorder}`,
                    color: C.accent,
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    padding: '3px 10px',
                    borderRadius: 100,
                    marginBottom: 12,
                  }}
                >
                  {tag}
                </span>
                <h3
                  style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: C.text,
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 12, color: C.accent, marginTop: 12 }}>
                  Read article →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / ORDER ─────────────────────────────── */}
      <section
        id='contact'
        style={{
          padding: 'clamp(5rem,10vw,8rem) clamp(1.5rem,5%,4rem)',
          background: C.baseSoft,
          borderTop: `1px solid ${C.border}`,
        }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: C.accent,
              marginBottom: '0.75rem',
            }}
          >
            Order Direct
          </p>
          <h2
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: C.text,
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}
          >
            Ready to taste the difference?
          </h2>
          <p
            style={{
              color: C.textMuted,
              fontSize: '1rem',
              lineHeight: 1.8,
              maxWidth: 520,
              margin: '0 auto 2.5rem',
            }}
          >
            Retail packs from 250g, bulk from 5kg, and custom corporate gifting
            packages available. Delivery anywhere in Pakistan. International
            export enquiries welcome.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            <a
              href='mailto:Synaptexconsultancypvtltd@gmail.com'
              className='cta-btn'
              style={{
                background: C.accent,
                color: '#0A0F0A',
                padding: '1rem 2.5rem',
                borderRadius: 100,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontSize: '0.78rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              ✉ Email Us
            </a>
            <a
              href='https://wa.me/923452502478'
              target='_blank'
              rel='noreferrer'
              className='cta-outline'
              style={{
                border: `1px solid ${C.accentBorder}`,
                color: C.text,
                background: 'transparent',
                padding: '1rem 2.5rem',
                borderRadius: 100,
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontSize: '0.78rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              💬 WhatsApp
            </a>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1rem',
              maxWidth: 640,
              margin: '0 auto',
            }}
          >
            {[
              {
                label: 'Email',
                value: 'Synaptexconsultancypvtltd@gmail.com',
                href: 'mailto:Synaptexconsultancypvtltd@gmail.com',
              },
              {
                label: 'WhatsApp',
                value: '+92-345-2502478',
                href: 'https://wa.me/923452502478',
              },
              {
                label: 'Office',
                value: 'Agha Hadi Chowk, Skardu, Gilgit Baltistan',
                href: null,
              },
            ].map(({ label, value, href }) => (
              <div
                key={label}
                style={{
                  background: C.base,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: '1.25rem',
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: C.textMuted,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: 6,
                  }}
                >
                  {label}
                </div>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel='noreferrer'
                    style={{
                      color: C.accent,
                      fontSize: 13,
                      lineHeight: 1.5,
                      display: 'block',
                      wordBreak: 'break-all',
                    }}
                  >
                    {value}
                  </a>
                ) : (
                  <span
                    style={{ color: C.text, fontSize: 13, lineHeight: 1.5 }}
                  >
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer
        style={{
          background: C.base,
          borderTop: `1px solid ${C.border}`,
          padding: '2.5rem clamp(1.5rem,5%,4rem)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 18 }}>🌿</span>
          <span
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: 15,
              fontWeight: 600,
              color: C.text,
            }}
          >
            Arguni Dry Fruits
          </span>
          <span style={{ color: C.textMuted, fontSize: 13 }}>
            · A Synaptex Consultancy subsidiary
          </span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link href='/' style={{ color: C.textMuted, fontSize: 13 }}>
            Synaptex Consultancy
          </Link>
          <Link href='/blog' style={{ color: C.textMuted, fontSize: 13 }}>
            Blog
          </Link>
          <span style={{ color: C.textMuted, fontSize: 13 }}>© 2026</span>
        </div>
      </footer>
    </>
  );
}
