const express = require('express');
const cors = require('cors');
const sql = require('mssql');


const app = express();
app.use(cors());
app.use(express.json());

// MSSQL configuration
const dbConfig = {
  user: 'sa', // <--- use env only
  password: 'ACCB72A231B3BFE22361B62CBE9019611B691201FFA00F9602BB1FFAC67E+Mb2', // <--- use env only
  server: 'localhost', // <--- use env only
  database: 'MRE', // <--- use env only
  port: 1433, // <--- use env only
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// Registration endpoint
app.post('/api/register', async (req, res) => {
  const { userName, fullName } = req.body;  
  console.log("Received register request:", { userName, fullName });
  if (!userName || !fullName) {
    console.log("Missing data in request body");
    return res.json({ success: false, message: 'Missing data: username or full name.' });
  }
  // try {
  //   await connect(dbConfig);
  //   await query`
  //   IF EXISTS (SELECT * FROM Users WHERE UserName = N'Edo')
  //   BEGIN
  //   SELECT UserName, FullName FROM Users WHERE UserName = N'Edo';
  //   END
  //   GO
  //   `;
  //   console.log("User already registered!");
  //   res.json({ success: false });
  //   if (!res.json) {
  //     console.log("User already registered!");
  //     return res.json({ success: false, message: 'You are already registered. Select Login!' });
  //   }
  // } catch (err) {
  //   console.error("Database error:", err);
  //   res.json({ success: false, message: 'Database error: ' + err.message });
  // }

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

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend API is running at http://localhost:${PORT}`);
});