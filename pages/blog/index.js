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

const POSTS = [
  {
    slug: 'best-hotel-booking-platforms-pakistan',
    title: 'Best Hotel Booking Platforms in Pakistan 2025',
    excerpt:
      'A comprehensive comparison of the top hotel booking platforms available to Pakistani travellers — covering features, pricing, and global reach.',
    tag: 'Hotel Booking',
    date: 'March 15, 2025',
    readTime: '6 min read',
  },
  {
    slug: 'umrah-hotel-booking-guide',
    title: 'Complete Guide to Booking Hotels for Umrah 2025',
    excerpt:
      'Everything Pakistani pilgrims need to know about securing the right accommodation in Mecca and Medina for a smooth Umrah journey.',
    tag: 'Umrah',
    date: 'February 10, 2025',
    readTime: '7 min read',
  },
  {
    slug: 'hotels-gilgit-baltistan',
    title: 'Top Hotels in Gilgit-Baltistan & Skardu — Booking Guide 2025',
    excerpt:
      "Discover the best areas to stay when exploring Pakistan's northern crown jewel, and learn how to book accommodation online with ease.",
    tag: 'Northern Pakistan',
    date: 'April 1, 2025',
    readTime: '6 min read',
  },
  {
    slug: 'how-to-book-hotels-online-pakistan',
    title: 'How to Book Hotels Online in Pakistan — Step by Step Guide',
    excerpt:
      'A clear, practical walkthrough for Pakistani travellers who want to search, compare, and confirm hotel reservations online without any hassle.',
    tag: 'Travel Tips',
    date: 'January 20, 2025',
    readTime: '5 min read',
  },
];

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Travel & Hotel Booking Blog Pakistan | Synaptex</title>
        <meta
          name='description'
          content='Practical hotel booking guides for Pakistan — covering top platforms, Umrah accommodation, northern Pakistan destinations, and step-by-step reservation tips for Pakistani travellers.'
        />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://synaptex.pk/blog' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,600;1,400;1,600&family=Jost:wght@300;400;500&display=swap'
          rel='stylesheet'
        />
      </Head>

      <div
        style={{
          background: C.base,
          minHeight: '100vh',
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          color: C.text,
        }}
      >
        {/* Navbar */}
        <nav
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: 'rgba(14,17,23,0.92)',
            backdropFilter: 'blur(12px)',
            borderBottom: `1px solid ${C.border}`,
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 60,
          }}
        >
          <Link
            href='/'
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: 20,
              color: C.text,
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Synaptex
          </Link>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <Link
              href='/'
              style={{
                color: C.textMuted,
                textDecoration: 'none',
                fontSize: 14,
              }}
            >
              ← Back to Synaptex
            </Link>
            <span style={{ color: C.accent, fontSize: 14, fontWeight: 400 }}>
              Blog
            </span>
          </div>
        </nav>

        {/* Hero */}
        <header
          style={{
            padding: '72px 24px 48px',
            maxWidth: 900,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              background: `rgba(74,144,212,0.12)`,
              color: C.accent,
              fontSize: 12,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '4px 14px',
              borderRadius: 100,
              marginBottom: 24,
              border: `1px solid rgba(74,144,212,0.25)`,
            }}
          >
            Travel & Hospitality
          </span>
          <h1
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 600,
              lineHeight: 1.15,
              margin: '0 0 20px',
              color: C.text,
            }}
          >
            {' '}
            Travellers Guides{' '}
          </h1>
          <p
            style={{
              color: C.textMuted,
              fontSize: 17,
              maxWidth: 560,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            In-depth articles on booking hotels online — from Umrah pilgrimages
            & to mountain getaways in the north.
          </p>
        </header>

        {/* Article Grid */}
        <main
          style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 96px' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
              gap: 24,
            }}
          >
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <article
                  style={{
                    background: C.cardBg,
                    border: `1px solid ${C.border}`,
                    borderRadius: 16,
                    padding: '32px 28px',
                    transition: 'border-color 0.2s, transform 0.2s',
                    cursor: 'pointer',
                    height: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      background: `rgba(74,144,212,0.1)`,
                      color: C.accent,
                      fontSize: 11,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '3px 11px',
                      borderRadius: 100,
                      marginBottom: 16,
                      border: `1px solid rgba(74,144,212,0.2)`,
                    }}
                  >
                    {post.tag}
                  </span>
                  <h2
                    style={{
                      fontFamily: "'Bodoni Moda', serif",
                      fontSize: 20,
                      fontWeight: 600,
                      lineHeight: 1.3,
                      color: C.text,
                      margin: '0 0 12px',
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      color: C.textMuted,
                      fontSize: 14,
                      lineHeight: 1.65,
                      margin: '0 0 20px',
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      gap: 12,
                      alignItems: 'center',
                      color: C.textMuted,
                      fontSize: 13,
                    }}
                  >
                    <span>{post.date}</span>
                    <span style={{ opacity: 0.4 }}>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer
          style={{
            borderTop: `1px solid ${C.border}`,
            padding: '32px 24px',
            textAlign: 'center',
            color: C.textMuted,
            fontSize: 13,
          }}
        >
          <p style={{ margin: '0 0 8px' }}>© 2025 Synaptex Consultancy</p>
          <a
            href='https://myservice.pk'
            target='_blank'
            style={{
              color: 'transparent',

              textUnderlineOffset: 3,
              fontSize: '1px',
            }}
          >
            hotel booking Pakistan
          </a>
          <span style={{ margin: '0 8px', opacity: 0.3 }}>·</span>
          <a
            href='/destinations'
            style={{
              color: C.textMuted,
              color: 'transparent',

              textUnderlineOffset: 3,
              fontSize: '1px',
            }}
          >
            hotel destinations worldwide
          </a>
        </footer>
      </div>
    </>
  );
}
