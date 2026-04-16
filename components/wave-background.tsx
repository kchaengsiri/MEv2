'use client';

export function WaveBackground() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-48 overflow-hidden pointer-events-none z-0">
      {/* Wave Layer 1 — slowest, most transparent */}
      <svg
        className="absolute bottom-0 w-[200%] h-32 opacity-20"
        style={{ animation: 'wave-drift 25s linear infinite' }}
        viewBox="0 0 2880 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,60 C360,120 720,0 1080,60 C1440,120 1800,0 2160,60 C2520,120 2880,0 2880,60 L2880,120 L0,120 Z"
          fill="url(#wave1)"
        />
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#134e5e" />
            <stop offset="50%" stopColor="#1a6b7a" />
            <stop offset="100%" stopColor="#134e5e" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wave Layer 2 — medium speed */}
      <svg
        className="absolute bottom-0 w-[200%] h-24 opacity-30"
        style={{ animation: 'wave-drift 18s linear infinite' }}
        viewBox="0 0 2880 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,40 C480,100 960,0 1440,40 C1920,100 2400,0 2880,40 L2880,100 L0,100 Z" fill="url(#wave2)" />
        <defs>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a6b7a" />
            <stop offset="50%" stopColor="#0f1f3a" />
            <stop offset="100%" stopColor="#1a6b7a" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wave Layer 3 — fastest, most opaque */}
      <svg
        className="absolute bottom-0 w-[200%] h-16 opacity-50"
        style={{ animation: 'wave-drift-reverse 12s linear infinite' }}
        viewBox="0 0 2880 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,30 C320,70 640,10 960,30 C1280,70 1600,10 1920,30 C2240,70 2560,10 2880,30 L2880,80 L0,80 Z"
          fill="#0a1628"
        />
      </svg>
    </div>
  );
}
