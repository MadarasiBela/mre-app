import React, { useState } from 'react';
import './BurgerMenu.css';

interface BurgerMenuProps {
  onNavigate?: (page: string) => void;
}

export default function BurgerMenu({ onNavigate }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);

  const handleMenuClick = (page: string) => {
    setOpen(false);
    if (onNavigate) onNavigate(page);
  };

  return (
    <div className="burger-menu-container">
      <button className="burger-icon" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>
      {open && (
        <nav className="burger-dropdown">
          <ul>
            <li onClick={() => handleMenuClick('Register')}>Register</li>
            <li onClick={() => handleMenuClick('Login')}>Login</li>
            <li onClick={() => handleMenuClick('Notes')}>Notes</li>
            <li onClick={() => handleMenuClick('Editor')}>Editor</li>
          </ul>
        </nav>
      )}
    </div>
  );
}