interface IconProps {
  className?: string;
}

export function DesignIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" className={className}>
      {/* Gem / diamond origami — faceted crystal shape */}
      <path d="M32 4 L48 18 L56 18 L32 60 L8 18 L16 18 Z" strokeWidth="1" />
      <path d="M16 18 L32 28 L48 18" strokeWidth="0.8" />
      <path d="M32 28 L32 60" strokeWidth="0.7" opacity="0.5" />
      <path d="M8 18 L32 28 L56 18" strokeWidth="0.6" opacity="0.4" />
      <path d="M22 18 L32 4 L42 18" strokeWidth="0.6" opacity="0.5" />
      <path d="M22 18 L32 28" strokeWidth="0.5" opacity="0.35" />
      <path d="M42 18 L32 28" strokeWidth="0.5" opacity="0.35" />
      <path d="M20 18 L32 44" strokeWidth="0.4" opacity="0.2" />
      <path d="M44 18 L32 44" strokeWidth="0.4" opacity="0.2" />
      {/* Small facet highlights */}
      <path d="M26 11 L32 4 L38 11 L32 18 Z" strokeWidth="0.4" opacity="0.3" fill="currentColor" fillOpacity="0.04" />
      <path d="M32 28 L40 18 L48 18 L32 44 Z" strokeWidth="0" fill="currentColor" fillOpacity="0.06" />
    </svg>
  );
}

export function DevelopIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" className={className}>
      {/* Origami crane / bird in flight */}
      <path d="M6 38 L24 20 L32 12 L40 20 L58 38" strokeWidth="1" />
      <path d="M24 20 L32 28 L40 20" strokeWidth="0.8" />
      <path d="M32 12 L32 28" strokeWidth="0.8" />
      <path d="M6 38 L24 34 L32 28 L40 34 L58 38" strokeWidth="0.7" />
      {/* Tail feathers */}
      <path d="M32 28 L28 44 L32 52 L36 44 Z" strokeWidth="0.8" />
      <path d="M32 52 L32 28" strokeWidth="0.5" opacity="0.4" />
      {/* Wing fold detail */}
      <path d="M6 38 L18 30 L24 20" strokeWidth="0.5" opacity="0.4" />
      <path d="M58 38 L46 30 L40 20" strokeWidth="0.5" opacity="0.4" />
      {/* Inner wing structure */}
      <path d="M15 34 L24 26 L28 22" strokeWidth="0.4" opacity="0.25" />
      <path d="M49 34 L40 26 L36 22" strokeWidth="0.4" opacity="0.25" />
      {/* Body shading */}
      <path d="M24 20 L32 28 L24 34 Z" fill="currentColor" fillOpacity="0.05" strokeWidth="0" />
      <path d="M40 20 L32 28 L40 34 Z" fill="currentColor" fillOpacity="0.08" strokeWidth="0" />
      <path d="M28 44 L32 28 L36 44 Z" fill="currentColor" fillOpacity="0.06" strokeWidth="0" />
    </svg>
  );
}

export function DeployIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" className={className}>
      {/* Origami rocket / ascending arrow shape */}
      <path d="M32 4 L44 24 L44 44 L32 56 L20 44 L20 24 Z" strokeWidth="1" />
      <path d="M20 24 L32 16 L44 24" strokeWidth="0.8" />
      <path d="M20 44 L32 36 L44 44" strokeWidth="0.7" />
      <path d="M32 16 L32 56" strokeWidth="0.5" opacity="0.4" />
      {/* Exhaust fins */}
      <path d="M20 44 L12 52 L20 48" strokeWidth="0.8" />
      <path d="M44 44 L52 52 L44 48" strokeWidth="0.8" />
      {/* Window / detail circle */}
      <circle cx="32" cy="28" r="4" strokeWidth="0.7" />
      <circle cx="32" cy="28" r="1.5" fill="currentColor" fillOpacity="0.1" strokeWidth="0.4" />
      {/* Panel lines */}
      <path d="M26 20 L26 40" strokeWidth="0.35" opacity="0.25" />
      <path d="M38 20 L38 40" strokeWidth="0.35" opacity="0.25" />
      {/* Shading */}
      <path d="M32 4 L44 24 L32 16 Z" fill="currentColor" fillOpacity="0.06" strokeWidth="0" />
      <path d="M32 36 L44 44 L32 56 Z" fill="currentColor" fillOpacity="0.04" strokeWidth="0" />
    </svg>
  );
}

