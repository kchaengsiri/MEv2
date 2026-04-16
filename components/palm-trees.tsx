'use client';

export function PalmTrees() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
      {/* Left palm tree */}
      <svg
        className="absolute -left-8 bottom-12 h-[420px] w-auto opacity-15"
        style={{
          animation: 'palm-sway 8s ease-in-out infinite',
          transformOrigin: 'bottom center',
        }}
        viewBox="0 0 120 400"
        fill="none"
        aria-hidden="true"
      >
        {/* Trunk */}
        <path
          d="M60,400 Q55,300 58,220 Q60,180 62,140"
          stroke="#8fa3b8"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Trunk texture lines */}
        <path d="M55,380 Q58,375 63,378" stroke="#6b8399" strokeWidth="1.5" fill="none" />
        <path d="M54,350 Q58,345 64,348" stroke="#6b8399" strokeWidth="1.5" fill="none" />
        <path d="M55,320 Q58,315 63,318" stroke="#6b8399" strokeWidth="1.5" fill="none" />
        <path d="M56,290 Q59,285 63,288" stroke="#6b8399" strokeWidth="1.5" fill="none" />
        <path d="M57,260 Q59,255 62,258" stroke="#6b8399" strokeWidth="1.5" fill="none" />

        {/* Fronds */}
        <path d="M62,140 Q30,100 5,80" stroke="#1a6b7a" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M62,140 Q20,120 -5,135" stroke="#134e5e" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M62,140 Q90,95 115,75" stroke="#1a6b7a" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M62,140 Q100,115 120,130" stroke="#134e5e" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M62,140 Q55,90 40,55" stroke="#1a6b7a" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M62,140 Q70,85 85,50" stroke="#134e5e" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Coconuts */}
        <circle cx="58" cy="148" r="5" fill="#8fa3b8" opacity="0.5" />
        <circle cx="66" cy="145" r="4.5" fill="#8fa3b8" opacity="0.4" />
        <circle cx="62" cy="152" r="4" fill="#8fa3b8" opacity="0.3" />
      </svg>

      {/* Right palm tree — slightly different proportions */}
      <svg
        className="absolute -right-4 bottom-8 h-[340px] w-auto opacity-10"
        style={{
          animation: 'palm-sway-alt 10s ease-in-out infinite',
          transformOrigin: 'bottom center',
        }}
        viewBox="0 0 120 400"
        fill="none"
        aria-hidden="true"
      >
        {/* Trunk */}
        <path
          d="M55,400 Q60,310 58,230 Q56,190 58,150"
          stroke="#8fa3b8"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />

        {/* Fronds */}
        <path d="M58,150 Q25,110 0,95" stroke="#1a6b7a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M58,150 Q90,100 115,85" stroke="#1a6b7a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M58,150 Q30,130 5,145" stroke="#134e5e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M58,150 Q85,125 110,140" stroke="#134e5e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M58,150 Q50,95 38,60" stroke="#1a6b7a" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Coconuts */}
        <circle cx="55" cy="158" r="4" fill="#8fa3b8" opacity="0.4" />
        <circle cx="62" cy="155" r="3.5" fill="#8fa3b8" opacity="0.3" />
      </svg>
    </div>
  );
}
