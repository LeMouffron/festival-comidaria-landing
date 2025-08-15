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
      <img
        src="/lovable-uploads/4688b523-2198-4b90-85b0-4b1c4e3cbdbe.png"
        alt="Festival Comidaria"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default FestivalLogo;