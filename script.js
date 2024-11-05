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
    { name: "Ankara", coordinates: [32.8597, 39.9334] },   // Ankara
    { name: "İstanbul", coordinates: [28.9784, 41.0082] }, // İstanbul
    { name: "Afyon", coordinates: [30.7067, 38.7569] },    // Afyon
    { name: "Aksaray", coordinates: [34.0254, 38.3687] },  // Aksaray
    { name: "Kırıkkale", coordinates: [33.5292, 39.8468] }, // Kırıkkale
    { name: "Niğde", coordinates: [34.6794, 37.9668] },     // Niğde
    { name: "Mersin", coordinates: [34.6398, 36.8121] },    // Mersin
    { name: "Diyarbakır", coordinates: [40.2181, 37.9144] }, // Diyarbakır
    { name: "Gaziantep", coordinates: [37.0662, 37.0662] },  // Gaziantep
    { name: "Şırnak", coordinates: [42.4918, 37.4187] },    // Şırnak
    { name: "Hakkari", coordinates: [43.7370, 37.5739] },   // Hakkari
    { name: "Van", coordinates: [43.0560, 38.5012] },       // Van
    { name: "Edirne", coordinates: [26.5530, 41.6761] },    // Edirne
    { name: "Manisa", coordinates: [27.4265, 38.6125] },    // Manisa
    { name: "Denizli", coordinates: [29.0875, 37.7833] },   // Denizli
    { name: "Fildişi Sahili", coordinates: [-5.5471, 7.5396] } // Fildişi Sahili
];

// Define star icon
var iconStyle = new ol.style.Style({
    image: new ol.style.Icon({
        src: 'https://www.svgrepo.com/show/527218/map-point.svg', // Star icon URL
        scale: 0.05, // Adjust scale for the icon size
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

