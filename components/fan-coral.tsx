'use client';

export function FanCoral() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="absolute bottom-0 right-1/3 translate-x-full h-[280px] md:h-[350px] w-auto"
        viewBox="0 0 200 400"
        fill="none"
        aria-hidden="true"
        style={{
          animation: 'reef-sway 10s ease-in-out infinite',
          transformOrigin: 'bottom center',
        }}
      >
        <defs>
          {/* A gradient mimicking the water color depth from your palette */}
          <linearGradient id="coralTealGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a6b7a" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#134e5e" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0f1f3a" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Large Sea Fan Coral (Bézier curves) */}
        <path
          d="M100,400 Q95,250 110,180 C130,120 170,100 190,110 C170,80 130,60 100,80 C70,60 30,80 10,110 C30,100 70,120 90,180 Q105,250 100,400 Z"
          fill="url(#coralTealGradient)"
          style={{
            // Internal movement animation to make it look organic
            animation: 'coral-pulse 6s ease-in-out infinite',
            transformOrigin: 'center center',
          }}
        />
        {/* Fan veins for detail */}
        <path d="M100,380 Q98,250 110,185" stroke="#1a6b7a" strokeWidth="0.75" opacity="0.3" />
        <path d="M105,220 Q140,180 170,130" stroke="#1a6b7a" strokeWidth="0.5" opacity="0.2" />
        <path d="M95,220 Q60,180 30,130" stroke="#1a6b7a" strokeWidth="0.5" opacity="0.2" />

        {/* Sea Grasses in front */}
        <path d="M70,400 Q75,320 60,280" stroke="#8fa3b8" strokeWidth="3" strokeLinecap="round" opacity="0.2" />
        <path d="M85,400 Q90,300 110,250" stroke="#8fa3b8" strokeWidth="3.5" strokeLinecap="round" opacity="0.25" />
        <path d="M55,400 Q50,350 40,320" stroke="#8fa3b8" strokeWidth="2.5" strokeLinecap="round" opacity="0.15" />
      </svg>
    </div>
  );
}
