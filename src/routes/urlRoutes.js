const express = require('express');
const { createShortUrl } = require('../controllers/urlController');
const { authenticate } = require('../middlewares/authMiddleware');
const { shortenLimiter } = require('../middlewares/rateLimiter');

const router = express.Router();

router.post('/shorten', authenticate,shortenLimiter, createShortUrl);

module.exports = router;