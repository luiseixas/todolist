const express = require('express');
const cors = require('cors');
const PORT = 3001;

const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.status(201).json({ username, password });
});

app.listen(PORT, () => {
  console.log(`App is running in the port ${PORT}`)
});