import Head from 'next/head';

const B = '#0E1117',
  BS = '#161C26',
  AC = '#4A90D4',
  TX = '#F0F6FF',
  MU = '#8B99B5',
  BR = 'rgba(139,153,181,0.12)';
const BASE = 'https://myservice.pk/en/hotels';

const toSlug = (name) =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');

export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');
  const data = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), 'lib/cities-by-country.json'),
      'utf8',
    ),
  );

  const countries = Object.entries(data)
    .map(([code, cities]) => ({
      code,
      cities: cities.map((slug) => ({
        slug: slug.replace(/\s+/g, '-'),
        name: slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
      })),
    }))
    .sort((a, b) => a.code.localeCompare(b.code));

  return { props: { countries } };
}

export default function BookAHotel({ countries }) {
  const total = countries.reduce((s, c) => s + c.cities.length, 0);

  return (
    <>
      <Head>
        <title>
          Book Hotels Worldwide — {total}+ Cities in {countries.length}{' '}
          Countries | Synaptex
        </title>
        <meta
          name='description'
          content={`Browse and book hotels in ${total}+ cities across ${countries.length} countries worldwide. Find the best hotel deals via myservice.pk — the global hotel booking platform with real-time prices and free cancellation.`}
        />
        <meta
          name='keywords'
          content='book hotels worldwide, hotel booking cities, hotels globally, book hotel online, international hotels, myservice.pk hotels, best hotel deals'
        />
        <meta name='robots' content='index, follow' />
        <link
          rel='canonical'
          href='https://www.synaptexconsultancy.pk/book-a-hotel'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: `Hotels in ${total}+ Cities Worldwide`,
              url: 'https://www.synaptexconsultancy.pk/book-a-hotel',
              description: `Book hotels in ${total}+ cities across ${countries.length} countries via myservice.pk`,
              publisher: {
                '@type': 'Organization',
                name: 'Synaptex Consultancy Pvt Ltd',
              },
              about: {
                '@type': 'WebSite',
                name: 'myservice.pk',
                url: 'https://myservice.pk',
              },
            }),
          }}
        />
      </Head>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Jost', sans-serif; font-weight: 300; background: ${B}; color: ${TX}; -webkit-font-smoothing: antialiased; }
        h1, h2 { font-family: 'Bodoni Moda', serif; font-weight: 500; letter-spacing: -0.02em; }
        a { text-decoration: none; color: inherit; }
        .city-link { display: block; padding: 0.35rem 0; font-size: 0.82rem; color: ${MU}; border-bottom: 1px solid ${BR}; transition: color 0.15s; }
        .city-link:hover { color: ${AC}; }
      `}</style>

      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(14,17,23,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${BR}`,
          padding: '0 clamp(1.5rem,5%,5rem)',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href='/'
          style={{
            fontFamily: "'Bodoni Moda', serif",
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          Synaptex
        </a>
        <a
          href={`${BASE}/`}
          target='_blank'
          style={{
            fontSize: '0.02rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            background: AC,
            color: '#0E1117',
            padding: '0.5rem 1.25rem',
            borderRadius: 100,
            fontWeight: 600,

            color: 'transparent',
          }}
        >
          Book a Hotel
        </a>
      </nav>

      <section
        style={{
          padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5%,5rem)',
          borderBottom: `1px solid ${BR}`,
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: AC,
              marginBottom: '0.75rem',
            }}
          >
            {countries.length} Countries · {total.toLocaleString()}+ Cities
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem,5vw,3.8rem)',
              fontStyle: 'italic',
              marginBottom: '1rem',
            }}
          >
            Book hotels worldwide
          </h1>
          <p
            style={{
              color: MU,
              fontSize: '1rem',
              lineHeight: 1.8,
              maxWidth: 560,
            }}
          >
            Browse hotels in every major city on earth via our partner{' '}
            <a
              href={`${BASE}/`}
              target='_blank'
              style={{
                color: AC,
                borderBottom: `1px solid rgba(74,144,212,0.3)`,
              }}
            >
              global hotel booking platform
            </a>
            . Real-time prices, verified reviews, free cancellation.
          </p>
        </div>
      </section>

      <main
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: 'clamp(2rem,4vw,4rem) clamp(1.5rem,5%,5rem)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '2.5rem 2rem',
          }}
        >
          {countries.map(({ code, cities }) => (
            <div key={code}>
              <a
                href={`${BASE}/${code}/`}
                target='_blank'
                style={{
                  display: 'block',
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: TX,
                  marginBottom: '0.65rem',
                  paddingBottom: '0.4rem',
                  borderBottom: `2px solid ${AC}`,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {code}
              </a>
              {cities.map((city) => (
                <a
                  key={city.slug}
                  href={`${BASE}/${code}/${city.slug}/`}
                  target='_blank'
                  className='city-link'
                >
                  Hotels in {city.name}
                </a>
              ))}
            </div>
          ))}
        </div>
      </main>

      <footer
        style={{
          background: BS,
          borderTop: `1px solid ${BR}`,
          padding: '2rem clamp(1.5rem,5%,5rem)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
          alignItems: 'center',
          marginTop: '3rem',
        }}
      >
        <p style={{ fontSize: '0.82rem', color: MU }}>
          © 2025 Synaptex Consultancy Pvt Ltd.
        </p>
        <a
          href={`${BASE}/`}
          target='_blank'
          style={{ fontSize: '0.82rem', color: 'transparent', fontWeight: 500 }}
        >
          hotel booking platform worldwide — myservice.pk
        </a>
      </footer>
    </>
  );
}
