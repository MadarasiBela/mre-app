import React, { useState } from 'react';
import './RegisterPage.css';
import Title from '../../components/Title/Title';
import CommonButton from '../../components/Button/CommonButton';
import Footer from '../../components/Footer/Footer';

export default function RegisterPage() {
  const [userName, setUserName] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const footerMessage: string = "This is the Register page specific footer. Please register to use the MRE App!";
  const footerExtra: string = "Only 256 characters. User name and full name are required.";

  const isValid: boolean =     userName.trim().length > 0  
                  &&  fullName.trim().length > 0;

  return (
    <>
    <div className="register-page">
      <Title title="Register" />
      <div className="centered-controls">
        <div className="input-row-1">
          <label className="highlight-label-1">User name:</label>
          <input
            id="userName"
            maxLength={256}
            type="text"
            placeholder="Enter user name eg: Kóbor "
            value={userName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
          />
        </div>
        <div className="input-row-2">
          <label className="highlight-label-2">Full name:</label>
          <input
            id="fullName"
            maxLength={256}
            type="text"
            placeholder="Enter your full name."
            value={fullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
          />
        </div>
        <CommonButton disabled={!isValid}>OK</CommonButton>
      </div>
    </div>
    <Footer message={footerMessage} extra={footerExtra} />
    </>
  );
}