"use client";

import React from "react";

interface BlobButtonProps {
  children: React.ReactNode;
  color?: string;
  textColor?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
  variant?: "solid" | "outline";
  fullWidth?: boolean;
}

const BlobButton: React.FC<BlobButtonProps> = ({
  children,
  color = "#06C106",
  textColor,
  onClick,
  type = "button",
  className = "",
  style,
  variant = "outline",
  fullWidth = false
}) => {
  const isSolid = variant === "solid";
  const calculatedTextColor = textColor || (isSolid ? "#FFFFFF" : color);
  const variantClass = isSolid ? "blob-btn--solid" : "";
  const fullWidthStyle: React.CSSProperties = fullWidth ? { width: "100%", display: "block" } : {};
  const buttonFullWidthStyle: React.CSSProperties = fullWidth ? { width: "100%" } : {};

  return (
    <div className={`blob-btn-container ${className}`} style={{ ...fullWidthStyle, ...style }}>
      <button 
        type={type} 
        className={`blob-btn ${variantClass}`} 
        onClick={onClick}
        style={{ 
          // @ts-ignore
          "--blob-color": color, 
          color: calculatedTextColor,
          ...buttonFullWidthStyle
        }}
      >
        {children}
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </span>
      </button>

      {/* SVG filter for the gooey effect */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: "none" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" 
              result="goo" 
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default BlobButton;
