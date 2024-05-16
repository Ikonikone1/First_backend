const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
