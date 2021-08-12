const express = require('express');
const path = require('path');

const auth = require('./middleware/auth');

const app = express();
const PORT = 3055;

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

const authRoutes = require('./routes/authRoutes');

app.use('/', authRoutes);

app.get('/', auth.requireLogin, (req, res, next) => {
  const payload = {
    title: 'Twitter - Home',
  };
  res.status(200).render('home', payload);
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
