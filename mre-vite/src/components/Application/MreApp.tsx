import React, { useState } from 'react';
import './MreApp.css';
import BurgerMenu from '../Menu/BurgerMenu';
// Importing pages
import RegisterPage from '../../pages/Register/RegisterPage';
import LoginPage from '../../pages/Login/LoginPage';
import NotesPage from '../../pages/Notes/NotesPage';
import EditorPage from '../../pages/Editor/EditorPage';
import WelcomePage from '../../pages/Welcome/WelcomePage';

export default function MreApp() {
  const [page, setPage] = useState<string>('Welcome');
  return (
    <>
      <div className="mre-app">
        <BurgerMenu onNavigate={setPage} />
        <article>
          {page === 'Welcome' && <WelcomePage />}
          {page === 'Register' && <RegisterPage onNavigate={setPage} />}
          {page === 'Login' && <LoginPage  onNavigate={setPage}/>}
          {page === 'Notes' && <NotesPage />}
          {page === 'Editor' && <EditorPage />}
        </article>
      </div>
      <footer className="main-footer">
        2025 &copy; MyReportEditor
      </footer>
    </>
  );
}