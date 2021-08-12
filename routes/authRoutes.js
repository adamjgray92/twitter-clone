const express = require('express');

const app = express();
const router = express.Router();

app.set('view engine', 'pug');
app.set('views', 'views');

router.get('/login', (req, res, next) => {
  const payload = {
    title: 'Twitter - Login',
  };
  res.status(200).render('login', payload);
});

router.get('/register', (req, res, next) => {
  const payload = {
    title: 'Twitter - Register',
  };
  res.status(200).render('register', payload);
});

module.exports = router;
