var jsondata = {
    polygons: []
};
<% cities.forEach(function(city){ %>
    <option value="<%=city.dataValues.IDC%>"><%=city.dataValues.Name%></option>
  <% }); %>
var data = "[]";
var dataTest = JSON.parse(data)
// var jsondata = {
//     polygons: [
//         {
//             type: "polygon",
//             rings: dataTest,
//             Name: "Quận Thủ Đức",
//             Location: "Thành phố Hồ Chí Minh, Việt Nam",
//             symbol: {
//                 type: "simple-fill",
//                 color: [255, 0, 0],
//                 outline: {
//                     color: [255, 0, 0],
//                     width: 1,
//                 },
//             },
//         },
//     ],
// };
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"
], function (Map, MapView, Graphic, GraphicsLayer) {
    var map = new Map({
        basemap: "topo-vector"
    });

    map.on("load", function () {
        map.graphics.enableMouseEvents();
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [105.8066925, 15.9030623], //Longitude, latitude
        zoom: 6,
    });

    const poupTemplate_quan = {
        title: "{Name}",
        content: "Đây là {Name}."
    }
    const poupTemplate_Diem = {
        title: "{Name}",
        content: "nằm ở {Location}."
    }
    const poupTemplate_duong = {
        title: "{Name}",
        content: "{Location}"
    }
    var createGraphic = function (data) {
        return new Graphic({
            geometry: data,
            symbol: data.symbol,
            attributes: data,
            popupTemplate: data.popupTemplate,
        });
    };
    var graphicsLayer = new GraphicsLayer();

    jsondata.polygons.forEach(function (data) {
        graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
});
