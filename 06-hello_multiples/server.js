const express = require('express');
const { Pool } = require('pg');
const pool = new Pool({
  user: 'db',
  host: 'localhost',
  database: 'db',
  password: 'db',
  port: 5432,
});
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM personnes');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});