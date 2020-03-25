//Create the tile layer that will be the background of our map
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
});

var satmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.satellite",
    accessToken: API_KEY
});

var lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
});

var outmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.outdoors",
    accessToken: API_KEY
});

var satstrmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets-satellite",
    accessToken: API_KEY
});

var wheatmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.wheatpaste",
    accessToken: API_KEY
});

var strbasicmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets-basic",
    accessToken: API_KEY
});

var comicmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.comic",
    accessToken: API_KEY
});

var pencilmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.pencil",
    accessToken: API_KEY
});

var piratesmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.pirates",
    accessToken: API_KEY
});

var emeraldmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.emerald",
    accessToken: API_KEY
});

var highcmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.high-contrast",
    accessToken: API_KEY
});


// baseMaps
var baseMaps = {
    "Street Map": streetmap,
    "Satellite": satmap,
    "Light Map": lightmap,
    "Dark Map": darkmap,
    "Outdoors": outmap,
    "Satellite-Street": satstrmap,
    "Wheatpaste": wheatmap,
    "Street Basic": strbasicmap,
    "Comic": comicmap,
    "Pencil": pencilmap,
    "Pirate": piratesmap,
    "Emerald": emeraldmap,
    "High-Contrast": highcmap
};

// Initialize all of the LayerGroups we'll be using
var layers = {
    eqHeat: new L.LayerGroup(),
    tacPlates: new L.LayerGroup()
};

// Creating map object
var map = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 4,
    layers: [
        layers.eqHeat,
        layers.tacPlates
    ]
});


// Add our 'streetmap' tile layer to the map
streetmap.addTo(map);


// Create an overlays object to add to the layer control
var overlays = {
    "Earthquakes": layers.eqHeat,
    "Tectonics Plates": layers.tacPlates
};

// Create a control for our layers, add our overlay layers to it
L.control.layers(baseMaps, overlays, { collapsed: false }).addTo(map);

function markerColor(feature) {
    if (feature.properties && feature.properties.mag) {
        var magnitude = feature.properties.mag;
        if (magnitude < 1) {
            return "#b7f34d"
        }
        else if (magnitude < 2) {
            return "#e1f34d"
        }
        else if (magnitude < 3) {
            return "#f3db4d"
        }
        else if (magnitude < 4) {
            return "#f3ba4d"
        }
        else if (magnitude < 5) {
            return "#f0a76b"
        }
        else {
            return "#f06b6b"
        }
    }
    else {
        return "#b7f34d";
    }
}

function legendColor(magnitude) {
    if (magnitude < 1) {
        return "#b7f34d"
    }
    else if (magnitude < 2) {
        return "#e1f34d"
    }
    else if (magnitude < 3) {
        return "#f3db4d"
    }
    else if (magnitude < 4) {
        return "#f3ba4d"
    }
    else if (magnitude < 5) {
        return "#f0a76b"
    }
    else {
        return "#f06b6b"
    }
}

function markerSize(feature) {
    if (feature.properties.mag) {
        return 5 * (parseFloat(feature.properties.mag))
    }
    else {
        return 0.1
    }
}

function addPopUps(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.mag) {
        layer.bindPopup("<h4>" + feature.properties.place + "</h4><h5>Mag:" + feature.properties.mag + "</h5>");
    }
}

eqData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
d3.json(eqData, function (response) {
    L.geoJSON(response, {
        pointToLayer: function (feature, latlng) {
            var geojsonMarkerOptions = {
                radius: markerSize(feature),
                fillColor: markerColor(feature),
                color: "#000",
                weight: 1.5,
                opacity: 1,
                fillOpacity: 0.8
            };
            return L.circleMarker(latlng, geojsonMarkerOptions);
        },
        onEachFeature: addPopUps
    }).addTo(layers["eqHeat"])
});

// tacPlatesURL = "https://github.com/fraxen/tectonicplates/blob/master/GeoJSON/PB2002_boundaries.json"
tacPlatesURL = "static/data/PB2002_boundaries.json"

// Our style object
var mapStyle = {
    color: "orange",
    weight: 3
};
d3.json(tacPlatesURL, function (data) {

    // Creating a geoJSON layer with the retrieved data
    L.geoJson(data, {

        // Passing in our style object
        style: mapStyle

    }).addTo(layers["tacPlates"]);

});


var legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        richter = [0, 1, 2, 3, 4, 5],
        labels = [];
    div.innerHTML += "<p>Richter<BR />magnitude<BR />scale</p>"
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < richter.length; i++) {
        div.innerHTML +=
            '<i style="background:' + legendColor(richter[i]) + '"></i> ' +
            richter[i] + (richter[i + 1] ? '&ndash;' + richter[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);
