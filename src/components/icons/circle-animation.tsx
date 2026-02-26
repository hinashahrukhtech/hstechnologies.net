"use client";

export function CircleAnimation({ className = "" }: { className?: string }) {
  return (
    <div className={`text-[#888] dark:text-[#999] ${className}`}>
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring — slow continuous rotation */}
        <g className="origin-center animate-[spin_60s_linear_infinite]">
          <circle
            cx="200" cy="200" r="165"
            stroke="currentColor" strokeWidth="0.6"
            strokeDasharray="4 8"
            opacity="0.4"
          />
        </g>

        {/* Main concentric circles with staggered drawing animations */}
        <circle
          cx="200" cy="200" r="150"
          stroke="currentColor" strokeWidth="1.2"
          opacity="0.6"
          className="animate-circle-outer"
        />
        <circle
          cx="200" cy="200" r="120"
          stroke="currentColor" strokeWidth="0.9"
          opacity="0.5"
          className="animate-circle-mid"
        />
        <circle
          cx="200" cy="200" r="88"
          stroke="currentColor" strokeWidth="0.7"
          opacity="0.45"
          className="animate-circle-inner"
        />

        {/* Offset eccentric rings — organic feel */}
        <circle
          cx="208" cy="192" r="138"
          stroke="currentColor" strokeWidth="0.5"
          opacity="0.35"
          className="animate-circle-eccentric-1"
        />
        <circle
          cx="192" cy="210" r="105"
          stroke="currentColor" strokeWidth="0.5"
          opacity="0.3"
          className="animate-circle-eccentric-2"
        />

        {/* Floating orbital dots */}
        <g className="origin-center animate-[spin_20s_linear_infinite]">
          <circle cx="200" cy="42"  r="3.5" fill="currentColor" opacity="0.7" />
          <circle cx="348" cy="160" r="2.5" fill="currentColor" opacity="0.6" />
        </g>
        <g className="origin-center animate-[spin_28s_linear_infinite_reverse]">
          <circle cx="310" cy="330" r="3"   fill="currentColor" opacity="0.65" />
          <circle cx="70"  cy="290" r="2.8" fill="currentColor" opacity="0.55" />
        </g>
        <g className="origin-center animate-[spin_35s_linear_infinite]">
          <circle cx="95"  cy="110" r="3.2" fill="currentColor" opacity="0.6" />
          <circle cx="270" cy="75"  r="2"   fill="currentColor" opacity="0.5" />
          <circle cx="145" cy="345" r="2.5" fill="currentColor" opacity="0.55" />
        </g>

        {/* Center accent dot */}
        <circle cx="200" cy="200" r="2" fill="currentColor" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
          <animate attributeName="r" values="1.5;3;1.5" dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
