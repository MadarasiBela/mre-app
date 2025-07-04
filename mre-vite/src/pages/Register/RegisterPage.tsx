import React, { useState } from 'react';
import './RegisterPage.css';
import Title from '../../components/Title/Title';
import CommonButton from '../../components/Button/CommonButton';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage(props: any) {
  const [userName, setUserName] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const navigate = useNavigate();
  // const footerMessage: string = "This is the Register page specific footer. Please register to use the MRE App!";
  // const footerExtra: string = "Only 256 characters. User name and full name are required.";

  const isValid: boolean =     userName.trim().length > 0  &&  fullName.trim().length > 0;

  const handleRegister = async () => {
    // Itt hívod meg a szervizt (pl. fetch vagy axios)
    const response = await registerUser(userName, fullName);
    if (response.success) {
      // Navigáció a NotesPage-re
      navigate('/notes');
    } else {
      // Hibakezelés
      alert("Sikertelen regisztráció!");
    }
  };

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
            placeholder="User name eg: Kóbor "
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
            placeholder="Full name eg: Kóbor János"
            value={fullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
          />
        </div>
        <CommonButton disabled={!isValid} onClick={handleRegister}>OK</CommonButton>
      </div>
    </div>
    {/* <Footer message={footerMessage} extra={footerExtra} /> */}
    </>
  );
}

async function registerUser(userName: string, fullName: string) {
  const response = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userName, fullName }),
  });
  return response.json();
}