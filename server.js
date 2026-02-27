const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<h1>Hello OFETZ ! Ton app Node.js est prête pour Firebase App Hosting</h1>');
});

app.listen(port, () => {
  console.log(`Serveur OK sur port ${port}`);
});