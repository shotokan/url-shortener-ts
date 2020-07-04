import express = require('express');
// Create a new express app instance
const app: express.Application = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
