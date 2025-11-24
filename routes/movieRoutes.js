const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.render('home', { movies });
});

router.get('/add', (req, res) => res.render('add'));

router.post('/add', async (req, res) => {
  await Movie.create(req.body);
  res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render('edit', { movie });
});

router.post('/edit/:id', async (req, res) => {
  await Movie.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render('delete', { movie });
});

router.post('/delete/:id', async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
