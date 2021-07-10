const express = require('express');
const router = express.Router();

/* Pass to travel controller */
const controller = require('../controllers/travel');

/* GET home page */
router.get('/', controller.travel);

module.exports = router;