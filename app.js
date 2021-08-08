const express = require('express');

const app = express();
const PORT = 3055;

const server = app.listen(PORT, () => {
  console.log('Server running...');
});
