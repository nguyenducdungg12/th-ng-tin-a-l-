var express = require('express');
var router = express.Router();
var analytisController = require('../controller/AnalytisController');

router.get('/', analytisController.getPage);

module.exports = router;