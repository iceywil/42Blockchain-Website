"use client";
// Let's use a non-strict approach to handle the useMemo warnings with ESLint
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3, Material } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

// Define a type for ring data
type RingData = {
  lat: number;
  lng: number;
  color: string;
  altitude: number;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  ringPropagationSpeed?: number;
  ringRepeatPeriod?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
  onLoad?: () => void;
}

// Type extension for proper TypeScript recognition

// @ts-ignore
interface ExtendedThreeGlobe extends ThreeGlobe {
  // Add missing methods to prevent TypeScript errors
  globeMaterial: () => Material & {
    color: Color;
    emissive: Color;
    emissiveIntensity: number;
    shininess: number;
  };
  atmosphereMaterial?: () => unknown;
  ringsData?: (data: RingData[]) => ExtendedThreeGlobe;
  ringColor?: (callback: (t: number) => string) => ExtendedThreeGlobe;
  ringMaxRadius?: (radius: number) => ExtendedThreeGlobe;
  ringPropagationSpeed?: (speed: number) => ExtendedThreeGlobe;
  ringRepeatPeriod?: (period: number) => ExtendedThreeGlobe;
}

export function Globe({ globeConfig, data, onLoad }: WorldProps) {
  const [globeData, setGlobeData] = useState<
    | {
        size: number;
        order: number;
        color: (t: number) => string;
        lat: number;
        lng: number;
      }[]
    | null
  >(null);

  const globeRef = useRef<ExtendedThreeGlobe | null>(null);
  const ringsRef = useRef<RingData[]>([]);

  const defaultProps = useMemo(() => ({
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ringPropagationSpeed: 3,
    ringRepeatPeriod: 500,
    ...globeConfig,
  }), [globeConfig]);

  // Building globe materials with proper atmosphere
  const _buildMaterial = useCallback(() => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    
    globeMaterial.color = new Color(globeConfig.globeColor);
    globeMaterial.emissive = new Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
    
    // Safely check if atmosphereMaterial exists
    try {
      if (typeof globeRef.current.atmosphereMaterial === 'function') {
        const atmosphereMaterial = globeRef.current.atmosphereMaterial();
        if (atmosphereMaterial && typeof atmosphereMaterial === 'object') {
          // Safely set opacity if the property exists
          if ('opacity' in atmosphereMaterial) {
            (atmosphereMaterial as { opacity: number }).opacity = 0.8;
          }
        }
      }
    } catch (error) {
      console.warn("Unable to access atmosphere material", error);
    }
  }, [globeConfig, globeRef]);

  // Building data points from arcs
  const _buildData = useCallback(() => {
    const arcs = data;
    const points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    // Remove duplicates for same lat and lng
    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ["lat", "lng"].every(
            (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
          )
        ) === i
    );

    setGlobeData(filteredPoints);
  }, [data, defaultProps.pointSize]);

  // Initialize data and materials
  useEffect(() => {
    if (globeRef.current) {
      _buildData();
      _buildMaterial();
      // Signal load complete
      if (onLoad) setTimeout(onLoad, 1000);
    }
  }, [_buildData, _buildMaterial, onLoad]);

  // Start animations
  const startAnimation = useCallback(() => {
    if (!globeRef.current || !globeData) return;

    // Configure arc animations
    globeRef.current
      .arcsData(data)
      .arcStartLat((d: object) => (d as Position).startLat * 1)
      .arcStartLng((d: object) => (d as Position).startLng * 1)
      .arcEndLat((d: object) => (d as Position).endLat * 1)
      .arcEndLng((d: object) => (d as Position).endLng * 1)
      .arcColor((arc: object) => (arc as Position).color)
      .arcAltitude((arc: object) => (arc as Position).arcAlt * 1)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((arc: object) => (arc as Position).order * 1)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime);

    // Configure point decorations
    globeRef.current
      .pointsData(data)
      .pointColor((point: object) => (point as Position).color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    // Safely configure rings
    try {
      const globe = globeRef.current;
      if (globe && typeof globe.ringsData === 'function' && 
          typeof globe.ringColor === 'function' && 
          typeof globe.ringMaxRadius === 'function' && 
          typeof globe.ringPropagationSpeed === 'function' && 
          typeof globe.ringRepeatPeriod === 'function') {
        
        globe.ringsData(ringsRef.current);
        globe.ringColor((t: number) => `rgba(255, 255, 255, ${1 - t})`);
        globe.ringMaxRadius(defaultProps.maxRings);
        globe.ringPropagationSpeed(defaultProps.ringPropagationSpeed || RING_PROPAGATION_SPEED);
        globe.ringRepeatPeriod(
          defaultProps.ringRepeatPeriod || 
          (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
        );
      }
    } catch (error) {
      console.warn("Unable to configure rings", error);
    }
  }, [data, defaultProps, globeData, globeRef]);

  // Setup hexagon polygons and start animation
  useEffect(() => {
    if (globeRef.current && globeData) {
      globeRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor(() => defaultProps.polygonColor);
      startAnimation();
    }
  }, [globeData, defaultProps, startAnimation]);

  // Animate rings on globe
  useEffect(() => {
    if (!globeRef.current || !globeData) return;

    // Generate initial rings
    const initialRings: RingData[] = [];
    for (let i = 0; i < Math.min(3, data.length); i++) {
      if (data[i]) {
        initialRings.push({
          lat: data[i].startLat,
          lng: data[i].startLng,
          color: data[i].color,
          altitude: 0,
        });
      }
    }
    ringsRef.current = initialRings;
    
    // Safely update rings data
    try {
      const globe = globeRef.current;
      if (globe && typeof globe.ringsData === 'function') {
        globe.ringsData(ringsRef.current);
      }
    } catch (error) {
      console.warn("Unable to update rings data", error);
    }

    // Animate rings on an interval
    const interval = setInterval(() => {
      if (!globeRef.current || !globeData) return;
      
      // Generate new rings at random data points
      const newRings: RingData[] = [];
      const numRings = Math.min(4, data.length);
      const indicesToUse = genRandomNumbers(0, data.length, numRings);
      
      for (let i = 0; i < indicesToUse.length; i++) {
        const idx = indicesToUse[i];
        // Add rings at both start and end points of arcs
        if (data[idx]) {
          // Start point ring
          newRings.push({
            lat: data[idx].startLat,
            lng: data[idx].startLng,
            color: data[idx].color,
            altitude: 0,
          });
          // End point ring
          newRings.push({
            lat: data[idx].endLat,
            lng: data[idx].endLng,
            color: data[idx].color,
            altitude: 0,
          });
        }
      }
      
      ringsRef.current = newRings;
      
      // Safely update rings data
      try {
        const globe = globeRef.current;
        if (globe && typeof globe.ringsData === 'function') {
          globe.ringsData(ringsRef.current);
        }
      } catch (error) {
        console.warn("Unable to update rings data in interval", error);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [data, globeData]);

  return (
    <>
      <threeGlobe ref={globeRef} />
    </>
  );
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, [gl, size.width, size.height]);

  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);
  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={globeConfig.autoRotateSpeed || 1}
        autoRotate={globeConfig.autoRotate !== false}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}