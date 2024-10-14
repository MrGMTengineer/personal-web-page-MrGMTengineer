// Initialize OpenLayers map
var map = new ol.Map({
    target: 'map-container',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM() // OpenStreetMap Layer
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([32.8597, 39.9334]), // Centered on Turkey (Ankara)
        zoom: 6 // Adjust zoom level to show multiple cities
    })
});

// List of cities you visited with their coordinates
var cities = [
    { name: "Ankara", coordinates: [32.8597, 39.9334] },   // Longitude, Latitude for Ankara
    { name: "Istanbul", coordinates: [28.9784, 41.0082] }, // Longitude, Latitude for Istanbul
    { name: "Aksaray", coordinates: [34.0254, 38.3687] }   // Longitude, Latitude for Aksaray
];

// Define star icon
var iconStyle = new ol.style.Style({
    image: new ol.style.Icon({
        src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Red_star.svg', // Star icon URL
        scale: 0.01, // Adjust scale for the icon size
        anchor: [0.5, 1] // Anchor the icon so the bottom center is at the location
    })
});

// Add markers for each city
cities.forEach(function(city) {
    var marker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat(city.coordinates)),
        name: city.name
    });

    // Apply the star icon style to each marker
    marker.setStyle(iconStyle);

    var vectorSource = new ol.source.Vector({
        features: [marker]
    });

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });

    map.addLayer(vectorLayer);
});

