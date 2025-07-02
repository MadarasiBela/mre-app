import React, { useState } from 'react';
import './MreApp.css';
import BurgerMenu from '../../components/Menu/BurgerMenu';
import Footer from '../../components/Footer/Footer';
// Importing pages
import RegisterPage from '../../pages/Register/RegisterPage';
import LoginPage from '../../pages/Login/LoginPage';
import NotesPage from '../../pages/Notes/NotesPage';
import EditorPage from '../../pages/Editor/EditorPage';
import EditorToolbar from '../../components/ToolBar/EditorToolbar';


export default function MreApp() {
  const [page, setPage] = useState<string>('welcome');
  // const [reportTitle, setReportTitle] = useState('');
  let footerMessage = 'This is a common footer message on each MRE page.'
  let footerExtra = '';

  // if (page === RegisterPage) {
  //   footerExtra = (
  //     <div className="footer-extra">
  //       Support: <br /> Tel: +1 301 400 500 600, <br /> e-mail: customer.service@mre.com<br />
  //       Privacy: link todo<br />
  //       Terms of use: link todo<br />
  //       License: link todo<br />
  //       Copy Right: xyz Kft.
  //     </div>
  //   );
  // } else if (page === LoginPage) {
  //   footerExtra = (
  //     <div className="footer-extra">
  //       Enter your username and password!
  //       <br />
  //       <span>Any extra text for LogIn.</span>
  //     </div>
  //   );
  // } else if (page === NotesPage) {
  //   footerExtra = (
  //     <div className="footer-extra">
  //       You can search through completed reports here.
  //     <br />
  //       <span>Any extra text for Search.</span>
  //     </div>
  //   );
  // } else if (page === EditorPage) {
  //   footerExtra = (
  //     <div className="footer-extra">
  //       This is the report editing page. Here you can edit the selected report or write a new report.
  //       <br />
  //       <span>Any extra text for Edit.</span>
  //     </div>
  //   );
  // }

  return (
  // <DebugClassName className="mre-app">
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
      <Footer message={footerMessage} extra={footerExtra} />
    </div>
  // </DebugClassName>
  );
}