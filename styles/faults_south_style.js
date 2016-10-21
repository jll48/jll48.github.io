var size = 0;

var styleCache_faults_south={}
var style_faults_south = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(69,69,69,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_faults_south[key]){
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
        styleCache_faults_south[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_faults_south[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};