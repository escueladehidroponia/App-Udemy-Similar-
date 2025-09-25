
import React from 'react';

interface StarIconProps extends React.SVGProps<SVGSVGElement> {
  isHalf?: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({ isHalf = false, ...props }) => {
  const uniqueId = `grad-${React.useId()}`;
  return (
    <svg {...props} viewBox="0 0 24 24" fill={isHalf ? `url(#${uniqueId})` : 'currentColor'} xmlns="http://www.w3.org/2000/svg">
      {isHalf && (
        <defs>
          <linearGradient id={uniqueId}>
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="#D1D5DB" stopOpacity="1" />
          </linearGradient>
        </defs>
      )}
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
};

export default StarIcon;
