const express = require('express');
const router = express.Router();

/* Pass to travel controller */
const controller = require('../controllers/meals');

/* GET home page */
router.get('/', controller.meals);

module.exports = router;