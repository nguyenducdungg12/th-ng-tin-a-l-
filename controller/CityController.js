const City = require('../model/City');
const Region =require('../model/Region');

class cityController {
    getCity(req,res){
        City.findAll().then(city=>{
            res.render("admin/City/Show",{title:"Quản Lý Thành Phố", layout:'admin/Layout/layout',cities:city});
            console.log(city);
        })
        .catch((err)=>res.json(err))
    }

    getCreateCity(req,res){
        Region.findAll({}).then(region=>{
            res.render("admin/City/Create",{title:"Thêm Thành Phố", layout:'admin/Layout/layout',regions:region});
            console.log(region);
        })
        .catch((err)=>res.json(err))
    }
    
    createCity(req, res) {
        console.log(req.body);
        City.create({ Name: req.body.Name,FYear: req.body.Fyear,CDesc: req.body.CDesc,IDR: req.body.IDR})
        .then(() => {
            res.redirect('/admin/city/');
        })
        .catch(err=>res.status(400).json(err));
    }
}

module.exports= new cityController();