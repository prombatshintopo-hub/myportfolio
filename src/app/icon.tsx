import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 64,
  height: 64
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0f0d'
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: 'rgba(17,131,79,0.2)',
            border: '1px solid rgba(211,173,55,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: 'rgba(236,242,239,0.96)',
              fontFamily: 'sans-serif'
            }}
          >
            M
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
