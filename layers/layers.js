var format_ArcGeoUnit = new ol.format.GeoJSON();
var features_ArcGeoUnit = format_ArcGeoUnit.readFeatures(geojson_ArcGeoUnit, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArcGeoUnit = new ol.source.Vector();
jsonSource_ArcGeoUnit.addFeatures(features_ArcGeoUnit);var lyr_ArcGeoUnit = new ol.layer.Vector({
                source:jsonSource_ArcGeoUnit, 
                style: style_ArcGeoUnit,
                title: "ArcGeoUnit"
            });var format_MainRoadsSouth = new ol.format.GeoJSON();
var features_MainRoadsSouth = format_MainRoadsSouth.readFeatures(geojson_MainRoadsSouth, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainRoadsSouth = new ol.source.Vector();
jsonSource_MainRoadsSouth.addFeatures(features_MainRoadsSouth);var lyr_MainRoadsSouth = new ol.layer.Vector({
                source:jsonSource_MainRoadsSouth, 
                style: style_MainRoadsSouth,
                title: "MainRoadsSouth"
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
            });var format_eqclipparc = new ol.format.GeoJSON();
var features_eqclipparc = format_eqclipparc.readFeatures(geojson_eqclipparc, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eqclipparc = new ol.source.Vector();
jsonSource_eqclipparc.addFeatures(features_eqclipparc);var lyr_eqclipparc = new ol.layer.Vector({
                source:jsonSource_eqclipparc, 
                style: style_eqclipparc,
                title: "eqclipparc"
            });

lyr_ArcGeoUnit.setVisible(true);lyr_MainRoadsSouth.setVisible(true);lyr_BuiltUpAreas.setVisible(true);lyr_faults_south.setVisible(true);lyr_eqclipparc.setVisible(true);
var layersList = [lyr_ArcGeoUnit,lyr_MainRoadsSouth,lyr_BuiltUpAreas,lyr_faults_south,lyr_eqclipparc];
lyr_ArcGeoUnit.set('fieldAliases', {'IDENTIFIER': 'IDENTIFIER', 'CODE': 'CODE', 'MAIN_ROCK': 'MAIN_ROCK', 'SUB_ROCKS': 'SUB_ROCKS', 'STRATLEX': 'STRATLEX', 'TERR_EQIV': 'TERR_EQIV', 'SPGRP_EQIV': 'SPGRP_EQIV', 'GRP_EQIV': 'GRP_EQIV', 'SBGRP_EQIV': 'SBGRP_EQIV', 'FMN_EQIV': 'FMN_EQIV', 'MBR_EQIV': 'MBR_EQIV', 'PROTOLITH': 'PROTOLITH', 'TZONE': 'TZONE', 'STRAT_AGE': 'STRAT_AGE', 'ABS_MIN': 'ABS_MIN', 'ABS_MAX': 'ABS_MAX', 'CONFIDENCE': 'CONFIDENCE', 'DESCR': 'DESCR', 'ROCK_GROUP': 'ROCK_GROUP', 'ROCK_CLASS': 'ROCK_CLASS', 'TEXT_CODE': 'TEXT_CODE', 'SIM_NAME': 'SIM_NAME', 'KEY_NAME': 'KEY_NAME', 'KEYGP_NAME': 'KEYGP_NAME', 'QMAP_NAME': 'QMAP_NAME', 'QMAP_NUMB': 'QMAP_NUMB', 'BASECOLOUR': 'BASECOLOUR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_MainRoadsSouth.set('fieldAliases', {'ID': 'ID', 'ROADID': 'ROADID', 'SH': 'SH', 'RS': 'RS', 'DIRECTION': 'DIRECTION', 'LENGTH': 'LENGTH', 'OFFSETM': 'OFFSETM', });
lyr_BuiltUpAreas.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'BUILT_UP_A': 'BUILT_UP_A', 'BUILT_UP_1': 'BUILT_UP_1', 'NAME': 'NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_faults_south.set('fieldAliases', {'IDENTIFIER': 'IDENTIFIER', 'ACCURACY': 'ACCURACY', 'DOM_SENSE': 'DOM_SENSE', 'SUB_SENSE': 'SUB_SENSE', 'ACTIVITY': 'ACTIVITY', 'PLOT_RANK': 'PLOT_RANK', 'NAME': 'NAME', 'ZONE': 'ZONE', 'TYPE': 'TYPE', 'RDOM_SENSE': 'RDOM_SENSE', 'RSUB_SENSE': 'RSUB_SENSE', 'RTYPE': 'RTYPE', 'DIP_DIR': 'DIP_DIR', 'DIP': 'DIP', 'AGE': 'AGE', 'TOTAL_SLIP': 'TOTAL_SLIP', 'DOWN_QUAD': 'DOWN_QUAD', 'QMAP_NAME': 'QMAP_NAME', 'QMAP_NUMB': 'QMAP_NUMB', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_eqclipparc.set('fieldAliases', {'PubLicid': 'PubLicid', 'Origintime': 'Origintime', 'Date': 'Date', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Magnitude': 'Magnitude', 'Depth': 'Depth', 'Magnitudet': 'Magnitudet', 'Region': 'Region', });
lyr_ArcGeoUnit.set('fieldImages', {'IDENTIFIER': 'TextEdit', 'CODE': 'TextEdit', 'MAIN_ROCK': 'TextEdit', 'SUB_ROCKS': 'TextEdit', 'STRATLEX': 'TextEdit', 'TERR_EQIV': 'TextEdit', 'SPGRP_EQIV': 'TextEdit', 'GRP_EQIV': 'TextEdit', 'SBGRP_EQIV': 'TextEdit', 'FMN_EQIV': 'TextEdit', 'MBR_EQIV': 'TextEdit', 'PROTOLITH': 'TextEdit', 'TZONE': 'TextEdit', 'STRAT_AGE': 'TextEdit', 'ABS_MIN': 'TextEdit', 'ABS_MAX': 'TextEdit', 'CONFIDENCE': 'TextEdit', 'DESCR': 'TextEdit', 'ROCK_GROUP': 'TextEdit', 'ROCK_CLASS': 'TextEdit', 'TEXT_CODE': 'TextEdit', 'SIM_NAME': 'TextEdit', 'KEY_NAME': 'TextEdit', 'KEYGP_NAME': 'TextEdit', 'QMAP_NAME': 'TextEdit', 'QMAP_NUMB': 'TextEdit', 'BASECOLOUR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_MainRoadsSouth.set('fieldImages', {'ID': 'TextEdit', 'ROADID': 'TextEdit', 'SH': 'TextEdit', 'RS': 'TextEdit', 'DIRECTION': 'TextEdit', 'LENGTH': 'TextEdit', 'OFFSETM': 'TextEdit', });
lyr_BuiltUpAreas.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'BUILT_UP_A': 'TextEdit', 'BUILT_UP_1': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_faults_south.set('fieldImages', {'IDENTIFIER': 'TextEdit', 'ACCURACY': 'TextEdit', 'DOM_SENSE': 'TextEdit', 'SUB_SENSE': 'TextEdit', 'ACTIVITY': 'TextEdit', 'PLOT_RANK': 'TextEdit', 'NAME': 'TextEdit', 'ZONE': 'TextEdit', 'TYPE': 'TextEdit', 'RDOM_SENSE': 'TextEdit', 'RSUB_SENSE': 'TextEdit', 'RTYPE': 'TextEdit', 'DIP_DIR': 'TextEdit', 'DIP': 'TextEdit', 'AGE': 'TextEdit', 'TOTAL_SLIP': 'TextEdit', 'DOWN_QUAD': 'TextEdit', 'QMAP_NAME': 'TextEdit', 'QMAP_NUMB': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_eqclipparc.set('fieldImages', {'PubLicid': 'TextEdit', 'Origintime': 'TextEdit', 'Date': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Magnitude': 'TextEdit', 'Depth': 'TextEdit', 'Magnitudet': 'TextEdit', 'Region': 'TextEdit', });
lyr_ArcGeoUnit.set('fieldLabels', {'IDENTIFIER': 'no label', 'CODE': 'no label', 'MAIN_ROCK': 'no label', 'SUB_ROCKS': 'no label', 'STRATLEX': 'no label', 'TERR_EQIV': 'no label', 'SPGRP_EQIV': 'no label', 'GRP_EQIV': 'no label', 'SBGRP_EQIV': 'no label', 'FMN_EQIV': 'no label', 'MBR_EQIV': 'no label', 'PROTOLITH': 'no label', 'TZONE': 'no label', 'STRAT_AGE': 'no label', 'ABS_MIN': 'no label', 'ABS_MAX': 'no label', 'CONFIDENCE': 'no label', 'DESCR': 'no label', 'ROCK_GROUP': 'no label', 'ROCK_CLASS': 'no label', 'TEXT_CODE': 'no label', 'SIM_NAME': 'no label', 'KEY_NAME': 'no label', 'KEYGP_NAME': 'no label', 'QMAP_NAME': 'no label', 'QMAP_NUMB': 'no label', 'BASECOLOUR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_MainRoadsSouth.set('fieldLabels', {'ID': 'no label', 'ROADID': 'no label', 'SH': 'no label', 'RS': 'no label', 'DIRECTION': 'no label', 'LENGTH': 'no label', 'OFFSETM': 'no label', });
lyr_BuiltUpAreas.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'BUILT_UP_A': 'no label', 'BUILT_UP_1': 'no label', 'NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_faults_south.set('fieldLabels', {'IDENTIFIER': 'no label', 'ACCURACY': 'no label', 'DOM_SENSE': 'no label', 'SUB_SENSE': 'no label', 'ACTIVITY': 'no label', 'PLOT_RANK': 'no label', 'NAME': 'no label', 'ZONE': 'no label', 'TYPE': 'no label', 'RDOM_SENSE': 'no label', 'RSUB_SENSE': 'no label', 'RTYPE': 'no label', 'DIP_DIR': 'no label', 'DIP': 'no label', 'AGE': 'no label', 'TOTAL_SLIP': 'no label', 'DOWN_QUAD': 'no label', 'QMAP_NAME': 'no label', 'QMAP_NUMB': 'no label', 'SHAPE_Leng': 'no label', });
lyr_eqclipparc.set('fieldLabels', {'PubLicid': 'no label', 'Origintime': 'no label', 'Date': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Magnitude': 'no label', 'Depth': 'no label', 'Magnitudet': 'no label', 'Region': 'no label', });
