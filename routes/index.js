var express = require('express');
var router = express.Router();
var viewMapController= require('../controller/ViewMapController')
/* GET home page. */
router.get('/', viewMapController.getMap);
router.get('/about', function(req,res){
    // res.send("123");
    res.render("about/Show",{layout:"about/Layout/Layout"});
});

module.exports = router;