export function ResearchIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" className={className}>
      {/* Origami tree / pine — layered triangles */}
      <path d="M32 4 L42 20 L36 20 L46 34 L38 34 L48 48 L16 48 L26 34 L18 34 L28 20 L22 20 Z" strokeWidth="1" />
      {/* Trunk */}
      <path d="M28 48 L28 58 L36 58 L36 48" strokeWidth="0.8" />
      {/* Inner tree layer lines */}
      <path d="M32 4 L32 20" strokeWidth="0.5" opacity="0.3" />
      <path d="M32 20 L32 34" strokeWidth="0.4" opacity="0.25" />
      <path d="M32 34 L32 48" strokeWidth="0.35" opacity="0.2" />
      {/* Left fold shadows */}
      <path d="M22 20 L32 8 L32 20 Z" fill="currentColor" fillOpacity="0.06" strokeWidth="0" />
      <path d="M18 34 L28 22 L28 34 Z" fill="currentColor" fillOpacity="0.05" strokeWidth="0" />
      <path d="M16 48 L26 36 L26 48 Z" fill="currentColor" fillOpacity="0.04" strokeWidth="0" />
      {/* Branch detail lines */}
      <path d="M27 14 L32 4 L37 14" strokeWidth="0.4" opacity="0.3" />
      <path d="M24 28 L32 18 L40 28" strokeWidth="0.35" opacity="0.25" />
      <path d="M22 42 L32 32 L42 42" strokeWidth="0.3" opacity="0.2" />
    </svg>
  );
}

export function AnalyzeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" className={className}>
      {/* Origami star / compass rose */}
      <path d="M32 2 L38 22 L58 22 L42 34 L48 54 L32 42 L16 54 L22 34 L6 22 L26 22 Z" strokeWidth="1" />
      {/* Inner pentagon */}
      <path d="M26 22 L38 22 L42 34 L32 42 L22 34 Z" strokeWidth="0.7" opacity="0.6" />
      {/* Fold lines from center */}
      <path d="M32 30 L32 2" strokeWidth="0.4" opacity="0.25" />
      <path d="M32 30 L58 22" strokeWidth="0.4" opacity="0.25" />
      <path d="M32 30 L48 54" strokeWidth="0.4" opacity="0.25" />
      <path d="M32 30 L16 54" strokeWidth="0.4" opacity="0.25" />
      <path d="M32 30 L6 22" strokeWidth="0.4" opacity="0.25" />
      {/* Center circle */}
      <circle cx="32" cy="30" r="4" strokeWidth="0.6" opacity="0.5" />
      <circle cx="32" cy="30" r="1.5" fill="currentColor" fillOpacity="0.12" strokeWidth="0" />
      {/* Facet shading */}
      <path d="M32 2 L38 22 L26 22 Z" fill="currentColor" fillOpacity="0.06" strokeWidth="0" />
      <path d="M38 22 L58 22 L42 34 Z" fill="currentColor" fillOpacity="0.04" strokeWidth="0" />
      <path d="M22 34 L16 54 L32 42 Z" fill="currentColor" fillOpacity="0.05" strokeWidth="0" />
    </svg>
  );
}

