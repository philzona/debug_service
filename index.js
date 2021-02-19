const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send({
    message: 'API is working.'
  });
});

app.get('/environment', (req, res) => {
  res.send(process.env);
});

app.get('/environment/:var', (req, res) => {
  res.send(process.env[req.params.var]);
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}.`);
});