const API_KEY = "AIzaSyARD8AJykZ5pTbZusyz0D-TY1GEJJGYsDY";

var map;
var NYU_coordenates = {lat: 40.7291, lng: -73.9965};
var directionsService;
var directionsRenderer;
var jsonText = 'https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson';
var objJSONText = jsonText;

function initMap(){
  objJSONText = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: NYU_coordenates

  });

  NYU_coordenates = new google.maps.Marker({
    position: NYU_coordenates,
    map: map
  });

  objJSONText.data.loadGeoJson(
      'https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson');


  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
}
