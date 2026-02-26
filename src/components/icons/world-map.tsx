"use client";

import { useRef, useState, type FocusEvent, type MouseEvent } from "react";
import { useTheme } from "next-themes";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const HIDDEN_COUNTRIES = new Set(["010"]); // Antarctica

const HIGHLIGHTED_COUNTRIES = new Set([
  "840", // USA (incl. Alaska)
  "170", // Colombia
  "826", // United Kingdom
  "804", // Ukraine
  "578", // Norway
  "818", // Egypt
  "682", // Saudi Arabia
  "634", // Qatar
  "784", // United Arab Emirates
  "566", // Nigeria
  "384", // Cote d'Ivoire
  "854", // Burkina Faso
  "466", // Mali
  "140", // Central African Republic
  "231", // Ethiopia
  "800", // Uganda
  "404", // Kenya
  "728", // South Sudan
  "706", // Somalia
  "004", // Afghanistan
  "586", // Pakistan
  "356", // India
  "050", // Bangladesh
  "156", // China
  "104", // Myanmar
  "458", // Malaysia
  "392", // Japan
  "036", // Australia
  "554", // New Zealand
]);

export function WorldMap({ className = "" }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{
    countryName: string;
    x: number;
    y: number;
  } | null>(null);

  const updateTooltipFromMouse = (
    event: MouseEvent<SVGPathElement>,
    countryName: string,
  ) => {
    const containerBounds = mapContainerRef.current?.getBoundingClientRect();
    if (!containerBounds) return;

    setTooltip({
      countryName,
      x: event.clientX - containerBounds.left,
      y: event.clientY - containerBounds.top,
    });
  };

  const updateTooltipFromFocus = (
    event: FocusEvent<SVGPathElement>,
    countryName: string,
  ) => {
    const containerBounds = mapContainerRef.current?.getBoundingClientRect();
    if (!containerBounds) return;

    const countryBounds = event.currentTarget.getBoundingClientRect();
    setTooltip({
      countryName,
      x: countryBounds.left + countryBounds.width / 2 - containerBounds.left,
      y: countryBounds.top - containerBounds.top,
    });
  };

  return (
    <div ref={mapContainerRef} className={`relative ${className}`}>
      {tooltip ? (
        <div
          className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-[calc(100%+10px)] rounded-lg border border-slate-300/90 bg-white/95 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-slate-900 shadow-[0_8px_24px_rgba(15,23,42,0.2)] dark:border-slate-600/70 dark:bg-slate-900/95 dark:text-slate-100 dark:shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.countryName}
          <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-slate-300/90 bg-white/95 dark:border-slate-600/70 dark:bg-slate-900/95" />
        </div>
      ) : null}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 145,
          center: [0, 35],
        }}
        width={980}
        height={600}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) => !HIDDEN_COUNTRIES.has(geo.id))
              .map((geo) => {
                const isHighlighted = HIGHLIGHTED_COUNTRIES.has(geo.id);
                const props = geo.properties as { name?: string; NAME?: string };
                const countryName = props.name ?? props.NAME ?? "Unknown";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isHighlighted ? "#BB0000" : isDark ? "#2a2d3a" : "#D5D5D5"}
                    stroke={isDark ? "#1a1c25" : "#FFFFFF"}
                    strokeWidth={0.5}
                    onMouseEnter={
                      isHighlighted
                        ? (event) => updateTooltipFromMouse(event, countryName)
                        : undefined
                    }
                    onMouseMove={
                      isHighlighted
                        ? (event) => updateTooltipFromMouse(event, countryName)
                        : undefined
                    }
                    onMouseLeave={isHighlighted ? () => setTooltip(null) : undefined}
                    onFocus={
                      isHighlighted
                        ? (event) => updateTooltipFromFocus(event, countryName)
                        : undefined
                    }
                    onBlur={isHighlighted ? () => setTooltip(null) : undefined}
                    tabIndex={isHighlighted ? 0 : -1}
                    role={isHighlighted ? "img" : undefined}
                    aria-label={isHighlighted ? countryName : undefined}
                    style={{
                      default: {
                        outline: "none",
                        transition: "fill 240ms ease-in-out",
                      },
                      hover: {
                        outline: "none",
                        fill: isHighlighted ? "#D00000" : isDark ? "#2a2d3a" : "#D5D5D5",
                        transition: "fill 240ms ease-in-out",
                      },
                      pressed: { outline: "none" },
                    }}
                  >
                    {isHighlighted ? <title>{countryName}</title> : null}
                  </Geography>
                );
              })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
