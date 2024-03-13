const express = require('express');
const PORT = 3000;
const HOST = "0.0.0.0";

const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.DB_USER || 'superuser',
  host: process.env.DB_HOST || 'bdd',
  database: process.env.DB_NAME || 'db',
  password: process.env.DB_PASSWORD || 'mdp',
  port: process.env.DB_PORT || 5432,
});

pool.connect()
.then(() => {
  console.log('Connected to the database');
})
.catch(err => {
  console.error('Error connecting to the database:', err.message);
  process.exit(1); // Exit the application if unable to connect
});

const app = express();

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