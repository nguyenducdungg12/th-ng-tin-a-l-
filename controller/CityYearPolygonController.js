const { Sequelize, where } = require('sequelize');
const Op = Sequelize.Op;
const Region = require('../model/Region');
const DataAnalytis = require('../model/DataAnalytis')
const City = require('../model/City');
const CityYearPolygon = require('../model/CityYearPolygon');
class cityYearPolygonController {
    async getCity(req, res) {
        try {
            const city = await City.findAll({});
            res.render("admin/DetailCity/Show", { title: "Chi tiết thành phố", layout: 'admin/Layout/layout', citys: city });
        }
        catch (err) {
            res.json(err);
        }
    }
    async getDetailCity(req, res) {
        const { id } = req.body;
        try {
            const cityYearPolygon = await CityYearPolygon.findAll({
                where: { IDC: id }
            });
            var temp = "";
            temp += '<table class="table"><thead><tr><th class="product-name">Năm</th><th class="product-price">Loại thành phố</th><th class="product-add-to-cart">Dân số</th><th class="product-remove">Diện tích</th><th class="product-remove">Tốc độ phát triển công nghiệp</th><th class="product-remove">Tọa độ</th></tr></thead><tbody>';
            cityYearPolygon.forEach(data => {
                temp += '<tr>'
                temp += `<th class="product-name">${data.dataValues.YEAR}</th>`;
                temp += `<th class="product-price">${data.dataValues.CityType}</th>`;
                temp += `<th class="product-add-to-cart">${data.dataValues.Population}</th>`;
                temp += `<th class="product-add-to-cart">${data.dataValues.Area}</th>`;
                temp += `<th class="product-add-to-cart">${data.dataValues.Industry}</th>`;
                temp += `<th class="product-add-to-cart">${data.dataValues.Location}</th>`;
                temp += `<th><a href='/admin/DetailCity/update/${data.dataValues.IDPo}' class="btn btn-primary">Sửa</a></th> `;
                temp += `<th><form method="POST" action="/admin/DetailCity/delete/${data.dataValues.IDPo}"><button class="btn btn-danger">Xóa</button></form></th>`;
                temp +=`</tr>`
            })
            res.send(temp);
        }
        catch (err) {
            res.json(err);
        }
    }
    async getCreateDetailCity(req, res) {
        const city = await City.findAll({});
        res.render("admin/DetailCity/Create", { title: "Chi tiết thành phố", layout: 'admin/Layout/layout', citys: city });
    }
    async getUpdateDetailCity(req,res){
        const {id} = req.params;
        const city = await City.findAll({});
        const DetailCity = await CityYearPolygon.findOne({
            where : {IDPo : id}
        })
        const cityCheck = await City.findOne({
            where : {IDC : DetailCity.dataValues.IDC}
        }); 
        res.render("admin/DetailCity/Update", { title: "Chi tiết thành phố", layout: 'admin/Layout/layout', citys: city,DetailCity : DetailCity,cityCheck : cityCheck });

    }
    async postUpdateDetailCity(req,res){
        const {id} = req.params;
        try{
            const CityYearPolygonLastYear = await CityYearPolygon.findAll({
                where : {
                    [Op.and] : {
                        YEAR : {
                            [Op.lt] :req.body.YEAR,
                        },
                        YEAR : {
                         [Op.gte] : req.body.YEAR-10,
                        }
                    },
                    IDC : req.body.IDC,
                },limit : 1,
            })
           let AVGAcr = ((req.body.Area-CityYearPolygonLastYear[0].dataValues.Area)*100)/CityYearPolygonLastYear[0].dataValues.Area;
           let DPop = ((req.body.Population-CityYearPolygonLastYear[0].dataValues.Population)*100)/CityYearPolygonLastYear[0].dataValues.Population;
           let llcreate = ((req.body.Industry-CityYearPolygonLastYear[0].dataValues.Industry)*100)/CityYearPolygonLastYear[0].dataValues.Industry
           var y = await DataAnalytis.update(
               {AVGAcr,DPop,llcreate},
                  {where : {IDPo : id}}
            );
            
           await CityYearPolygon.update({
                ...req.body,Location : JSON.stringify(req.body.Location)
            },{where : {IDPo:id}}).then(()=>{   
                res.redirect("/admin/DetailCity");
            }).catch(err=>{
                res.json(err);
            })
        }
        catch(err){
            res.json(err);
        }
    

    }
   async createDetailCity(req, res) {
       try{
           const CityYearPolygonLastYear = await CityYearPolygon.findAll({
               where : {
                   [Op.and] : {
                       YEAR : {
                           [Op.lt] :req.body.YEAR,
                       },
                       YEAR : {
                        [Op.gte] : req.body.YEAR-10,
                       }
                   },
                   IDC : req.body.IDC,
               },limit : 1,
           })
            
           let AVGAcr = ((req.body.Area-CityYearPolygonLastYear[0].dataValues.Area)*100)/CityYearPolygonLastYear[0].dataValues.Area;
           let DPop = ((req.body.Population-CityYearPolygonLastYear[0].dataValues.Population)*100)/CityYearPolygonLastYear[0].dataValues.Population;
           let llcreate = ((req.body.Industry-CityYearPolygonLastYear[0].dataValues.Industry)*100)/CityYearPolygonLastYear[0].dataValues.Industry
 
           CityYearPolygon.create({ ...req.body,Location : JSON.stringify(req.body.Location) })
            .then(async (data) => {
                await DataAnalytis.create({AVGAcr,DPop,llcreate,IDPo : data.dataValues.IDPo});
                res.redirect('/admin/DetailCity/');
            })
            .catch(err => res.status(400).json(err));
       }
       catch(err){
                CityYearPolygon.create({ ...req.body,Location : JSON.stringify(req.body.Location) })
                .then( (data) => {
                    res.redirect('/admin/DetailCity/');
                })
                  .catch(err => res.status(400).json(err));
           }
       }
    
    
    async deleteDetailCity(req,res){
        const { id } = req.params;
        const cityYearPolygon = await CityYearPolygon.findOne({
            where : {IDPo:id}
        });
        await cityYearPolygon.destroy();
        res.redirect('/admin/DetailCity/');
    }
}

module.exports = new cityYearPolygonController();