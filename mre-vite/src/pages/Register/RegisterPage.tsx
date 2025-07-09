import React, { useState } from 'react';
import './RegisterPage.css';
import Title from '../../components/Title/Title';
import CommonButton from '../../components/Button/CommonButton';
import { useNavigate } from 'react-router-dom';

type RegisterPageProps = {
  onNavigate: (page: string) => void;
};

export default function RegisterPage({ onNavigate }: RegisterPageProps) {
  const [userName, setUserName] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const isValid = userName.trim().length > 0 && fullName.trim().length > 0;
  const apiUrl = import.meta.env.VITE_API_URL || '/api';

  const handleRegister = async () => {
    setError(null); // delete any previous error message
    if (!isValid) {
      setError("Both user name and full name are required!");
      return;
    }
    try {
      console.log("Registering user:", { userName, fullName, apiUrl });
      const response = await registerUser(userName, fullName, apiUrl);
      if (response.success) {
        navigate('/login');
      } else {
        setError(response.message || "Erroneous registration failed!");
      }
    } catch (err: any) {
      setError("Network or server error: " + (err.message || err));
    }
  };

  return (
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
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
}

async function registerUser(userName: string, fullName: string, apiUrl: string) {
  console.log("Sending fetch to:", `${apiUrl}/api/register`);
  console.log("Payload:", { userName, fullName });
  const response = await fetch(`${apiUrl}/api/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userName, fullName }),
  });
  console.log("Fetch response status:", response.status);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  const data = await response.json();
  console.log("Fetch response data:", data);
  return data;
}