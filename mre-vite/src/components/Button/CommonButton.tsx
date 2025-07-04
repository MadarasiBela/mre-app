import React from 'react';
import './CommonButton.css';

export default function CommonButton({ children = "OK", ...props }) {
  return (
    <button className="app-button" {...props}>
      {children}
    </button>
  );
}