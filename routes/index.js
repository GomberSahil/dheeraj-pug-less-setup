const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('common/landing');
});

router.get('/contact', (req, res) => {
  res.render('common/contact');
});

router.get('/about', (req, res) => {
  res.render('common/about');
});

router.get('/portfolio', (req, res) => {
  res.render('common/portfolio');
});

router.get('/testimonial', (req, res) => {
  res.render('common/testimonial');
});

router.get('/services', (req, res) => {
  res.render('common/services');
});
module.exports = router;