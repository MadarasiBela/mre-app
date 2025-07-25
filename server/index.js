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
  } else if (sanitizedUserName.length > 256 || sanitizedFullName.length > 256) {
    console.log("Username or full name too long");
    return res.json({ success: false, message: 'Username and full name must be at most 256 characters long.' });
  } else if (!/^[a-zA-Z0-9_]+$/.test(sanitizedUserName)) {
    console.log("Invalid characters in username");
    return res.json({ success: false, message: 'Invalid characters in username. Only alphanumeric characters and underscores are allowed.' });
  } else if (!/^[a-zA-Z\s]+$/.test(sanitizedFullName)) {
    console.log("Invalid characters in full name");
    return res.json({ success: false, message: 'Invalid characters in full name. Only alphabetic characters and spaces are allowed.' });
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
    // const result = await sql.query`
    //   SELECT * FROM Users WHERE UserName = ${sanitizedUserName} OR FullName = ${sanitizedFullName}
    // `;
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

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend API is running at http://localhost:${PORT}`);
});