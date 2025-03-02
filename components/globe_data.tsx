"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Suspense, useCallback } from "react";
import dynamic from "next/dynamic";

// Dynamically import the World component with SSR disabled
const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

export function Globe_data() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile devices for responsive adjustments
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Re-check on resize
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  // Globe configuration with responsive parameters
  const globeConfig = {
    pointSize: isMobile ? 4 : 8,
    globeColor: "#000000",
    showAtmosphere: true,
    atmosphereColor: "#4d4d4d",
    atmosphereAltitude: isMobile ? 0.3 : 0.6,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.5,
    rings: 3,
    maxRings: 6,
    ringPropagationSpeed: 0.3,
    ringRepeatPeriod: 500,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    // Increase rotation speed on mobile for better experience
    autoRotateSpeed: isMobile ? 0.7 : 0.5,
  };
  
  // Use useMemo to avoid recreating arrays on each render
  const colors = React.useMemo(() => ["#06b6d4", "#3b82f6", "#6366f1"], []);
  
  // Ring points - key locations to show rings animation
  const ringPoints = React.useMemo(() => [
    { lat: 48.8566, lng: 2.3522, color: "#00ff00" }, // Paris
    { lat: 40.7128, lng: -74.0060, color: "#00ffff" }, // New York
    { lat: 35.6895, lng: 139.6917, color: "#ff00ff" }, // Tokyo
  ], []);

  // Generate arcs data with memoization to prevent unnecessary re-renders
  const sampleArcs = useCallback(() => {
    // Base arcs that show up on all device sizes
    const baseArcs = [
      ...ringPoints.map((point, index) => ({
        order: index + 1,
        startLat: point.lat,
        startLng: point.lng,
        endLat: point.lat,
        endLng: point.lng,
        arcAlt: 0.1,
        color: point.color,
      })),
      {
        order: 4,
        startLat: 48.8566,
        startLng: 2.3522,
        endLat: 40.7128,
        endLng: -74.0060,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      },
      {
        order: 5,
        startLat: 35.6895,
        startLng: 139.6917,
        endLat: 48.8566,
        endLng: 2.3522,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      },
      {
        order: 6,
        startLat: 34.0522,
        startLng: -118.2437,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    ];

    // For desktop, add more complex arcs
    if (!isMobile) {
      return [
        ...baseArcs,
        {
          order: 7,
          startLat: 48.8566,
          startLng: 2.3522,
          endLat: -33.9249,
          endLng: 18.4241,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
          order: 9,
          startLat: -34.6037,
          startLng: -58.3816,
          endLat: 40.7128,
          endLng: -74.0060,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
          order: 11,
          startLat: 1.3521,
          startLng: 103.8198,
          endLat: 39.9042,
          endLng: 116.4074,
          arcAlt: 0.15,
          color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
          order: 15,
          startLat: -34.6037,
          startLng: -58.3816,
          endLat: -33.9249,
          endLng: 18.4241,
          arcAlt: 0.4,
          color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
          order: 19,
          startLat: -33.8688,
          startLng: 151.2093,
          endLat: 1.3521,
          endLng: 103.8198,
          arcAlt: 0.25,
          color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
          order: 21,
          startLat: 48.8566,
          startLng: 2.3522,
          endLat: 41.9028,
          endLng: 12.4964,
          arcAlt: 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        }
      ];
    }
    
    return baseArcs;
  }, [isMobile, colors, ringPoints]);

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative w-full aspect-square">
        {/* Gradient overlay for better visual integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none z-10" />
  
        {/* The actual globe component */}
        <Suspense fallback={null}>
          <World 
            data={sampleArcs()} 
            globeConfig={globeConfig}
          />
        </Suspense>
      </div>
    </div>
  );
}