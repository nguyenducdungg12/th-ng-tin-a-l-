var express = require('express');
var router = express.Router();
var viewMapController= require('../controller/ViewMapController')
/* GET home page. */
router.get('/', viewMapController.getMap);

module.exports = router;
