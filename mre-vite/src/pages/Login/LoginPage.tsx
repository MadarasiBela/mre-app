// import React, { useState } from 'react';
import './LoginPage.css';
import Title from '../../components/Title/Title';
import CommonButton from '../../components/Button/CommonButton';
import '../../components/Button/CommonButton.css';
// import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
// import { sanitizeInput } from '../../utils/sanitizeHtml';
// import { loginUser } from '../../api/auth'; // Assuming you have an API function for login

type LoginPageProps = {
  onNavigate: (page: string) => void;
};

export default function LoginPage({ onNavigate }: LoginPageProps) {
  const [userName, setUserName] = useState<string>('');
  const validUsername: boolean = userName.trim().length > 0 && userName.trim().length < 256;
  const [error, setError] = useState<string | null>(null);
  // const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL || '/api';
  //const apiUrl = '/api'; // For local development

    const handleLogin = async () => {
    setError(null); // delete any previous error message
    if (!validUsername) {
      setError("User name is required!");
      return;
    }
    try {
      console.log("Logging in user:", { userName });
      const response = await loginUser(userName, apiUrl);
      console.log("Login response:", response);
      // Check online status in DB here if needed

      if (response.success) {
        onNavigate('/notes');
      } else {
        setError(response.message || "Login failed!");
      }
    } catch (err: any) {
      setError("Network or server error: " + (err.message || err));
    }
  };

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
        <CommonButton disabled={!validUsername} onClick={handleLogin}>Login</CommonButton>
        {error && <div className="error-message">{error}</div>}
      </div>
    {/* <Footer message={footerMessage} extra={footerExtra} /> */}
    </>
  );
}

async function loginUser(userName: string, apiUrl: string) {
  console.log("Sending fetch to:", `${apiUrl}/api/login`);
  console.log("Payload:", { userName });
  const response = await fetch(`${apiUrl}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userName }),
  });
  console.log("Fetch response status:", response.status);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  const data = await response.json();
  console.log("Fetch response data:", data);
  return data;
}