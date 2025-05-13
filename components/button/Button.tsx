import React from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

// Define the props that the Button component accepts
interface ButtonProps {
  children: React.ReactNode; // The content inside the button (text, icon, etc.)
  link?: string;             // Optional: if provided, button acts as a link
  type?: 'submit' | 'button'; // Button type, defaults to 'button'
}

// Reusable Button component
const Button: React.FC<ButtonProps> = ({ children, link, type = 'button' }) => {
  // If a 'link' prop is provided, render a Next.js Link component
  if (link) {
    return (
      <Link href={link}>
        {/* Button styled as a link, but still behaves like a button */}
        <button type={type} className={styles.btn}>
          {children}
        </button>
      </Link>
    );
  }

  // Default: render a regular button
  return (
    <button type={type} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
