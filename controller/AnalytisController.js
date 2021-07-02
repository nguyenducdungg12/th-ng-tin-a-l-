const CityYearPolygon=require('../model/CityYearPolygon'); 
const City=require('../model/City');
const DataAnalytis = require('../model/DataAnalytis');


class AnalytisController {
    async getPage(req, res) {
        var city = await City.findAll({raw:true});
        var dataAnalytic = await DataAnalytis.findAll({raw:true});
        CityYearPolygon.findAll({raw:true}).then(cities=>{
            res.render("analytis/Show", { title: "Hệ thống địa lý", layout: 'analytis/Layout/layout',cities:cities, infoCity: city, dataAnalytic: dataAnalytic});
        })
        
    }
}

module.exports = new AnalytisController();