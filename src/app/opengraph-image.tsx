import { ImageResponse } from 'next/og';
import { person } from '@/lib/content';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          background: '#0a0f0d',
          padding: 72
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 8% 2%, rgba(0,96,57,0.24), rgba(0,0,0,0) 48%), radial-gradient(circle at 92% 22%, rgba(212,175,55,0.18), rgba(0,0,0,0) 52%), linear-gradient(155deg, #0a0f0d, #101915)'
          }}
        />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: 'rgba(17,131,79,0.2)',
              border: '1px solid rgba(211,173,55,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ fontSize: 30, fontWeight: 800, color: 'rgba(240,244,242,0.96)' }}>
              M
            </div>
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, color: 'rgba(232,239,236,0.96)' }}>
            {person.name}
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div
            style={{
              fontSize: 54,
              maxWidth: 980,
              lineHeight: 1.06,
              fontWeight: 700,
              color: 'rgba(248,252,250,0.98)'
            }}
          >
            Secure systems. Strong brands. Built for impact.
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 24,
              color: 'rgba(212,222,216,0.84)',
              maxWidth: 980
            }}
          >
            {person.headline}
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            fontSize: 18,
            color: 'rgba(211,173,55,0.88)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase'
          }}
        >
          IT Infrastructure, Cybersecurity, Digital Growth
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
