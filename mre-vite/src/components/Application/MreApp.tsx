import React, { useState } from 'react';
import './MreApp.css';
import BurgerMenu from '../Menu/BurgerMenu';
// Importing pages
import RegisterPage from '../../pages/Register/RegisterPage';
import LoginPage from '../../pages/Login/LoginPage';
import NotesPage from '../../pages/Notes/NotesPage';
import EditorPage from '../../pages/Editor/EditorPage';


export default function MreApp() {
  const [page, setPage] = useState<string>('welcome');
  return (
    <>
      <div className="mre-app">
        <BurgerMenu onNavigate={setPage} />
        <article>
          {page === 'welcome' && (
            <div className="welcome-page">
              <h2>Welcome to the Medical Record Editor (MRE) App!</h2>
              <p>Please select a menu item to get started.</p>
              <p>If you have already been registered select <strong>Login</strong> </p>
              <p>else select <strong>Register</strong>!</p>
            </div>
          )}
          {page === 'Register' && <RegisterPage onNavigate={setPage} />}
          {page === 'Login' && <LoginPage />}
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