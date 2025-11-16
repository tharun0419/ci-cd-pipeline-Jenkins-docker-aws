const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from CI/CD Pipeline!</h1><p>Deployed automatically by Jenkins</p>');
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});