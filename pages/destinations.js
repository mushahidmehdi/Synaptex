import Head from 'next/head';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

const B = '#0E1117';
const BS = '#161C26';
const AC = '#4A90D4';
const TX = '#F0F6FF';
const MU = '#8B99B5';
const BR = 'rgba(139,153,181,0.12)';
const ease = 'cubic-bezier(.65,0,.35,1)';
const BASE = 'https://myservice.pk/en/hotels';

const COUNTRIES = [
  { name: 'Afghanistan', code: 'af' },
  { name: 'Albania', code: 'al' },
  { name: 'Algeria', code: 'dz' },
  { name: 'American Samoa', code: 'as' },
  { name: 'Andorra', code: 'ad' },
  { name: 'Angola', code: 'ao' },
  { name: 'Anguilla', code: 'ai' },
  { name: 'Antigua & Barbuda', code: 'ag' },
  { name: 'Argentina', code: 'ar' },
  { name: 'Armenia', code: 'am' },
  { name: 'Aruba', code: 'aw' },
  { name: 'Australia', code: 'au' },
  { name: 'Austria', code: 'at' },
  { name: 'Azerbaijan', code: 'az' },
  { name: 'Bahamas', code: 'bs' },
  { name: 'Bahrain', code: 'bh' },
  { name: 'Bangladesh', code: 'bd' },
  { name: 'Barbados', code: 'bb' },
  { name: 'Belarus', code: 'by' },
  { name: 'Belgium', code: 'be' },
  { name: 'Belize', code: 'bz' },
  { name: 'Benin', code: 'bj' },
  { name: 'Bermuda', code: 'bm' },
  { name: 'Bhutan', code: 'bt' },
  { name: 'Bolivia', code: 'bo' },
  { name: 'Bosnia & Herzegovina', code: 'ba' },
  { name: 'Botswana', code: 'bw' },
  { name: 'Brazil', code: 'br' },
  { name: 'British Virgin Islands', code: 'vg' },
  { name: 'Brunei', code: 'bn' },
  { name: 'Bulgaria', code: 'bg' },
  { name: 'Burkina Faso', code: 'bf' },
  { name: 'Burundi', code: 'bi' },
  { name: 'Cambodia', code: 'kh' },
  { name: 'Cameroon', code: 'cm' },
  { name: 'Canada', code: 'ca' },
  { name: 'Cape Verde', code: 'cv' },
  { name: 'Caribbean Netherlands', code: 'bq' },
  { name: 'Cayman Islands', code: 'ky' },
  { name: 'Central African Republic', code: 'cf' },
  { name: 'Chad', code: 'td' },
  { name: 'Chile', code: 'cl' },
  { name: 'China', code: 'cn' },
  { name: 'Colombia', code: 'co' },
  { name: 'Comoros', code: 'km' },
  { name: 'Congo - Brazzaville', code: 'cg' },
  { name: 'Congo - Kinshasa', code: 'cd' },
  { name: 'Cook Islands', code: 'ck' },
  { name: 'Costa Rica', code: 'cr' },
  { name: "Côte d'Ivoire", code: 'ci' },
  { name: 'Croatia', code: 'hr' },
  { name: 'Cuba', code: 'cu' },
  { name: 'Curaçao', code: 'cw' },
  { name: 'Cyprus', code: 'cy' },
  { name: 'Czechia', code: 'cz' },
  { name: 'Denmark', code: 'dk' },
  { name: 'Djibouti', code: 'dj' },
  { name: 'Dominica', code: 'dm' },
  { name: 'Dominican Republic', code: 'do' },
  { name: 'Ecuador', code: 'ec' },
  { name: 'Egypt', code: 'eg' },
  { name: 'El Salvador', code: 'sv' },
  { name: 'Equatorial Guinea', code: 'gq' },
  { name: 'Eritrea', code: 'er' },
  { name: 'Estonia', code: 'ee' },
  { name: 'Eswatini', code: 'sz' },
  { name: 'Ethiopia', code: 'et' },
  { name: 'Falkland Islands', code: 'fk' },
  { name: 'Faroe Islands', code: 'fo' },
  { name: 'Fiji', code: 'fj' },
  { name: 'Finland', code: 'fi' },
  { name: 'France', code: 'fr' },
  { name: 'French Polynesia', code: 'pf' },
  { name: 'Gabon', code: 'ga' },
  { name: 'Gambia', code: 'gm' },
  { name: 'Georgia', code: 'ge' },
  { name: 'Germany', code: 'de' },
  { name: 'Ghana', code: 'gh' },
  { name: 'Gibraltar', code: 'gi' },
  { name: 'Greece', code: 'gr' },
  { name: 'Greenland', code: 'gl' },
  { name: 'Grenada', code: 'gd' },
  { name: 'Guatemala', code: 'gt' },
  { name: 'Guinea', code: 'gn' },
  { name: 'Guinea-Bissau', code: 'gw' },
  { name: 'Guyana', code: 'gy' },
  { name: 'Haiti', code: 'ht' },
  { name: 'Honduras', code: 'hn' },
  { name: 'Hungary', code: 'hu' },
  { name: 'Iceland', code: 'is' },
  { name: 'India', code: 'in' },
  { name: 'Indonesia', code: 'id' },
  { name: 'Iran', code: 'ir' },
  { name: 'Iraq', code: 'iq' },
  { name: 'Ireland', code: 'ie' },
  { name: 'Isle of Man', code: 'im' },
  { name: 'Israel', code: 'il' },
  { name: 'Italy', code: 'it' },
  { name: 'Jamaica', code: 'jm' },
  { name: 'Japan', code: 'jp' },
  { name: 'Jordan', code: 'jo' },
  { name: 'Kazakhstan', code: 'kz' },
  { name: 'Kenya', code: 'ke' },
  { name: 'Kiribati', code: 'ki' },
  { name: 'Kosovo', code: 'xk' },
  { name: 'Kuwait', code: 'kw' },
  { name: 'Kyrgyzstan', code: 'kg' },
  { name: 'Laos', code: 'la' },
  { name: 'Latvia', code: 'lv' },
  { name: 'Lebanon', code: 'lb' },
  { name: 'Lesotho', code: 'ls' },
  { name: 'Liberia', code: 'lr' },
  { name: 'Libya', code: 'ly' },
  { name: 'Liechtenstein', code: 'li' },
  { name: 'Lithuania', code: 'lt' },
  { name: 'Luxembourg', code: 'lu' },
  { name: 'Macao SAR China', code: 'mo' },
  { name: 'Madagascar', code: 'mg' },
  { name: 'Malawi', code: 'mw' },
  { name: 'Malaysia', code: 'my' },
  { name: 'Maldives', code: 'mv' },
  { name: 'Mali', code: 'ml' },
  { name: 'Malta', code: 'mt' },
  { name: 'Mauritania', code: 'mr' },
  { name: 'Mauritius', code: 'mu' },
  { name: 'Mexico', code: 'mx' },
  { name: 'Micronesia', code: 'fm' },
  { name: 'Moldova', code: 'md' },
  { name: 'Monaco', code: 'mc' },
  { name: 'Mongolia', code: 'mn' },
  { name: 'Montenegro', code: 'me' },
  { name: 'Montserrat', code: 'ms' },
  { name: 'Morocco', code: 'ma' },
  { name: 'Mozambique', code: 'mz' },
  { name: 'Myanmar (Burma)', code: 'mm' },
  { name: 'Namibia', code: 'na' },
  { name: 'Nauru', code: 'nr' },
  { name: 'Nepal', code: 'np' },
  { name: 'Netherlands', code: 'nl' },
  { name: 'New Caledonia', code: 'nc' },
  { name: 'New Zealand', code: 'nz' },
  { name: 'Nicaragua', code: 'ni' },
  { name: 'Niger', code: 'ne' },
  { name: 'Nigeria', code: 'ng' },
  { name: 'Niue', code: 'nu' },
  { name: 'North Macedonia', code: 'mk' },
  { name: 'Northern Mariana Islands', code: 'mp' },
  { name: 'Norway', code: 'no' },
  { name: 'Oman', code: 'om' },
  { name: 'Pakistan', code: 'pk' },
  { name: 'Palau', code: 'pw' },
  { name: 'Palestinian Territories', code: 'ps' },
  { name: 'Panama', code: 'pa' },
  { name: 'Papua New Guinea', code: 'pg' },
  { name: 'Paraguay', code: 'py' },
  { name: 'Peru', code: 'pe' },
  { name: 'Philippines', code: 'ph' },
  { name: 'Poland', code: 'pl' },
  { name: 'Portugal', code: 'pt' },
  { name: 'Puerto Rico', code: 'pr' },
  { name: 'Qatar', code: 'qa' },
  { name: 'Romania', code: 'ro' },
  { name: 'Russia', code: 'ru' },
  { name: 'Rwanda', code: 'rw' },
  { name: 'St. Barthélemy', code: 'bl' },
  { name: 'St. Helena', code: 'sh' },
  { name: 'St. Kitts & Nevis', code: 'kn' },
  { name: 'St. Lucia', code: 'lc' },
  { name: 'St. Martin', code: 'mf' },
  { name: 'St. Pierre & Miquelon', code: 'pm' },
  { name: 'St. Vincent & Grenadines', code: 'vc' },
  { name: 'Samoa', code: 'ws' },
  { name: 'San Marino', code: 'sm' },
  { name: 'São Tomé & Príncipe', code: 'st' },
  { name: 'Saudi Arabia', code: 'sa' },
  { name: 'Senegal', code: 'sn' },
  { name: 'Serbia', code: 'rs' },
  { name: 'Seychelles', code: 'sc' },
  { name: 'Sierra Leone', code: 'sl' },
  { name: 'Singapore', code: 'sg' },
  { name: 'Sint Maarten', code: 'sx' },
  { name: 'Slovakia', code: 'sk' },
  { name: 'Slovenia', code: 'si' },
  { name: 'Solomon Islands', code: 'sb' },
  { name: 'South Africa', code: 'za' },
  { name: 'South Korea', code: 'kr' },
  { name: 'South Sudan', code: 'ss' },
  { name: 'Spain', code: 'es' },
  { name: 'Sri Lanka', code: 'lk' },
  { name: 'Sudan', code: 'sd' },
  { name: 'Suriname', code: 'sr' },
  { name: 'Svalbard & Jan Mayen', code: 'sj' },
  { name: 'Sweden', code: 'se' },
  { name: 'Switzerland', code: 'ch' },
  { name: 'Syria', code: 'sy' },
  { name: 'Taiwan', code: 'tw' },
  { name: 'Tajikistan', code: 'tj' },
  { name: 'Tanzania', code: 'tz' },
  { name: 'Thailand', code: 'th' },
  { name: 'Timor-Leste', code: 'tl' },
  { name: 'Togo', code: 'tg' },
  { name: 'Tonga', code: 'to' },
  { name: 'Trinidad & Tobago', code: 'tt' },
  { name: 'Tunisia', code: 'tn' },
  { name: 'Türkiye', code: 'tr' },
  { name: 'Turkmenistan', code: 'tm' },
  { name: 'Turks & Caicos Islands', code: 'tc' },
  { name: 'Uganda', code: 'ug' },
  { name: 'Ukraine', code: 'ua' },
  { name: 'United Arab Emirates', code: 'ae' },
  { name: 'United Kingdom', code: 'gb' },
  { name: 'United States', code: 'us' },
  { name: 'Uruguay', code: 'uy' },
  { name: 'U.S. Virgin Islands', code: 'vi' },
  { name: 'Uzbekistan', code: 'uz' },
  { name: 'Vanuatu', code: 'vu' },
  { name: 'Vatican City', code: 'va' },
  { name: 'Venezuela', code: 've' },
  { name: 'Vietnam', code: 'vn' },
  { name: 'Wallis & Futuna', code: 'wf' },
  { name: 'Yemen', code: 'ye' },
  { name: 'Zambia', code: 'zm' },
];

