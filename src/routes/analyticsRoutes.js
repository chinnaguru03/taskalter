const express = require('express');
const { redirectUrl } = require('../controllers/analyticsController');

const router = express.Router();

router.get('/:alias', redirectUrl);

module.exports = router;