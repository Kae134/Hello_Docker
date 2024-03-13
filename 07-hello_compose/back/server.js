const express = require('express');
const cors = require('cors');
const path = require('path');



const { Pool } = require('pg');

const pgPool = new Pool({
  user: process.env.POSTGRES_USER || 'doc',
  host: process.env.POSTGRES_HOST || 'localhost',
  database: process.env.POSTGRES_DB || 'doc',
  password: process.env.POSTGRES_PASSWORD || 'doc',
  port: process.env.POSTGRES_PORT || 5432 ,
});


const indexPath = path.resolve(__dirname, 'index.html');


pgPool.connect()
.then(() => {
  console.log('Connected to the database');
})
.catch(err => {
  console.error('Error connecting to the database:', err.message);
  process.exit(1); // Exit the application if unable to connect
});

const app = express();

app.use(express.json());
app.use(cors());

// Une route pour récupérer les tâches
app.get('/tasks', async (req, res) => {
  try {
    const { rows } = await pgPool.query('SELECT * FROM tasks');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// Une route pour ajouter une tâche
app.post('/tasks', async (req, res) => {
  const { description } = req.body;
  if (!description) {
    return res.status(400).json({ error: 'Bad Request' });
  }
  
  try {
    const { rowCount } = await pgPool.query('INSERT INTO tasks(description) VALUES($1)', [description]);
    if (rowCount > 0) {
      res.status(201).json({ message: 'Task created successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});


console.log(path)
console.log(indexPath)

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});


console.log("oui")
console.log(process.env.PORT)
console.log(process.env.POSTGRES_USER)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
