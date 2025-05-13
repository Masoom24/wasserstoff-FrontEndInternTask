import React from 'react';
import styles from './Input.module.css';

// Define the props that this Input component accepts
interface InputProps {
  label: string; // Label text displayed above the input
  type?: string; // Input type (e.g., text, email, password), defaults to 'text'
  value: string; // Controlled input value
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Event handler for input change
  required?: boolean; // Whether the input is required (optional)
}

// Functional Input component with TypeScript
const Input: React.FC<InputProps> = ({
  label,
  type = 'text', // default input type is 'text'
  value,
  onChange,
  required = false, // default: not required
}) => {
  return (
    // Group the label and input together
    <div className={styles.inputGroup}>
      {/* Input label */}
      <label>{label}</label>

      {/* Controlled input element */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
