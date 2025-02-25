"use client";
import React from "react";
//import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

export function Globe_data() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#000000",
    showAtmosphere: true,
    atmosphereColor: "#4d4d4d",
    atmosphereAltitude: 0.6,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 48.8566,
      startLng: 2.3522,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 35.6895,
      endLng: 139.6917,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 55.7558,
      endLng: 37.6173,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 40.7128,
      startLng: -74.0060,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 35.6895,
      startLng: 139.6917,
      endLat: 48.8566,
      endLng: 2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 55.7558,
      startLng: 37.6173,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative w-full aspect-square">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
}
