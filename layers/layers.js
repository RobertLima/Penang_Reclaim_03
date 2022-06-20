var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WATER_polyline_1 = new ol.format.GeoJSON();
var features_WATER_polyline_1 = format_WATER_polyline_1.readFeatures(json_WATER_polyline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WATER_polyline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATER_polyline_1.addFeatures(features_WATER_polyline_1);
var lyr_WATER_polyline_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WATER_polyline_1, 
                style: style_WATER_polyline_1,
                interactive: true,
                title: '<img src="styles/legend/WATER_polyline_1.png" /> WATER_polyline'
            });
var format_BASEPLAN_polyline_2 = new ol.format.GeoJSON();
var features_BASEPLAN_polyline_2 = format_BASEPLAN_polyline_2.readFeatures(json_BASEPLAN_polyline_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BASEPLAN_polyline_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BASEPLAN_polyline_2.addFeatures(features_BASEPLAN_polyline_2);
var lyr_BASEPLAN_polyline_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BASEPLAN_polyline_2, 
                style: style_BASEPLAN_polyline_2,
                interactive: true,
                title: '<img src="styles/legend/BASEPLAN_polyline_2.png" /> BASEPLAN_polyline'
            });
var format_LANDSCAPE_polyline_3 = new ol.format.GeoJSON();
var features_LANDSCAPE_polyline_3 = format_LANDSCAPE_polyline_3.readFeatures(json_LANDSCAPE_polyline_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANDSCAPE_polyline_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANDSCAPE_polyline_3.addFeatures(features_LANDSCAPE_polyline_3);
var lyr_LANDSCAPE_polyline_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LANDSCAPE_polyline_3, 
                style: style_LANDSCAPE_polyline_3,
                interactive: true,
                title: '<img src="styles/legend/LANDSCAPE_polyline_3.png" /> LANDSCAPE_polyline'
            });
var format_ROAD_polyline_4 = new ol.format.GeoJSON();
var features_ROAD_polyline_4 = format_ROAD_polyline_4.readFeatures(json_ROAD_polyline_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_polyline_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_polyline_4.addFeatures(features_ROAD_polyline_4);
var lyr_ROAD_polyline_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROAD_polyline_4, 
                style: style_ROAD_polyline_4,
                interactive: true,
                title: '<img src="styles/legend/ROAD_polyline_4.png" /> ROAD_polyline'
            });
var format_SEWER_polyline_5 = new ol.format.GeoJSON();
var features_SEWER_polyline_5 = format_SEWER_polyline_5.readFeatures(json_SEWER_polyline_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEWER_polyline_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEWER_polyline_5.addFeatures(features_SEWER_polyline_5);
var lyr_SEWER_polyline_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEWER_polyline_5, 
                style: style_SEWER_polyline_5,
                interactive: true,
                title: '<img src="styles/legend/SEWER_polyline_5.png" /> SEWER_polyline'
            });
var format_TELCO_polyline_6 = new ol.format.GeoJSON();
var features_TELCO_polyline_6 = format_TELCO_polyline_6.readFeatures(json_TELCO_polyline_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TELCO_polyline_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TELCO_polyline_6.addFeatures(features_TELCO_polyline_6);
var lyr_TELCO_polyline_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TELCO_polyline_6, 
                style: style_TELCO_polyline_6,
                interactive: true,
                title: '<img src="styles/legend/TELCO_polyline_6.png" /> TELCO_polyline'
            });
var format_TNB_polyline_7 = new ol.format.GeoJSON();
var features_TNB_polyline_7 = format_TNB_polyline_7.readFeatures(json_TNB_polyline_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TNB_polyline_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TNB_polyline_7.addFeatures(features_TNB_polyline_7);
var lyr_TNB_polyline_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TNB_polyline_7, 
                style: style_TNB_polyline_7,
                interactive: true,
                title: '<img src="styles/legend/TNB_polyline_7.png" /> TNB_polyline'
            });
