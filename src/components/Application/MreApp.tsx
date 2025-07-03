import React, { useState } from 'react';
import './MreApp.css';
import BurgerMenu from '../../components/Menu/BurgerMenu';
// import Footer from '../../components/Footer/Footer';
// Importing pages
import RegisterPage from '../../pages/Register/RegisterPage';
import LoginPage from '../../pages/Login/LoginPage';
import NotesPage from '../../pages/Notes/NotesPage';
import EditorPage from '../../pages/Editor/EditorPage';
// import EditorToolbar from '../../components/ToolBar/EditorToolbar';


export default function MreApp() {
  const [page, setPage] = useState<string>('welcome');
  // const [reportTitle, setReportTitle] = useState('');
  // let footerMessage = 'This is a common footer message on each MRE page.'
  // let footerExtra = '';

  // const footerMessage = "This is a common footer message on each MRE page.";
  // const footerExtra = "This is an extra message that can be used on specific pages.";
  return (
    <>
      <div className="mre-app">
        <BurgerMenu onNavigate={setPage} />
        <article>
          {page === 'welcome' && (
            <div className="welcome-page">
              <h1>Welcome to the Medical Record Editor (MRE) App!</h1>
              <p>Please select a menu item to get started.</p>
              <p>If you have already been registereed select <strong>Login</strong> </p>
              <p>else select <strong>Register</strong>!</p>
            </div>
          )}
          {page === 'Register' && <RegisterPage />}
          {page === 'Login' && <LoginPage />}
          {page === 'Notes' && <NotesPage />}
          {page === 'Editor' && <EditorPage />}
        </article>
        {/* <Footer message={footerMessage} extra={footerExtra} /> */}
      </div>
      <footer className="main-footer">
        2025 &copy; MyReportEditor
      </footer>
    </>
  );
}