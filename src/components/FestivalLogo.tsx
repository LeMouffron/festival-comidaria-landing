import React from 'react';

interface FestivalLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const FestivalLogo: React.FC<FestivalLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-32',
    md: 'h-12 w-48',
    lg: 'h-16 w-64'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <svg
        viewBox="0 0 240 60"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="festivalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--festival-red))" />
            <stop offset="50%" stopColor="hsl(var(--festival-yellow))" />
            <stop offset="100%" stopColor="hsl(var(--festival-yellow2))" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--festival-blue))" />
            <stop offset="100%" stopColor="hsl(var(--festival-red))" />
          </linearGradient>
        </defs>
        
        {/* Stylized fork and knife background */}
        <path
          d="M15 10 L25 50 M20 10 L20 50 M25 10 L25 50"
          stroke="url(#accentGradient)"
          strokeWidth="2"
          opacity="0.3"
        />
        <circle cx="210" cy="30" r="15" fill="url(#accentGradient)" opacity="0.2" />
        
        {/* Main text */}
        <text
          x="40"
          y="25"
          fontSize="16"
          fontWeight="800"
          fill="url(#festivalGradient)"
          className="font-festival-bold"
        >
          FESTIVAL
        </text>
        <text
          x="40"
          y="45"
          fontSize="14"
          fontWeight="600"
          fill="url(#festivalGradient)"
          className="font-festival"
        >
          COMIDARIA
        </text>
        
        {/* Decorative elements */}
        <circle cx="170" cy="15" r="3" fill="hsl(var(--festival-yellow))" />
        <circle cx="180" cy="25" r="2" fill="hsl(var(--festival-red))" />
        <circle cx="175" cy="35" r="2.5" fill="hsl(var(--festival-yellow2))" />
      </svg>
    </div>
  );
};

export default FestivalLogo;