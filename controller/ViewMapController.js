const CityYearPolygon=require('../model/CityYearPolygon'); 
const City=require('../model/City'); 

class viewMapController {
    getMap(req, res) {
        CityYearPolygon.findAll({raw:true}).then(cities=>{
            res.render("map/Show", { title: "Hệ thống địa lý", layout: 'map/Layout/layout',cities:cities});
        })
    }
}

module.exports = new viewMapController();