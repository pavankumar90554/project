const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello DevOps World 🚀');
});

app.get('/health', (req, res) => {
  res.send('App is healthy ✅');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
