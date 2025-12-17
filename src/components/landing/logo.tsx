"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group relative">
      {/* Logo Icon Container */}
      <div className="relative">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        
        {/* Main Icon */}
        <div className="relative w-10 h-10 flex items-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10"
          >
            {/* Background with gradient */}
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="logoStrokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(168, 85, 247)" />
                <stop offset="50%" stopColor="rgb(139, 92, 246)" />
                <stop offset="100%" stopColor="rgb(59, 130, 246)" />
              </linearGradient>
            </defs>
            
            {/* Rounded background */}
            <rect
              width="32"
              height="32"
              rx="8"
              fill="url(#logoGradient)"
              className="group-hover:opacity-100 transition-opacity duration-300"
            />
            
            {/* Main shape */}
            <path
              d="M8 12L16 8L24 12V20L16 24L8 20V12Z"
              stroke="url(#logoStrokeGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="transition-all duration-300 group-hover:stroke-[2.5]"
            />
            
            {/* Inner lines */}
            <path
              d="M16 8V16M16 16L8 12M16 16L24 12"
              stroke="url(#logoStrokeGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300 group-hover:stroke-[2.5]"
            />
            
            {/* Animated dot in center */}
            <circle
              cx="16"
              cy="16"
              r="2"
              fill="url(#logoStrokeGradient)"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </svg>
        </div>
      </div>
      
      {/* Logo Text */}
      <div className="relative">
        <span className="text-xl font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
          Bruii
        </span>
        {/* Underline effect */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
      </div>
    </Link>
  );
}
