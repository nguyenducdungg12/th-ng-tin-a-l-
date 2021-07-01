const CityYearPolygon=require('../model/CityYearPolygon'); 
const City=require('../model/City');


class viewMapController {
    async getMap(req, res) {
        var city = await City.findAll({raw:true});
        CityYearPolygon.findAll({raw:true}).then(cities=>{
            res.render("map/Show", { title: "Hệ thống địa lý", layout: 'map/Layout/layout',cities:cities , infoCity : city});
        })
    }
}

module.exports = new viewMapController();