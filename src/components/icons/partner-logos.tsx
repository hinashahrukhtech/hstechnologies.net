interface LogoProps {
  className?: string;
}

export function Chapter1Logo({ className = "" }: LogoProps) {
  return (
    <svg viewBox="0 0 160 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-[#2C2C2C] dark:text-[#e0e0e0] ${className}`}>
      <path
        d="M22 12 C10 14, 4 24, 4 34 C4 46, 12 54, 24 54 C30 54, 34 51, 36 48"
        stroke="#6B4F1D" strokeWidth="3.5" fill="none" strokeLinecap="round"
      />
      <path
        d="M30 10 L30 52" stroke="#6B4F1D" strokeWidth="3.5" strokeLinecap="round"
      />
      <path
        d="M22 18 L30 10" stroke="#6B4F1D" strokeWidth="3" strokeLinecap="round"
      />
      <text x="42" y="46" fontFamily="'Trebuchet MS', Arial, sans-serif" fontSize="18" fontWeight="800" fill="currentColor" letterSpacing="-0.3">Chapter</text>
      <text x="126" y="46" fontFamily="Georgia, 'Times New Roman', serif" fontSize="22" fontWeight="700" fill="#6B4F1D">1</text>
      <text x="42" y="58" fontFamily="Arial, sans-serif" fontSize="7.5" className="fill-[#999] dark:fill-[#888]" letterSpacing="0.2">Solutions (Private) Limited</text>
    </svg>
  );
}

