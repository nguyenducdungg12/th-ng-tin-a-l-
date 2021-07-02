var express = require('express');
var router = express.Router();
const cityController=require('./../controller/CityController');
const CityYearPolygonController = require('./../controller/CityYearPolygonController');
const RegionController = require('./../controller/RegionController');
const City = require('../model/City');
router.get("/",cityController.getDashBoard);
// City
router.get("/City",cityController.getCity);
router.get("/City/create",cityController.getCreateCity);
router.get("/City/update/:id",cityController.getUpdateCity);
router.post("/City/update/:id",cityController.postUpdateCity);
router.post("/City/create",cityController.createCity);
router.post("/City/delete/:id",cityController.deleteCity);

//Detail City
router.get("/DetailCity",CityYearPolygonController.getCity);
router.get("/DetailCity/create",CityYearPolygonController.getCreateDetailCity);
router.get("/DetailCity/update/:id",CityYearPolygonController.getUpdateDetailCity);
router.post("/DetailCity/update/:id",CityYearPolygonController.postUpdateDetailCity);
router.post("/DetailCity/create",CityYearPolygonController.createDetailCity);
router.post("/DetailCity",CityYearPolygonController.getDetailCity);
router.post("/DetailCity/delete/:id",CityYearPolygonController.deleteDetailCity);

//region
router.get("/region",RegionController.getRegion);
router.get("/region/create",(req,res)=>{
    res.render("admin/region/create",{title:"Quản lý khu vực", layout:'admin/Layout/layout'});
})
router.get("/region/update/:id",RegionController.getUpdateCity);
router.post("/region/update/:id",RegionController.postUpdateCity);
router.post("/region/delete/:id",RegionController.deleteCity);
router.post("/region/create",RegionController.createRegion);
// LOGIn
router.get("/login",function(req,res){
    res.render("admin/Login/Login",{layout:"admin/Layout/Layoutlogin"});
})

module.exports = router;


