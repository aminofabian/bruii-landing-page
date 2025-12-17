"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";

// Seeded random function for consistent values
function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

export default function AnimatedBackground() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate consistent random values
  const largeOrbs = useMemo(() => {
    const random = seededRandom(12345);
    return Array.from({ length: 6 }, (_, i) => ({
      size: random() * 400 + 300,
      left: random() * 100,
      top: random() * 100,
      duration: random() * 20 + 25,
      delay: random() * 10,
      colorIndex: i % 2,
    }));
  }, []);

  const mediumOrbs = useMemo(() => {
    const random = seededRandom(67890);
    return Array.from({ length: 12 }, (_, i) => ({
      size: random() * 200 + 150,
      left: random() * 100,
      top: random() * 100,
      duration: random() * 15 + 20,
      delay: random() * 8,
      colorIndex: i % 3,
    }));
  }, []);

  const sparkles = useMemo(() => {
    const random = seededRandom(11111);
    return Array.from({ length: 30 }, () => ({
      size: random() * 3 + 1,
      left: random() * 100,
      top: random() * 100,
      duration: random() * 8 + 5,
      delay: random() * 5,
    }));
  }, []);

  if (!mounted || !isDark) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Mesh Gradient Background - Primary Layer */}
      <div 
        className="absolute inset-0 opacity-40 animate-mesh-gradient"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(50, 41, 150, 0.25) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.25) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(50, 41, 150, 0.15) 0%, transparent 75%),
            radial-gradient(circle at 10% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 90% 20%, rgba(50, 41, 150, 0.2) 0%, transparent 50%)
          `,
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Secondary Animated Layer */}
      <div 
        className="absolute inset-0 opacity-30 animate-gradient-shift"
        style={{
          background: `
            radial-gradient(circle at 30% 60%, rgba(59, 130, 246, 0.2) 0%, transparent 55%),
            radial-gradient(circle at 70% 40%, rgba(50, 41, 150, 0.2) 0%, transparent 55%),
            radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 60% 20%, rgba(50, 41, 150, 0.15) 0%, transparent 45%)
          `,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Large Floating Orbs */}
      {largeOrbs.map((orb, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl animate-orb-float opacity-20"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            background: orb.colorIndex === 0 
              ? 'radial-gradient(circle, rgba(50, 41, 150, 0.3), transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)',
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}

      {/* Medium Floating Orbs */}
      {mediumOrbs.map((orb, i) => {
        const colors = [
          'rgba(50, 41, 150, 0.25)',
          'rgba(59, 130, 246, 0.25)',
          'rgba(139, 92, 246, 0.2)',
        ];
        
        return (
          <div
            key={`medium-orb-${i}`}
            className="absolute rounded-full blur-2xl animate-float opacity-15"
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              left: `${orb.left}%`,
              top: `${orb.top}%`,
              background: `radial-gradient(circle, ${colors[orb.colorIndex]}, transparent 70%)`,
              animationDuration: `${orb.duration}s`,
              animationDelay: `${orb.delay}s`,
              transform: `translate(-50%, -50%)`,
            }}
          />
        );
      })}

      {/* Small Sparkle Particles */}
      {sparkles.map((sparkle, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute rounded-full animate-float opacity-40"
          style={{
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent)`,
            boxShadow: `0 0 ${sparkle.size * 2}px rgba(59, 130, 246, 0.4)`,
            animationDuration: `${sparkle.duration}s`,
            animationDelay: `${sparkle.delay}s`,
          }}
        />
      ))}

      {/* Animated Wave Effect */}
      <div 
        className="absolute inset-0 opacity-10 animate-wave"
        style={{
          background: `
            linear-gradient(45deg, transparent 30%, rgba(50, 41, 150, 0.1) 50%, transparent 70%),
            linear-gradient(-45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)
          `,
          backgroundSize: '200% 200%',
        }}
      />
    </div>
  );
}

