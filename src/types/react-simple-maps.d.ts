declare module "react-simple-maps" {
  import {
    ComponentType,
    CSSProperties,
    FocusEventHandler,
    MouseEventHandler,
    ReactNode,
  } from "react";

  interface ProjectionConfig {
    scale?: number;
    center?: [number, number];
    rotate?: [number, number, number];
  }

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: ProjectionConfig;
    width?: number;
    height?: number;
    style?: CSSProperties;
    children?: ReactNode;
  }

  interface GeographiesChildrenArgs {
    geographies: GeographyType[];
  }

  interface GeographiesProps {
    geography: string | object;
    children: (args: GeographiesChildrenArgs) => ReactNode;
  }

  interface GeographyType {
    rsmKey: string;
    id: string;
    properties: Record<string, unknown>;
    type: string;
    geometry: object;
  }

  interface GeographyStyleState {
    outline?: string;
    fill?: string;
    stroke?: string;
    transition?: string;
  }

  interface GeographyProps {
    geography: GeographyType;
    key?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    children?: ReactNode;
    onMouseEnter?: MouseEventHandler<SVGPathElement>;
    onMouseMove?: MouseEventHandler<SVGPathElement>;
    onMouseLeave?: MouseEventHandler<SVGPathElement>;
    onFocus?: FocusEventHandler<SVGPathElement>;
    onBlur?: FocusEventHandler<SVGPathElement>;
    tabIndex?: number;
    role?: string;
    "aria-label"?: string;
    style?: {
      default?: GeographyStyleState;
      hover?: GeographyStyleState;
      pressed?: GeographyStyleState;
    };
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const ZoomableGroup: ComponentType<Record<string, unknown>>;
  export const Marker: ComponentType<Record<string, unknown>>;
  export const Line: ComponentType<Record<string, unknown>>;
  export const Annotation: ComponentType<Record<string, unknown>>;
}
