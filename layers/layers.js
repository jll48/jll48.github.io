var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_GEOunits = new ol.format.GeoJSON();
var features_GEOunits = format_GEOunits.readFeatures(geojson_GEOunits, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOunits = new ol.source.Vector();
jsonSource_GEOunits.addFeatures(features_GEOunits);var lyr_GEOunits = new ol.layer.Vector({
                source:jsonSource_GEOunits, 
                style: style_GEOunits,
                title: "GEOunits"
            });var format_BuiltUpAreas = new ol.format.GeoJSON();
var features_BuiltUpAreas = format_BuiltUpAreas.readFeatures(geojson_BuiltUpAreas, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuiltUpAreas = new ol.source.Vector();
jsonSource_BuiltUpAreas.addFeatures(features_BuiltUpAreas);var lyr_BuiltUpAreas = new ol.layer.Vector({
                source:jsonSource_BuiltUpAreas, 
                style: style_BuiltUpAreas,
                title: "BuiltUpAreas"
            });var format_faults_south = new ol.format.GeoJSON();
var features_faults_south = format_faults_south.readFeatures(geojson_faults_south, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_faults_south = new ol.source.Vector();
jsonSource_faults_south.addFeatures(features_faults_south);var lyr_faults_south = new ol.layer.Vector({
                source:jsonSource_faults_south, 
                style: style_faults_south,
                title: "faults_south"
            });

lyr_GEOunits.setVisible(true);lyr_BuiltUpAreas.setVisible(true);lyr_faults_south.setVisible(true);
var layersList = [baseLayer,lyr_GEOunits,lyr_BuiltUpAreas,lyr_faults_south];
lyr_GEOunits.set('fieldAliases', {'TERR_EQIV': 'TERR_EQIV', });
lyr_BuiltUpAreas.set('fieldAliases', {'NAME': 'NAME', });
lyr_faults_south.set('fieldAliases', {'NAME': 'NAME', 'ZONE': 'ZONE', });
lyr_GEOunits.set('fieldImages', {'TERR_EQIV': 'TextEdit', });
lyr_BuiltUpAreas.set('fieldImages', {'NAME': 'TextEdit', });
lyr_faults_south.set('fieldImages', {'NAME': 'TextEdit', 'ZONE': 'TextEdit', });
lyr_GEOunits.set('fieldLabels', {'TERR_EQIV': 'no label', });
lyr_BuiltUpAreas.set('fieldLabels', {'NAME': 'no label', });
lyr_faults_south.set('fieldLabels', {'NAME': 'no label', 'ZONE': 'no label', });