export function FDHLogo({ className = "" }: LogoProps) {
  return (
    <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-[#3A3A3A] dark:text-[#e0e0e0] ${className}`}>
      <rect x="28" y="4" width="52" height="50" rx="0" stroke="#B49A2E" strokeWidth="2.8" fill="none" />
      <text
        x="54" y="38"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="20"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="3"
      >FDH</text>
      <text
        x="54" y="70"
        textAnchor="middle"
        fontFamily="'Trebuchet MS', Arial, sans-serif"
        fontSize="12"
        className="fill-[#555] dark:fill-[#999]"
        letterSpacing="0.5"
      >Development</text>
    </svg>
  );
}

export function NICLogo({ className = "" }: LogoProps) {
  return (
    <svg viewBox="0 0 190 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-[#111] dark:text-[#e8e8e8] ${className}`}>
      <text x="0" y="20" fontFamily="Arial, Helvetica, sans-serif" fontSize="20" fontWeight="900" fill="currentColor" letterSpacing="-0.2">National</text>
      <text x="0" y="42" fontFamily="Arial, Helvetica, sans-serif" fontSize="20" fontWeight="900" fill="currentColor" letterSpacing="-0.2">Incubation</text>
      <text x="0" y="64" fontFamily="Arial, Helvetica, sans-serif" fontSize="20" fontWeight="900" fill="currentColor" letterSpacing="-0.2">Center</text>
      <text x="0" y="74" fontFamily="Arial, Helvetica, sans-serif" fontSize="6.5" fontWeight="700" fill="#C4A215" fontStyle="italic" letterSpacing="0.4">Dream. Build. Rise</text>
      <text x="0" y="80" fontFamily="Arial, Helvetica, sans-serif" fontSize="4.5" className="fill-[#bbb] dark:fill-[#777]" letterSpacing="0.2">Funded by Ignite, MoITT</text>
    </svg>
  );
}

export function PepsiLogo({ className = "" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <clipPath id="pepsi-globe">
          <circle cx="50" cy="32" r="24" />
        </clipPath>
      </defs>
      {/* Globe background */}
      <circle cx="50" cy="32" r="24" fill="white" />
      <g clipPath="url(#pepsi-globe)">
        {/* Blue upper section */}
        <path d="M26 32 C30 18, 40 10, 50 8 C60 6, 70 10, 74 18 L74 32 Q62 24, 50 30 Q38 36, 26 32Z" fill="#004A93" />
        {/* Red lower section */}
        <path d="M26 32 Q38 28, 50 34 Q62 40, 74 32 L74 56 C68 56, 50 56, 26 56Z" fill="#D12631" />
        {/* White wave band */}
        <path d="M26 32 Q38 24, 50 32 Q62 40, 74 32" stroke="white" strokeWidth="4.5" fill="none" />
      </g>
      {/* Outer ring */}
      <circle cx="50" cy="32" r="24" fill="none" stroke="#eee" strokeWidth="0.3" />
      {/* "pepsi" text */}
      <text x="50" y="72" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="13" fill="#004A93" fontWeight="400" letterSpacing="0.5">pepsi</text>
    </svg>
  );
}

export function BurningBrownieLogo({ className = "" }: LogoProps) {
  return (
    <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer circle */}
      <circle cx="70" cy="34" r="30" fill="#F8E8C8" stroke="#5C3310" strokeWidth="2" />
      {/* Inner ring */}
      <circle cx="70" cy="34" r="26" fill="none" stroke="#5C3310" strokeWidth="0.8" opacity="0.4" />

      {/* Afro hair - large and voluminous */}
      <ellipse cx="70" cy="22" rx="20" ry="17" fill="#1C0F06" />
      <ellipse cx="62" cy="18" rx="8" ry="8" fill="#1C0F06" />
      <ellipse cx="78" cy="18" rx="8" ry="8" fill="#1C0F06" />
      <ellipse cx="56" cy="24" rx="6" ry="7" fill="#1C0F06" />
      <ellipse cx="84" cy="24" rx="6" ry="7" fill="#1C0F06" />
      {/* Hair texture curls */}
      <circle cx="60" cy="14" r="4" fill="#2A1A0E" />
      <circle cx="70" cy="11" r="4.5" fill="#2A1A0E" />
      <circle cx="80" cy="14" r="4" fill="#2A1A0E" />
      <circle cx="55" cy="20" r="3" fill="#2A1A0E" />
      <circle cx="85" cy="20" r="3" fill="#2A1A0E" />

      {/* Face */}
      <ellipse cx="70" cy="36" rx="11" ry="12" fill="#C07840" />
      {/* Ears */}
      <ellipse cx="58.5" cy="34" rx="2.5" ry="3.5" fill="#B06830" />
      <ellipse cx="81.5" cy="34" rx="2.5" ry="3.5" fill="#B06830" />
      {/* Eyes - whites */}
      <ellipse cx="65" cy="33" rx="3" ry="2.5" fill="white" />
      <ellipse cx="75" cy="33" rx="3" ry="2.5" fill="white" />
      {/* Pupils */}
      <circle cx="65.8" cy="33.2" r="1.5" fill="#1a1a1a" />
      <circle cx="75.8" cy="33.2" r="1.5" fill="#1a1a1a" />
      {/* Eye highlights */}
      <circle cx="66.3" cy="32.5" r="0.5" fill="white" />
      <circle cx="76.3" cy="32.5" r="0.5" fill="white" />
      {/* Eyebrows */}
      <path d="M62 30 Q65 28.5 68 30" stroke="#1C0F06" strokeWidth="0.8" fill="none" />
      <path d="M72 30 Q75 28.5 78 30" stroke="#1C0F06" strokeWidth="0.8" fill="none" />
      {/* Nose */}
      <path d="M68 36 Q70 38.5 72 36" stroke="#A06030" strokeWidth="0.8" fill="none" />
      {/* Mouth / smile */}
      <path d="M64 40 Q70 44 76 40" stroke="#6B3020" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M65 40.5 Q70 43 75 40.5" fill="#C0392B" opacity="0.5" />

      {/* Banner text curved along bottom of circle */}
      <path id="brownie-arc" d="M42 52 Q70 68 98 52" fill="none" />
      <text fontFamily="'Brush Script MT', 'Comic Sans MS', cursive" fontSize="10" fontWeight="700" fill="#5C3310" fontStyle="italic">
        <textPath href="#brownie-arc" startOffset="12%">Burning Brownie</textPath>
      </text>
    </svg>
  );
}

export function RodeKorsLogo({ className = "" }: LogoProps) {
  return (
    <svg viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Red cross */}
      <rect x="18" y="6" width="14" height="48" rx="1" fill="#D0021B" />
      <rect x="4" y="20" width="42" height="14" rx="1" fill="#D0021B" />
      {/* "Røde" */}
      <text x="58" y="32" fontFamily="Arial, Helvetica, sans-serif" fontSize="16" fontWeight="600" fill="#D0021B" letterSpacing="0.3">Røde</text>
      {/* "Kors" */}
      <text x="58" y="50" fontFamily="Arial, Helvetica, sans-serif" fontSize="16" fontWeight="600" fill="#D0021B" letterSpacing="0.3">Kors</text>
    </svg>
  );
}

export const PARTNER_LOGO_MAP: Record<string, React.ComponentType<LogoProps>> = {
  chapter1: Chapter1Logo,
  fdh: FDHLogo,
  nic: NICLogo,
  pepsi: PepsiLogo,
  "burning-brownie": BurningBrownieLogo,
  "rode-kors": RodeKorsLogo,
};
