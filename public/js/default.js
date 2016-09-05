$(document).ready(function() {
  	  var map, geojsonLayer;
      
      map = L.map('mapDiv').setView([45.9432, 24.9668], 7);
      
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      geojsonLayer = new L.GeoJSON.AJAX("sample.txt",{
          onEachFeature: function(feature, layer) {
              var popupText = "<b>" + feature.properties.name + "</b>"
                  + "<br>Adresa: " + feature.properties.address 
                  + ", " + feature.properties.city
                  + ", Județul " + feature.properties.county;
              layer.bindPopup(popupText); }
          });       
      geojsonLayer.addTo(map);
});