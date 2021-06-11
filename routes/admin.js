var express = require('express');
var router = express.Router();
const cityController=require('./../controller/CityController');
const regionController=require('./../controller/RegionController');

router.get("/",(req,res)=>{
    res.render("admin/DashBoard",{title:"Bảng Thống Kê", layout:'admin/Layout/layout'});

})
router.get("/City",cityController.getCity)
router.get("/City/create",cityController.getCreateCity);
router.post("/City/create",cityController.createCity);

router.get("/DetailCity",(req,res)=>{
    res.render("admin/DetailCity/Show",{title:"dsadas", layout:'admin/Layout/layout'});
});
router.get("/DetailCity/create",(req,res)=>{
    res.render("admin/DetailCity/create",{title:"dsadas", layout:'admin/Layout/layout'});

})

router.get("/region",regionController.getRegion);
router.get("/region/create",(req,res)=>{
    res.render("admin/region/create",{title:"Quản lý khu vực", layout:'admin/Layout/layout'});
})
router.post("/region/create",regionController.createRegion);
module.exports = router;
