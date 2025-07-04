import React, { useState } from 'react';
import './LoginPage.css';
import Title from '../../components/Title/Title';
import CommonButton from '../../components/Button/CommonButton';
import '../../components/Button/CommonButton.css';
// import Footer from '../../components/Footer/Footer';
// import type {CurrentStatus} from '../../components/Title/Title'

// interface TitleProps {
//   title: string;
//   currentStatus?: CurrentStatus;
// }

export default function LoginPage() {
  const [userName, setUserName] = useState<string>('');
  const validUsername: boolean = userName.trim().length > 0;
  // const footerMessage: string = "Please login to access this App!";
  // const footerExtra: string = "You can login with your username."

  return (
    <>
      <Title title="Login" />
      {/* <h1>Sign in to MRE</h1> */}
      <div className="centered-controls">
        <h1>Sign in to MRE</h1>
        <div className="input-row-1">
          <label className="highlight-label-1">User name:</label>
          <input
            id="userName"
            maxLength={256}
            type="text"
            placeholder="Enter your user name! eg: Kóbor "
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        {/* <div className="input-row-2">
          <label className="highlight-label-2">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div> */}
        {/* <CommonButton disabled={!validUsername || !validPassword}>Login</CommonButton> */}
        <CommonButton disabled={!validUsername}>Login</CommonButton>
      </div>
    {/* <Footer message={footerMessage} extra={footerExtra} /> */}
    </>
  );
}