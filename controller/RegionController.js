const Region = require('../model/Region');

class regionController {
    getRegion(req,res){
        Region.findAll().then(region=>{
            res.render("admin/Region/Show",{title:"Thêm khu vực", layout:'admin/Layout/layout',regions:region});
        })
        .catch((err)=>res.json(err))
    }
    createRegion(req, res) {
        Region.create({ Name: req.body.Name,RDesc: req.body.RDesc,Location: req.body.Location})
        .then(() => {
            res.redirect('/admin/region/');
        })
        .catch(err=>res.status(400).json(err));
    }
    async getUpdateCity(req,res){
        const {id} = req.params;
        try{
            const region = await Region.findOne({
                    where: { IDR: id },
                   
                });
         res.render("admin/Region/update",{title:"Sửa Thành Phố", layout:'admin/Layout/layout',region:region.dataValues});
        }
        catch(err){
            res.json(err);
        }       
    }
    async postUpdateCity(req,res){
        const {id} = req.params;
        try{
             Region.update(
                 {...req.body},
                  {where : { IDR: id },}     
            
            );
         res.redirect("/admin/region");
        }
        catch(err){
            res.json(err);
        }       
    }
    async deleteCity(req,res){
        const {id} = req.params;
        const region = await Region.findOne({
            where : {IDR:id}
        });
        await region.destroy();
        res.redirect("/admin/region");
    }
}

module.exports= new regionController();