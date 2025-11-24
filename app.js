const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');          // <-- missing before
require('dotenv').config();

app.set('view engine', 'ejs');

// Tell Express EXACTLY where the views folder is:
app.set('views', path.join(__dirname, 'views'));   // <-- THIS FIXES THE ERROR

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI);

const movieRoutes = require('./routes/movieRoutes');
app.use('/', movieRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
