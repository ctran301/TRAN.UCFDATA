// Store our API endpoint as queryUrl
// var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";

// // // Perform a GET request to the query URL
// d3.json(queryUrl, function(data) {
//   console.log(data.features);
//   // Using the features array sent back in the API data, create a GeoJSON layer and add it to the map

// });


var map = L.map('map-id', {
    center:[10.0,5.0],
    zoom: 2, 
    minZoom: 2
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Map data &copy; <a href=\"http://www.openstreetmap.org\">OpenStreetMap</a>',
    subdomains: ['a','b','c']

}).addTo(map);

var myURL = jQuery( 'script[src$="logic.js"]' ).attr( 'src' ).replace( 'logic.js', '' );
 
var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var markerClusters = L.markerClusterGroup();

var featureInfo =markers[1];


    // for ( var i = 0; i < markers[1].length; ++i )
    // {
    //     var popup = featureInfo[i].properties.title +
    //             '<br/><b>Time</b>' + featureInfo[i].properties.time +
    //             '<br/><b>Magnitude</b> ' + featureInfo[i].properties.mag+
    //             '<br/><b>URL: </b>' + featureInfo[i].properites.url;
    
    // var m = L.marker( [featureInfo[i].lat, featureInfo[i].lng], {icon: myIcon} )
    //                 .bindPopup( popup );
    
    // markerClusters.addLayer( m );
    // }
    
    // map.addLayer( markerClusters );


