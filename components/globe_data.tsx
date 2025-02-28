"use client";
import React from "react";
//import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

export function Globe_data() {
  const globeConfig = {
    pointSize: 8,
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
    arcLength: 0.5,
    rings: 3,
    maxRings: 6,
    ringPropagationSpeed: 0.3,
    ringRepeatPeriod: 500,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  
  const ringPoints = [
    { lat: 48.8566, lng: 2.3522, color: "#00ff00" },
    { lat: 40.7128, lng: -74.0060, color: "#00ffff" },
    { lat: 35.6895, lng: 139.6917, color: "#ff00ff" },
  ];

  const sampleArcs = [
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
    },
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
      order: 8,
      startLat: 35.6895,
      startLng: 139.6917,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
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
      order: 10,
      startLat: 48.8566,
      startLng: 2.3522,
      endLat: 25.2048,
      endLng: 55.2708,
      arcAlt: 0.15,
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
      order: 12,
      startLat: 40.7128,
      startLng: -74.0060,
      endLat: 19.4326,
      endLng: -99.1332,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 13,
      startLat: 48.8566,
      startLng: 2.3522,
      endLat: 55.7558,
      endLng: 37.6173,
      arcAlt: 0.15,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 14,
      startLat: 35.6895,
      startLng: 139.6917,
      endLat: 28.6139,
      endLng: 77.2090,
      arcAlt: 0.2,
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
      order: 16,
      startLat: 48.8566,
      startLng: 2.3522,
      endLat: 59.9139,
      endLng: 10.7522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 17,
      startLat: 35.6895,
      startLng: 139.6917,
      endLat: 37.5665,
      endLng: 126.9780,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 18,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.35,
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
      order: 20,
      startLat: -33.9249,
      startLng: 18.4241,
      endLat: 25.2048,
      endLng: 55.2708,
      arcAlt: 0.3,
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

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative w-full aspect-square">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
}
