import { ImageResponse } from 'next/og';
import { site } from '@/config/site';

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Language-neutral share card used by every page (name + stack).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#084D46',
          color: '#F8F6F1',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ fontSize: 120, letterSpacing: -14, lineHeight: 1, fontWeight: 300 }}>JD</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05 }}>{site.name}</div>
          <div style={{ fontSize: 34, color: '#CFE0D9' }}>Full-Stack Engineer · Angular · .NET · React · Node.js</div>
        </div>
      </div>
    ),
    size,
  );
}
