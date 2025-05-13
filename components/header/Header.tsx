// components/Header.tsx
import React from 'react';

// Define the props that Header component accepts
interface HeaderProps {
  title: string;   // The main title to display
  subtitle: string; // A subtitle or description under the title
}

// Functional Header component
const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    // HTML header element to wrap the content
    <header>
      {/* Main title */}
      <h1>{title}</h1>

      {/* Subtitle below the main title */}
      <p>{subtitle}</p>
    </header>
  );
};

export default Header;
