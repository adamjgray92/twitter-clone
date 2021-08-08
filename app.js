const express = require('express');

const app = express();
const PORT = 3055;

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res, next) => {
  const payload = {
    title: 'Twitter - Home',
  };
  res.status(200).render('home', payload);
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
