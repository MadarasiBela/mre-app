const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const app = express();
app.use(cors());
app.use(express.json());

// MSSQL configuration
const dbConfig = {
  user: process.env.DB_USER, // <--- use env only
  password: process.env.DB_PASSWORD, // <--- use env only
  server: process.env.DB_SERVER, // <--- use env only
  database: process.env.DB_DATABASE, // <--- use env only
  port: parseInt(process.env.DB_PORT, 10), // <--- use env only
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// Regisztrációs végpont
app.post('/api/register', async (req, res) => {
  const { userName, fullName } = req.body;
  console.log("Received register request:", { userName, fullName });
  if (!userName || !fullName) {
    console.log("Missing data in request body");
    return res.json({ success: false, message: 'Missing data: username or full name.' });
  }
  try {
    await sql.connect(dbConfig);
    await sql.query`
      INSERT INTO Users (UserName, FullName)
      VALUES (${userName}, ${fullName})
    `;
    console.log("User registered successfully");
    res.json({ success: true });
  } catch (err) {
    console.error("Database error:", err);
    res.json({ success: false, message: 'Database error: ' + err.message });
  }
});

// Szerver indítása
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend API is running at http://localhost:${PORT}`);
});