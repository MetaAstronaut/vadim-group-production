'use client';

import * as React from "react";
import { useState, useEffect, useRef } from "react";

export const CityRotator = () => {
  const cities = [
    "Orlando",
    "Lake Nona",
    "Hunters Creek",
    "Winter Park",
    "Lake Mary",
    "Kissimmee",
    "Daytona Beach",
    "Cocoa Beach",
    "Titusville"
  ];
  
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [maxWidth, setMaxWidth] = useState(0);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Measure the width of the longest city name
  useEffect(() => {
    if (measureRef.current) {
      const width = measureRef.current.offsetWidth;
      setMaxWidth(width);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % cities.length);
        // Small delay to ensure the DOM has updated with new city off-screen
        requestAnimationFrame(() => {
             setIsExiting(false);
        });
      }, 600); // Match transition duration
    }, 3500); // 3.5 seconds pause between changes

    return () => clearInterval(interval);
  }, [cities.length]);

  // Find the longest city for measurement
  const longestCity = cities.reduce((a, b) => a.length > b.length ? a : b);

  return (
    <span 
      className="relative inline-block overflow-hidden"
      style={{ 
        width: maxWidth ? `${maxWidth}px` : 'auto',
        minWidth: '200px',
        height: '1.5em', // Increased to accommodate descenders
        verticalAlign: 'bottom',
        letterSpacing: '0.02em',
        lineHeight: '1.5',
        paddingBottom: '0.15em' // Extra space for descenders
      }}
    >
      {/* Hidden measurement span to calculate max width */}
      <span 
        ref={measureRef}
        className="opacity-0 pointer-events-none absolute whitespace-nowrap font-bold"
        aria-hidden="true"
        style={{ letterSpacing: '0.02em', lineHeight: '1.5' }}
      >
        {longestCity}
      </span>

      {/* Animated city name with absolute positioning */}
      <span 
        className={`
          absolute whitespace-nowrap text-white font-bold
          transition-transform duration-700 ease-out
        `}
        aria-live="polite"
        style={{ 
          letterSpacing: '0.02em',
          lineHeight: '1.5',
          left: '50%',
          top: 0,
          transform: isExiting ? 'translateX(-50%) translateY(-100%)' : 'translateX(-50%) translateY(0)'
        }}
      >
        {cities[index]}
      </span>
      
      {/* Hidden content for SEO crawlers */}
      <span className="sr-only" aria-hidden="true">
        Orlando, Lake Nona, Hunters Creek, Winter Park, Lake Mary, Kissimmee, Daytona Beach, Cocoa Beach, and Titusville
      </span>
    </span>
  );
};

