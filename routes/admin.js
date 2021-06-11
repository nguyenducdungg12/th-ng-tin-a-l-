var express = require('express');
var router = express.Router();

router.get("/",(req,res)=>{
    res.render("admin/DashBoard",{title:"Bảng Thống Kê", layout:'admin/Layout/layout'});

})
router.get("/City",(req,res)=>{
    res.render("admin/City/Show",{title:"Quản Lý Thành Phố", layout:'admin/Layout/layout'});
})
router.get("/City/create",(req,res)=>{
    res.render("admin/City/Create",{title:"Quản Lý Thành Phố", layout:'admin/Layout/layout'});
})
router.post("/City",(req,res)=>{
    res.render("admin/City/Show",{title:"Quản Lý Thành Phố", layout:'admin/Layout/layout'});
})
router.get("/DetailCity",(req,res)=>{
    res.render("admin/DetailCity/show",{title:"dsadas", layout:'admin/Layout/layout'});

})
router.get("/DetailCity/create",(req,res)=>{
    res.render("admin/DetailCity/create",{title:"dsadas", layout:'admin/Layout/layout'});

})
router.get("/region",(req,res)=>{
    res.render("admin/region/show",{title:"dsadas", layout:'admin/Layout/layout'});

})
router.get("/region/create",(req,res)=>{
    res.render("admin/region/create",{title:"dsadas", layout:'admin/Layout/layout'});

})
module.exports = router;
