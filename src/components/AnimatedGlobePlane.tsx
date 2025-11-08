const AnimatedGlobePlane = () => {
  return (
    <div className="relative w-24 h-24">
      {/* Globe */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        {/* Main circle */}
        <circle cx="50" cy="50" r="40" opacity="0.6" />
        
        {/* Latitude lines */}
        <ellipse cx="50" cy="50" rx="40" ry="15" opacity="0.4" />
        <ellipse cx="50" cy="50" rx="40" ry="25" opacity="0.4" />
        
        {/* Longitude lines */}
        <ellipse cx="50" cy="50" rx="15" ry="40" opacity="0.4" />
        <ellipse cx="50" cy="50" rx="25" ry="40" opacity="0.4" />
        <line x1="50" y1="10" x2="50" y2="90" opacity="0.4" />
        
        {/* Animated plane path */}
        <ellipse 
          cx="50" 
          cy="50" 
          rx="45" 
          ry="25" 
          opacity="0.2" 
          strokeDasharray="4 4"
          className="animate-[spin_8s_linear_infinite]"
          style={{ transformOrigin: '50% 50%' }}
        />
      </svg>
      
      {/* Animated Plane */}
      <div className="absolute inset-0 animate-[spin_8s_linear_infinite]" style={{ transformOrigin: '50% 50%' }}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="white"
        >
          <path
            d="M50 20 L58 28 L56 30 L50 26 L44 30 L42 28 Z M50 26 L50 32"
            transform="rotate(45 50 50)"
          />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedGlobePlane;
