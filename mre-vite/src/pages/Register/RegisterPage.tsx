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

  const handleRegister = async () => {
    setError(null); // előző hiba törlése
    try {
      const response = await registerUser(userName, fullName);
      if (response.success) {
        navigate('/login');
      } else {
        setError(response.message || "Sikertelen regisztráció!");
      }
    } catch (err: any) {
      setError("Hálózati vagy szerverhiba: " + (err.message || err));
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

async function registerUser(userName: string, fullName: string) {
  // const response = await fetch('http://localhost:3001/api/register', {
  const response = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userName, fullName }),
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  return response.json();
}