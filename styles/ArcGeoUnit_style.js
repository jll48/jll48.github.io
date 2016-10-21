var size = 0;
function categories_ArcGeoUnit(feature, value) {
                switch(value) {case "?Buller Terrane":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(228,26,28,0.5)"})
    })];
                    break;
case "?Takaka Terrane":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(228,26,28,0.5)"})
    })];
                    break;
case "?Takaka Terrane, ?Buller Terrane":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(228,26,28,0.5)"})
    })];
                    break;
case "Brook Street Terrane":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(55,126,184,0.5)"})
    })];
                    break;
case "Buller Terrane":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(77,175,74,0.5)"})
    })];
                    break;
case "Caples Terrane":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(77,175,74,0.5)"})
    })];
                    break;
case "Cover":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(152,78,163,0.5)"})
    })];
                    break;
case "Dun Mountain-Maitai Terrane":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(152,78,163,0.5)"})
    })];
                    break;
case "Median Batholith":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(152,78,163,0.5)"})
    })];
                    break;
case "Murihiku Terrane":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(255,127,0,0.5)"})
    })];
                    break;
case "Rakaia Terrane":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(255,255,51,0.5)"})
    })];
                    break;
case "Takaka Terrane":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(255,255,51,0.5)"})
    })];
                    break;
case "":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(255,255,51,0.5)"})
    })];
                    break;}};
var styleCache_ArcGeoUnit={}
var style_ArcGeoUnit = function(feature, resolution){
    var value = feature.get("TERR_EQIV");
    var style = categories_ArcGeoUnit(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_ArcGeoUnit[key]){
        var text = new ol.style.Text({
              font: '16.9px \'.Helvetica Neue DeskInterface\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_ArcGeoUnit[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_ArcGeoUnit[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};