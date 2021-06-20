const City = require('../model/City');
const Region =require('../model/Region');

class cityController {
    getCity(req,res){
        City.findAll({
            include:[
                {
                    model : Region,
                }
            ]
        }).then(city=>{
            res.render("admin/City/Show",{title:"Quản Lý Thành Phố", layout:'admin/Layout/layout',cities:city});
        })
        .catch((err)=>res.json(err))
    }

    getCreateCity(req,res){
        Region.findAll({}).then(region=>{
            res.render("admin/City/Create",{title:"Thêm Thành Phố", layout:'admin/Layout/layout',regions:region});
        })
        .catch((err)=>res.json(err))
    }
    async postUpdateCity(req,res){
       const {id} = req.params;
              City.update(
            {...req.body},
            {where : {IDC : id}},
        ).then((data)=>{
            res.redirect("/admin/City");
        })
        .catch(err=>console.log(err));

    }
    async getUpdateCity(req,res){
        const {id} = req.params;
        try{
            const region = await Region.findAll({});
            const city = await City.findOne({
                    where: { IDC: id },
                    include : [
                        {
                            model : Region,
                        }
                    ]
                });
         res.render("admin/City/Update",{title:"Sửa Thành Phố", layout:'admin/Layout/layout',data:city.dataValues,regions:region});
        }
        catch(err){
            res.json(err);
        }       
    }
    async deleteCity(req,res){
        const {id} = req.params;
        const city = await City.findOne({
            where : {IDC:id}
        });
        await city.destroy();
        res.redirect("/admin/City");
    }
    createCity(req, res) {
        City.create({ Name: req.body.Name,FYear: req.body.FYear,CDesc: req.body.CDesc,IDR: req.body.IDR})
        .then(() => {
            res.redirect('/admin/city/');
        })
        .catch(err=>res.status(400).json(err));
    }
}

module.exports= new cityController();