const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const urlRoutes = require('./routes/urlRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const { shortenLimiter } = require('./middlewares/rateLimiter');

const app = express();

app.use(cors());
app.use(express.json());
app.use(shortenLimiter);
app.use('/auth', authRoutes);
app.use('/api', urlRoutes);
app.use('/', analyticsRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

module.exports = app;