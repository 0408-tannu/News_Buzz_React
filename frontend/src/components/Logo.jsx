import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Logo = ({ height = 50 }) => {
  const { mode } = useContext(ThemeContext);
  const textColor = mode === 'dark' ? '#ffffff' : '#1e1e2f';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 310 64"
      height={height}
      fill="none"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="lBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00b4d8" />
          <stop offset="50%" stopColor="#0077b6" />
          <stop offset="100%" stopColor="#023e8a" />
        </linearGradient>
        <linearGradient id="lAccent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f72585" />
          <stop offset="100%" stopColor="#ff5400" />
        </linearGradient>
        <linearGradient id="lBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0077b6" />
          <stop offset="100%" stopColor="#00b4d8" />
        </linearGradient>
      </defs>

      {/* Hexagonal badge icon */}
      <g transform="translate(32, 32)">
        {/* Outer hexagon */}
        <polygon
          points="0,-26 22.5,-13 22.5,13 0,26 -22.5,13 -22.5,-13"
          fill="url(#lBlue)"
        />
        {/* Inner newspaper icon */}
        <rect x="-12" y="-14" width="24" height="28" rx="3" fill="white" opacity="0.95" />
        <rect x="-8" y="-10" width="10" height="3" rx="1" fill="#0077b6" />
        <rect x="-8" y="-5" width="16" height="2" rx="0.5" fill="#0077b6" opacity="0.4" />
        <rect x="-8" y="-1" width="16" height="2" rx="0.5" fill="#0077b6" opacity="0.3" />
        <rect x="-8" y="3" width="12" height="2" rx="0.5" fill="#0077b6" opacity="0.25" />
        <rect x="-8" y="7" width="14" height="2" rx="0.5" fill="#0077b6" opacity="0.2" />
        {/* Red "live" dot */}
        <circle cx="8" cy="-10" r="3" fill="url(#lAccent)" />
      </g>

      {/* "News" in bold */}
      <text
        x="66"
        y="42"
        fontFamily="'Quicksand', 'Inter', sans-serif"
        fontSize="36"
        fontWeight="800"
        fill={textColor}
        letterSpacing="-1"
      >
        News
      </text>

      {/* "Buzz" in gradient */}
      <text
        x="173"
        y="42"
        fontFamily="'Quicksand', 'Inter', sans-serif"
        fontSize="36"
        fontWeight="800"
        fill="url(#lBlue)"
        letterSpacing="-1"
      >
        Buzz
      </text>

      {/* Animated-style underline swoosh */}
      <path
        d="M173 50 Q200 55 260 48"
        stroke="url(#lAccent)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
