import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './MreApp.css';
import BurgerMenu from '../Menu/BurgerMenu';
// Importing pages
import RegisterPage from '../../pages/Register/RegisterPage';
import LoginPage from '../../pages/Login/LoginPage';
import NotesPage from '../../pages/Notes/NotesPage';
import EditorPage from '../../pages/Editor/EditorPage';
import WelcomePage from '../../pages/Welcome/WelcomePage';

export default function MreApp() {
  let navigate = useNavigate();

  return (
    <>
      <div className="mre-app">
        <BurgerMenu onNavigate={navigate} />
        <article>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/register" element={<RegisterPage onNavigate={() => navigate('/login')} />} />
            <Route path="/login" element={<LoginPage onNavigate={() => navigate('/notes')} />} />
            <Route path="/notes" element={<NotesPage onNavigate={() => navigate('/editor')} />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/errorPage" element={
              <div className="error-page">
                <h2>Access Denied!</h2>
              </div>
            } />
            {/* Opcionális: catch-all route */}
            <Route path="*" element={<WelcomePage />} />
          </Routes>
        </article>
      </div>
      <footer className="main-footer">
        2025 &copy; MyReportEditor
      </footer>
    </>
  );
}