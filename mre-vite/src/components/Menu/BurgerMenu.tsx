import React, { useState } from 'react';
import './BurgerMenu.css';

interface BurgerMenuProps {
  onNavigate?: (path: string) => void;
}

export default function BurgerMenu({ onNavigate }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL || '/api';

  const handleMenuClick = async (page: string) => {
    setOpen(false);

    // Alapértelmezett útvonalak
    let path = '/welcome';

    if (page === 'Register') path = '/register';
    else if (page === 'Login') path = '/login';
    else if (page === 'Welcome') path = '/';
    else if (page === 'Notes' || page === 'Editor') {
      // Ellenőrizd, hogy a user online-e
      const response = await fetch(`${apiUrl}/api/is-online`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: localStorage.getItem('userName') || '' }),
      });
      const data = await response.json();
      if (data.isOnline) {
        if (page === 'Notes') path = '/notes';
        else if (page === 'Editor') path = '/editor';
        path = `/${page.toLowerCase()}`;
      } else {
        path = '/login'; // or go to an error page if preferred
      }
    }

    console.log(`Navigating to: ${path}`);
    if (onNavigate) onNavigate(path);
  };

  return (
    <div className="burger-menu-container">
      <button className="burger-icon" id="text" onClick={() => setOpen(!open)}>
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
            <li onClick={() => handleMenuClick('Welcome')}>Welcome</li>
          </ul>
        </nav>
      )}
    </div>
  );
}