var express = require('express');
var router = express.Router();

/* Pass req to main controller */
const ctrlMain = require('../controllers/main');

/* GET home page */
router.get('/', ctrlMain.index);

module.exports = router;
