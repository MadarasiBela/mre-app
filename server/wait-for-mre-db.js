const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'ACCB72A231B3BFE22361B62CBE9019611B691201FFA00F9602BB1FFAC67E+Mb2',
  server: 'localhost',
  port: '1433',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
  database: 'master', // Always connect to master first
};

const targetDb = process.env.DB_DATABASE || 'MRE';

async function waitForDb() {
  const maxAttempts = 30;
  const delay = 2000; // 2 seconds
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`[wait-for-mre-db] Attempt ${attempt}: Connecting to SQL Server...`);
      const pool = await sql.connect(config);
      const result = await pool.request()
        .query(`SELECT name FROM sys.databases WHERE name = '${targetDb}'`);
      if (result.recordset.length > 0) {
        console.log(`[wait-for-mre-db] Database '${targetDb}' is ready!`);
        await pool.close();
        process.exit(0);
      } else {
        console.log(`[wait-for-mre-db] Database '${targetDb}' not found, waiting...`);
        await pool.close();
      }
    } catch (err) {
      console.log(`[wait-for-mre-db] SQL Server not ready yet: ${err.message}`);
    }
    await new Promise(res => setTimeout(res, delay));
  }
  console.error(`[wait-for-mre-db] Timeout: Database '${targetDb}' not available after ${maxAttempts * delay / 1000} seconds.`);
  process.exit(1);
}

waitForDb();