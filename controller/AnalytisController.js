const CityYearPolygon=require('../model/CityYearPolygon'); 
const City=require('../model/City');
const DataAnalytis = require('../model/DataAnalytis');


class AnalytisController {
    async getPage(req, res) {
        var city = await City.findAll({raw:true});
        var dothi1 = await DataAnalytis.findAll({raw:true,include:[{
            model:CityYearPolygon,
            where:{
                CityType:1,
                Year:2020
            },
            required:true,
            include: [{
                model:City,
                required:true,
            }]  
        }],limit: 4,order: [['llcreate', 'DESC']]});
        var dothi2 = await DataAnalytis.findAll({raw:true,include:[{
            model:CityYearPolygon,
            where:{
                CityType:2,
                Year:2020
            },
            required:true,
            include: [{
                model:City,
                required:true,
            }]  
        }],limit: 4,order: [['llcreate', 'DESC']]});
        var dothi3 = await DataAnalytis.findAll({raw:true,include:[{
            model:CityYearPolygon,
            where:{
                CityType:3,
            },
            required:true,
            include: [{
                model:City,
                required:true,
            }]  
        }],limit: 4,order: [['llcreate', 'DESC']]});
        CityYearPolygon.findAll({raw:true}).then(cities=>{
            res.render("analytis/Show", { title: "Hệ thống địa lý", layout: 'analytis/Layout/layout',infoCity: city,dothi1:dothi1,dothi2:dothi2,dothi3:dothi3});
        })
    }
}

module.exports = new AnalytisController();