var format_DRAIN_polyline_8 = new ol.format.GeoJSON();
var features_DRAIN_polyline_8 = format_DRAIN_polyline_8.readFeatures(json_DRAIN_polyline_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAIN_polyline_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAIN_polyline_8.addFeatures(features_DRAIN_polyline_8);
var lyr_DRAIN_polyline_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DRAIN_polyline_8, 
                style: style_DRAIN_polyline_8,
                interactive: true,
                title: '<img src="styles/legend/DRAIN_polyline_8.png" /> DRAIN_polyline'
            });
var format_annot_9 = new ol.format.GeoJSON();
var features_annot_9 = format_annot_9.readFeatures(json_annot_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_annot_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_annot_9.addFeatures(features_annot_9);
var lyr_annot_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_annot_9, 
                style: style_annot_9,
                interactive: true,
                title: '<img src="styles/legend/annot_9.png" /> annot'
            });

lyr_OSMStandard_0.setVisible(true);lyr_WATER_polyline_1.setVisible(true);lyr_BASEPLAN_polyline_2.setVisible(true);lyr_LANDSCAPE_polyline_3.setVisible(true);lyr_ROAD_polyline_4.setVisible(true);lyr_SEWER_polyline_5.setVisible(true);lyr_TELCO_polyline_6.setVisible(true);lyr_TNB_polyline_7.setVisible(true);lyr_DRAIN_polyline_8.setVisible(true);lyr_annot_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_WATER_polyline_1,lyr_BASEPLAN_polyline_2,lyr_LANDSCAPE_polyline_3,lyr_ROAD_polyline_4,lyr_SEWER_polyline_5,lyr_TELCO_polyline_6,lyr_TNB_polyline_7,lyr_DRAIN_polyline_8,lyr_annot_9];
lyr_WATER_polyline_1.set('fieldAliases', {'Layer': 'Layer', });
lyr_BASEPLAN_polyline_2.set('fieldAliases', {'Layer': 'Layer', });
lyr_LANDSCAPE_polyline_3.set('fieldAliases', {'Layer': 'Layer', });
lyr_ROAD_polyline_4.set('fieldAliases', {'Layer': 'Layer', });
lyr_SEWER_polyline_5.set('fieldAliases', {'Layer': 'Layer', });
lyr_TELCO_polyline_6.set('fieldAliases', {'Layer': 'Layer', });
lyr_TNB_polyline_7.set('fieldAliases', {'Layer': 'Layer', });
lyr_DRAIN_polyline_8.set('fieldAliases', {'Layer': 'Layer', });
lyr_annot_9.set('fieldAliases', {'TextString': 'TextString', });
lyr_WATER_polyline_1.set('fieldImages', {'Layer': 'TextEdit', });
lyr_BASEPLAN_polyline_2.set('fieldImages', {'Layer': 'TextEdit', });
lyr_LANDSCAPE_polyline_3.set('fieldImages', {'Layer': 'TextEdit', });
lyr_ROAD_polyline_4.set('fieldImages', {'Layer': 'TextEdit', });
lyr_SEWER_polyline_5.set('fieldImages', {'Layer': 'TextEdit', });
lyr_TELCO_polyline_6.set('fieldImages', {'Layer': 'TextEdit', });
lyr_TNB_polyline_7.set('fieldImages', {'Layer': 'TextEdit', });
lyr_DRAIN_polyline_8.set('fieldImages', {'Layer': 'TextEdit', });
lyr_annot_9.set('fieldImages', {'TextString': 'TextEdit', });
lyr_WATER_polyline_1.set('fieldLabels', {'Layer': 'inline label', });
lyr_BASEPLAN_polyline_2.set('fieldLabels', {'Layer': 'inline label', });
lyr_LANDSCAPE_polyline_3.set('fieldLabels', {'Layer': 'inline label', });
lyr_ROAD_polyline_4.set('fieldLabels', {'Layer': 'inline label', });
lyr_SEWER_polyline_5.set('fieldLabels', {'Layer': 'inline label', });
lyr_TELCO_polyline_6.set('fieldLabels', {'Layer': 'inline label', });
lyr_TNB_polyline_7.set('fieldLabels', {'Layer': 'inline label', });
lyr_DRAIN_polyline_8.set('fieldLabels', {'Layer': 'inline label', });
lyr_annot_9.set('fieldLabels', {'TextString': 'inline label', });
lyr_annot_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});