export function MarketIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" className={className}>
      {/* Origami hexagonal prism / globe shape */}
      <path d="M32 4 L52 14 L56 34 L44 52 L20 52 L8 34 L12 14 Z" strokeWidth="1" />
      {/* Inner hexagon */}
      <path d="M32 14 L44 20 L46 34 L38 44 L26 44 L18 34 L20 20 Z" strokeWidth="0.7" opacity="0.5" />
      {/* Connecting fold lines */}
      <path d="M32 4 L32 14" strokeWidth="0.5" opacity="0.3" />
      <path d="M52 14 L44 20" strokeWidth="0.5" opacity="0.3" />
      <path d="M56 34 L46 34" strokeWidth="0.5" opacity="0.3" />
      <path d="M44 52 L38 44" strokeWidth="0.5" opacity="0.3" />
      <path d="M20 52 L26 44" strokeWidth="0.5" opacity="0.3" />
      <path d="M8 34 L18 34" strokeWidth="0.5" opacity="0.3" />
      <path d="M12 14 L20 20" strokeWidth="0.5" opacity="0.3" />
      {/* Center */}
      <circle cx="32" cy="32" r="6" strokeWidth="0.6" opacity="0.4" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" fillOpacity="0.08" strokeWidth="0.3" opacity="0.5" />
      {/* Facet fills */}
      <path d="M32 4 L52 14 L44 20 L32 14 Z" fill="currentColor" fillOpacity="0.05" strokeWidth="0" />
      <path d="M8 34 L12 14 L20 20 L18 34 Z" fill="currentColor" fillOpacity="0.06" strokeWidth="0" />
    </svg>
  );
}

export function AutomationIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" className={className}>
      {/* Origami angular mechanical / butterfly shape */}
      <path d="M32 8 L48 4 L56 18 L48 32 L56 46 L48 60 L32 56 L16 60 L8 46 L16 32 L8 18 L16 4 Z" strokeWidth="1" />
      {/* Central spine */}
      <path d="M32 8 L32 56" strokeWidth="0.7" opacity="0.4" />
      {/* Cross structure */}
      <path d="M8 18 L56 18" strokeWidth="0.5" opacity="0.3" />
      <path d="M8 46 L56 46" strokeWidth="0.5" opacity="0.3" />
      <path d="M16 32 L48 32" strokeWidth="0.6" opacity="0.35" />
      {/* Diagonal fold lines */}
      <path d="M32 8 L48 18" strokeWidth="0.4" opacity="0.25" />
      <path d="M32 8 L16 18" strokeWidth="0.4" opacity="0.25" />
      <path d="M48 32 L56 18" strokeWidth="0.4" opacity="0.25" />
      <path d="M16 32 L8 18" strokeWidth="0.4" opacity="0.25" />
      <path d="M48 32 L56 46" strokeWidth="0.4" opacity="0.25" />
      <path d="M16 32 L8 46" strokeWidth="0.4" opacity="0.25" />
      <path d="M32 56 L48 46" strokeWidth="0.4" opacity="0.25" />
      <path d="M32 56 L16 46" strokeWidth="0.4" opacity="0.25" />
      {/* Facet fills */}
      <path d="M32 8 L48 4 L56 18 L48 18 Z" fill="currentColor" fillOpacity="0.06" strokeWidth="0" />
      <path d="M32 8 L16 4 L8 18 L16 18 Z" fill="currentColor" fillOpacity="0.04" strokeWidth="0" />
      <path d="M16 32 L8 46 L16 46 Z" fill="currentColor" fillOpacity="0.05" strokeWidth="0" />
      <path d="M48 32 L56 46 L48 46 Z" fill="currentColor" fillOpacity="0.05" strokeWidth="0" />
    </svg>
  );
}

