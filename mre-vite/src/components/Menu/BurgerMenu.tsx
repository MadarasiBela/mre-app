import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BurgerMenu.css';

interface BurgerMenuProps {
  onNavigate?: (path: string) => void;
}

export default function BurgerMenu({ onNavigate }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL || '/api';
  const location = useLocation();

  // Az aktuális útvonal alapján szűrjük a menüpontokat
  const currentPath = location.pathname;

  // Menüpontok definíciója
  const menuItems = [
    { label: 'Register', path: '/register', hideOn: ['/register', '/editor', '/notes'] },
    { label: 'Login', path: '/login', hideOn: ['/login', '/editor'] },
    { label: 'Notes', path: '/notes', hideOn: ['/', '/register', '/login', '/notes'] },
    { label: 'Editor', path: '/editor', hideOn: ['/', '/register', '/login', '/notes', '/editor'] },
    { label: 'Welcome', path: '/', hideOn: ['/'] },
  ];

  const handleMenuClick = async (page: string) => {
    setOpen(false);
    let path = '/welcome';

    if (page === 'Register') path = '/register';
    else if (page === 'Login') path = '/login';
    else if (page === 'Welcome') path = '/';
    else if (page === 'Notes' || page === 'Editor') {
      const response = await fetch(`${apiUrl}/api/is-online`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: localStorage.getItem('userName') || '' }),
      });
      const data = await response.json();
      if (data.isOnline) {
        path = `/${page.toLowerCase()}`;
      } else {
        path = '/login';
      }
    }
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
            {menuItems
              .filter(item => !item.hideOn.includes(currentPath))
              .map(item => (
                <li key={item.label} onClick={() => handleMenuClick(item.label)}>
                  {item.label}
                </li>
              ))}
          </ul>
        </nav>
      )}
    </div>
  );
}