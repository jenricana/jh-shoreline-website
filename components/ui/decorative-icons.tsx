export function DecorativeIcons() {
  return (
    <>
      {/* Bubbles */}
      <div className="absolute top-10 right-20 w-8 h-8 rounded-full border-2 border-blue-100 opacity-30"></div>
      <div className="absolute top-32 right-40 w-12 h-12 rounded-full border-2 border-blue-100 opacity-20"></div>
      <div className="absolute bottom-40 left-10 w-10 h-10 rounded-full border-2 border-blue-100 opacity-25"></div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full border-2 border-blue-100 opacity-20"></div>
      <div className="absolute bottom-20 right-1/3 w-14 h-14 rounded-full border-2 border-blue-100 opacity-15"></div>
      
      {/* Sparkles */}
      <div className="absolute top-20 left-16">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-100 opacity-40">
          <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute top-1/2 right-24">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-blue-100 opacity-35">
          <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute bottom-32 left-1/3">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-100 opacity-30">
          <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Squeegee Icons */}
      <div className="absolute top-40 right-12 opacity-20">
        <svg width="48" height="48" viewBox="0 0 100 100" fill="none" className="text-blue-100">
          <path d="M30 20 L70 20 L70 35 L30 35 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M48 35 L48 80 M52 35 L52 80" stroke="currentColor" strokeWidth="2"/>
          <ellipse cx="50" cy="83" rx="8" ry="4" fill="currentColor" opacity="0.3"/>
        </svg>
      </div>
      <div className="absolute bottom-24 left-20 opacity-15 rotate-45">
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" className="text-blue-100">
          <path d="M30 20 L70 20 L70 35 L30 35 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M48 35 L48 80 M52 35 L52 80" stroke="currentColor" strokeWidth="2"/>
          <ellipse cx="50" cy="83" rx="8" ry="4" fill="currentColor" opacity="0.3"/>
        </svg>
      </div>
      <div className="absolute top-2/3 right-1/4 opacity-18 -rotate-12">
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none" className="text-blue-100">
          <path d="M30 20 L70 20 L70 35 L30 35 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M48 35 L48 80 M52 35 L52 80" stroke="currentColor" strokeWidth="2"/>
          <ellipse cx="50" cy="83" rx="8" ry="4" fill="currentColor" opacity="0.3"/>
        </svg>
      </div>
    </>
  );
}