export function ProductivityIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" className={className}>
      {/* Origami gear / sun — geometric cog */}
      {/* Outer gear teeth */}
      <path d="M28 4 L36 4 L38 10 L42 12 L48 8 L54 14 L50 20 L52 24 L58 26 L58 34 L52 36 L50 40 L54 46 L48 52 L42 48 L38 50 L36 56 L28 56 L26 50 L22 48 L16 52 L10 46 L14 40 L12 36 L6 34 L6 26 L12 24 L14 20 L10 14 L16 8 L22 12 L26 10 Z" strokeWidth="1" />
      {/* Inner circle */}
      <circle cx="32" cy="30" r="12" strokeWidth="0.8" />
      {/* Inner inner circle */}
      <circle cx="32" cy="30" r="6" strokeWidth="0.6" opacity="0.5" />
      {/* Spoke lines */}
      <path d="M32 18 L32 12" strokeWidth="0.5" opacity="0.3" />
      <path d="M32 42 L32 48" strokeWidth="0.5" opacity="0.3" />
      <path d="M20 30 L14 30" strokeWidth="0.5" opacity="0.3" />
      <path d="M44 30 L50 30" strokeWidth="0.5" opacity="0.3" />
      <path d="M23.5 21.5 L18 16" strokeWidth="0.4" opacity="0.25" />
      <path d="M40.5 38.5 L46 44" strokeWidth="0.4" opacity="0.25" />
      <path d="M40.5 21.5 L46 16" strokeWidth="0.4" opacity="0.25" />
      <path d="M23.5 38.5 L18 44" strokeWidth="0.4" opacity="0.25" />
      {/* Center dot */}
      <circle cx="32" cy="30" r="2" fill="currentColor" fillOpacity="0.1" strokeWidth="0.3" />
      {/* Subtle fills */}
      <path d="M28 4 L36 4 L38 10 L32 12 L26 10 Z" fill="currentColor" fillOpacity="0.04" strokeWidth="0" />
      <circle cx="32" cy="30" r="12" fill="currentColor" fillOpacity="0.03" />
    </svg>
  );
}

export function AdvisoryIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" className={className}>
      {/* Origami crown / mountain peaks — advisory / leadership */}
      <path d="M4 48 L14 16 L24 32 L32 8 L40 32 L50 16 L60 48 Z" strokeWidth="1" />
      {/* Base line */}
      <path d="M4 48 L60 48" strokeWidth="0.8" />
      {/* Inner fold structure */}
      <path d="M14 16 L32 48" strokeWidth="0.5" opacity="0.3" />
      <path d="M50 16 L32 48" strokeWidth="0.5" opacity="0.3" />
      <path d="M24 32 L32 48" strokeWidth="0.4" opacity="0.25" />
      <path d="M40 32 L32 48" strokeWidth="0.4" opacity="0.25" />
      <path d="M32 8 L32 48" strokeWidth="0.5" opacity="0.3" />
      {/* Cross bracing */}
      <path d="M14 16 L24 32" strokeWidth="0.4" opacity="0.25" />
      <path d="M50 16 L40 32" strokeWidth="0.4" opacity="0.25" />
      {/* Jewel at peak */}
      <circle cx="32" cy="8" r="2.5" strokeWidth="0.6" />
      <circle cx="14" cy="16" r="1.8" strokeWidth="0.5" opacity="0.6" />
      <circle cx="50" cy="16" r="1.8" strokeWidth="0.5" opacity="0.6" />
      {/* Facet shading */}
      <path d="M32 8 L24 32 L32 48 Z" fill="currentColor" fillOpacity="0.05" strokeWidth="0" />
      <path d="M32 8 L40 32 L32 48 Z" fill="currentColor" fillOpacity="0.07" strokeWidth="0" />
      <path d="M4 48 L14 16 L24 32 Z" fill="currentColor" fillOpacity="0.04" strokeWidth="0" />
      <path d="M60 48 L50 16 L40 32 Z" fill="currentColor" fillOpacity="0.04" strokeWidth="0" />
      {/* Base plate shadow */}
      <path d="M8 48 L56 48 L54 52 L10 52 Z" fill="currentColor" fillOpacity="0.03" strokeWidth="0" />
    </svg>
  );
}

export const SERVICE_ICON_MAP: Record<string, React.ComponentType<IconProps>> = {
  design: DesignIcon,
  develop: DevelopIcon,
  deploy: DeployIcon,
  research: ResearchIcon,
  analyze: AnalyzeIcon,
  market: MarketIcon,
  automation: AutomationIcon,
  productivity: ProductivityIcon,
  advisory: AdvisoryIcon,
};