// Group alphabetically
const grouped = COUNTRIES.reduce((acc, c) => {
  const letter = c.name[0].toUpperCase();
  if (!acc[letter]) acc[letter] = [];
  acc[letter].push(c);
  return acc;
}, {});
const letters = Object.keys(grouped).sort();

export default function Destinations() {
  return (
    <>
      <Head>
        <title>
          Hotels in 220+ Countries Worldwide | Synaptex Travel Guide
        </title>
        <meta
          name='description'
          content='Find and book hotels in over 220 countries worldwide. Browse hotels in Saudi Arabia, UAE, Pakistan, Turkey, UK, USA, Malaysia and every country on earth — via myservice.pk, the global hotel booking platform.'
        />
        <meta
          name='keywords'
          content='hotels worldwide, book hotels 220 countries, global hotel booking, hotels Pakistan, hotels Saudi Arabia, hotels UAE, international hotel booking platform, myservice.pk'
        />
        <meta name='robots' content='index, follow' />
        <link
          rel='canonical'
          href='https://www.synaptexconsultancy.pk/destinations'
        />
        <meta
          property='og:title'
          content='Hotels in 220+ Countries | Synaptex Travel'
        />
        <meta
          property='og:description'
          content='Browse hotels in every country on earth. Book with free cancellation via myservice.pk.'
        />
        <meta
          property='og:url'
          content='https://www.synaptexconsultancy.pk/destinations'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400..900;1,400..900&family=Jost:wght@100..900&display=swap'
          rel='stylesheet'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Hotels Worldwide — 220+ Countries',
              url: 'https://www.synaptexconsultancy.pk/destinations',
              description:
                'Browse and book hotels in 220+ countries through myservice.pk global hotel booking platform.',
              publisher: {
                '@type': 'Organization',
                name: 'Synaptex Consultancy Pvt Ltd',
                url: 'https://www.synaptexconsultancy.pk',
              },
              about: {
                '@type': 'WebSite',
                name: 'myservice.pk',
                url: 'https://myservice.pk',
                description:
                  'Global hotel booking platform operating in 220+ countries with real-time prices and free cancellation.',
              },
            }),
          }}
        />
      </Head>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; background: ${B}; }
        body { font-family: 'Jost', sans-serif; font-weight: 300; background: ${B}; color: ${TX}; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        h1, h2, h3 { font-family: 'Bodoni Moda', serif; font-weight: 500; letter-spacing: -0.02em; line-height: 1.1; }
        a { text-decoration: none; color: inherit; }
        .country-link { display: flex; align-items: center; justify-content: space-between; padding: 0.65rem 0; border-bottom: 1px solid ${BR}; color: ${MU}; font-size: 0.9rem; transition: color 0.2s ${ease}; }
        .country-link:hover { color: ${TX}; }
        .country-link:hover .arrow { color: ${AC}; }
        .arrow { color: transparent; transition: color 0.2s ${ease}; flex-shrink: 0; }
        .letter-anchor { font-family: 'Bodoni Moda', serif; font-size: 1.6rem; color: ${AC}; margin-bottom: 0.5rem; display: block; }
      `}</style>

      {/* Minimal nav */}
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
            zIndex: -99,
            color: 'transparent',
          }}
        >
          Book a Hotel
        </a>
      </nav>

      {/* Hero */}
      <section
        style={{
          padding: 'clamp(4rem,8vw,6rem) clamp(1.5rem,5%,5rem)',
          borderBottom: `1px solid ${BR}`,
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', zIndex: -1 }}>
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
            220+ Countries
          </p>
          <h1
            style={{
              fontSize: 'clamp(2.5rem,6vw,4.5rem)',
              fontStyle: 'italic',
              marginBottom: '1.25rem',
            }}
          >
            Hotels worldwide
          </h1>
          <p
            style={{
              color: MU,
              fontSize: '1.05rem',
              lineHeight: 1.8,
              maxWidth: 600,
              marginBottom: '2rem',
            }}
          >
            Browse hotels in over 220 countries on{' '}
            <a
              href={`${BASE}/`}
              target='_blank'
              style={{
                color: AC,
                borderBottom: `1px solid rgba(74,144,212,0.3)`,
              }}
            >
              myservice.pk
            </a>
            . Compare real-time prices, read verified guest reviews, and book
            with free cancellation.
          </p>
          {/* Alphabet quick-nav */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {letters.map((l) => (
              <a
                key={l}
                href={`#letter-${l}`}
                style={{
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${BR}`,
                  borderRadius: 8,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: MU,
                  transition: `all 0.2s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = AC;
                  e.currentTarget.style.color = AC;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BR;
                  e.currentTarget.style.color = MU;
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Country grid */}
      <main
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: 'clamp(3rem,5vw,5rem) clamp(1.5rem,5%,5rem)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
            gap: '3rem 2rem',
          }}
        >
          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`}>
              <span className='letter-anchor'>{letter}</span>
              {grouped[letter].map((country) => (
                <a
                  key={country.code}
                  href={`${BASE}/${country.code}/`}
                  target='_blank'
                  className='country-link'
                >
                  <span>Hotels in {country.name}</span>
                  <HiOutlineArrowUpRight size={13} className='arrow' />
                </a>
              ))}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: BS,
          borderTop: `1px solid ${BR}`,
          padding: '2rem clamp(1.5rem,5%,5rem)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          alignItems: 'center',
        }}
      >
        <p style={{ fontSize: '0.82rem', color: MU }}>
          © 2025 Synaptex Consultancy Pvt Ltd.
        </p>
        <p style={{ fontSize: '0.82rem', color: 'transparent' }}>
          Powered by{' '}
          <a
            href={`${BASE}/`}
            target='_blank'
            style={{ color: AC, fontWeight: 500 }}
          >
            global hotel booking platform myservice.pk
          </a>
        </p>
      </footer>
    </>
  );
}
