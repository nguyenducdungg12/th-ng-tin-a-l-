const Region = require('../model/Region');

class regionController {
    getRegion(req,res){
        Region.findAll().then(region=>{
            res.render("admin/Region/Show",{title:"Thêm khu vực", layout:'admin/Layout/layout',regions:region});
        })
        .catch((err)=>res.json(err))
    }
    createRegion(req, res) {
        Region.create({ Name: req.body.Name,RDesc: req.body.CDesc,RDesc: req.body.CDesc,Location: req.body.Location})
        .then(() => {
            res.redirect('/admin/region/');
        })
        .catch(err=>res.status(400).json(err));
    }
}

module.exports= new regionController();