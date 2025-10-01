// src/icons/MetasploitIcon.jsx
import React from "react";

export default function MetasploitIcon({ className = "w-6 h-6", ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* stylized 'M' / spider-like glyph — generic, simple */}
      <defs>
        <linearGradient id="ms-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ff5f6d" />
          <stop offset="100%" stopColor="#ffc371" />
        </linearGradient>
      </defs>

      <rect width="64" height="64" rx="10" fill="transparent" />
      <path
        d="M16 44 L24 20 L32 34 L40 20 L48 44"
        fill="none"
        stroke="url(#ms-grad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="50" r="4" fill="url(#ms-grad)" />
    </svg>
  );
}
