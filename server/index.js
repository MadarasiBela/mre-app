const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const app = express();
app.use(cors());
app.use(express.json());

// MSSQL konfiguráció
const dbConfig = {
  user: 'SA',
  password: 'ACCB72A231B3BFE22361B62CBE9019611B691201FFA00F9602BB1FFAC67E+Mb1',
  server: 'localhost\\SQLEXPRESS',
  database: 'MRE',
  options: {
    encrypt: false, // fejlesztéshez
    trustServerCertificate: true,
  },
};

// Regisztrációs végpont
app.post('/api/register', async (req, res) => {
  const { userName, fullName } = req.body;
  if (!userName || !fullName) {
    return res.json({ success: false, message: 'Missing data: username or full name.' });
  }
  try {
    // MSSQL kapcsolat
    await sql.connect(dbConfig);
    await sql.query`
      INSERT INTO Users (UserName, FullName)
      VALUES (${userName}, ${fullName})
    `;
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: 'Database error: ' + err.message });
  }
});

// Szerver indítása
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend API is running at http://localhost:${PORT}`);
});