const express = require('express');
const cors = require('cors');
const sql = require('mssql');
const sanitizeHtml = require('sanitize-html'); // Importing sanitize-html for sanitizing HTML input


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

// Sanitize inputs to prevent XSS attacks
  const sanitizedUserName = sanitizeHtml(userName, {
    allowedTags: [],
    allowedAttributes: {}
  });
  const sanitizedFullName = sanitizeHtml(fullName, {
    allowedTags: [],
    allowedAttributes: {}
  });
  console.log("Sanitized inputs:", { sanitizedUserName, sanitizedFullName });

  // const { sanitizedUserName, sanitizedFullName } = req.body;
  // console.log("Sanitized inputs:", { sanitizedUserName, sanitizedFullName });

  // Validate inputs
  if (!sanitizedUserName || !sanitizedFullName) {
    console.log("Missing data in request body");
    return res.json({ success: false, message: 'Missing data: username or full name.' });
  } else if (sanitizedUserName.length < 1 || sanitizedFullName.length < 3) {
    console.log("Username or full name too short");
    return res.json({ success: false, message: 'Username and full name must be at least 1 characters long.' });
  } else if (sanitizedFullName.length < 3 ){
    console.log("Full name too short");
    return res.json({ success: false, message: 'Full name must be at least 3 characters long.' });
  } else if (sanitizedFullName.indexOf(' ') == -1) {
    console.log("Full name must contain at least one space");
    return res.json({ success: false, message: 'Full name must contain at least one space.' });
  } else if (sanitizedUserName.length > 256 || sanitizedFullName.length > 256) {
    console.log("Username or full name too long");
    return res.json({ success: false, message: 'Username and full name must be at most 256 characters long.' });
  } else if (!/^[\p{L}\p{N}_]+$/u.test(sanitizedUserName)) {
    console.log("Invalid characters in username");
    return res.json({ success: false, message: 'Invalid characters in username. Only letters, numbers and underscores are allowed.' });
  } else if (!/^[\p{L}\p{N}_ ]+$/u.test(sanitizedFullName)) {
    console.log("Invalid characters in full name");
    return res.json({ success: false, message: 'Invalid characters in full name. Only letters, numbers, spaces and underscores are allowed.' });
  } else if (sanitizedUserName.toLowerCase() === sanitizedFullName.toLowerCase()) {
    console.log("Username and full name cannot be the same");
    return res.json({ success: false, message: 'Username and full name cannot be the same.' });
  } /* html specialchars */ else if (sanitizedUserName.includes('<') || sanitizedUserName.includes('>') || sanitizedFullName.includes('<') || sanitizedFullName.includes('>')) {
    console.log("HTML special characters detected in username or full name");
    return res.json({ success: false, message: 'HTML special characters are not allowed in username or full name.' });
  }

  console.log("Validation passed, proceeding with registration");

  // Check if user already exists
  try {
    await sql.connect(dbConfig);

    const result = await sql.query`
      SELECT * FROM Users WHERE UserName = ${sanitizedUserName} 
    `;
    
    if (result.recordset.length > 0) {
      console.log("UserName already registered!");
      return res.json({ success: false, message: 'UserName already registered. Go to Login!' });
    }
  } catch (err) {
    console.error("Database error:", err);
    return res.json({ success: false, message: 'Database error: ' + err.message });
  }

  try {
    await sql.connect(dbConfig);
    await sql.query`
      INSERT INTO Users (UserName, FullName)
      VALUES (${sanitizedUserName}, ${sanitizedFullName})
    `;
    console.log("User registered successfully");
    res.json({ success: true });
  } catch (err) {
    console.error("Database error:", err);
    res.json({ success: false, message: 'Database error: ' + err.message });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { userName } = req.body;
  try {
    await sql.connect(dbConfig);
    // Check if user exists
    const userResult = await sql.query`
      SELECT Id FROM Users WHERE UserName = ${userName}
    `;
    if (userResult.recordset.length === 0) {
      return res.json({ success: false, message: 'User not found!' });
    }
    const userId = userResult.recordset[0].Id;

    // Set status to online
    await sql.query`
      MERGE UserStatus AS target
      USING (SELECT ${userId} AS UserID) AS source
      ON (target.UserID = source.UserID)
      WHEN MATCHED THEN
        UPDATE SET Logon = 1
      WHEN NOT MATCHED THEN
        INSERT (UserID, Logon) VALUES (${userId}, 1);
    `;

    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

// Check online status endpoint
app.post('/api/is-online', async (req, res) => {
  const { userName } = req.body;
  try {
    await sql.connect(dbConfig);
    const result = await sql.query`
      SELECT s.Logon
      FROM Users u
      JOIN UserStatus s ON u.Id = s.UserID
      WHERE u.UserName = ${userName}
    `;
    if (result.recordset.length > 0 && result.recordset[0].Logon) {
      res.json({ online: true });
    } else {
      res.json({ online: false });
    }
  } catch (err) {
    res.json({ online: false, message: err.message });
  }
});

// Notes endpoint
app.get('/api/notes', async (req, res) => {
  const userName = req.query.userName;
  try {
    await sql.connect(dbConfig);

    // Create Notes table if not exists
    await sql.query(`
      IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Notes' AND xtype='U')
      CREATE TABLE Notes (
        Id INT IDENTITY PRIMARY KEY,
        Title NVARCHAR(256) NOT NULL,
        Content NVARCHAR(MAX) NOT NULL,
        UserName NVARCHAR(256) NOT NULL
      )
    `);

    // Query notes for the querying user
    const result = await sql.query`
      SELECT Id, Title, Content, UserName
      FROM Notes
      WHERE UserName = ${userName}
    `;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend API is running at http://localhost:${PORT}`);
});