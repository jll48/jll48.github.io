var size = 0;

var styleCache_BuiltUpAreas={}
var style_BuiltUpAreas = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(0,0,0,1.0)"})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_BuiltUpAreas[key]){
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
        styleCache_BuiltUpAreas[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_BuiltUpAreas[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};