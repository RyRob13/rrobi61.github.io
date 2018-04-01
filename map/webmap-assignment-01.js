//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let Ryanmap = L.map('map1').setView([29.757676	, -95.372482], 13)
let basemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemap).addTo(Ryanmap)
let marker = L.marker([29.76, -95.372482]).addTo(Ryanmap)
let polygon = L.polygon([
  [29.757676, -95.372482],
  [29.757, -95.372],
  [29.75, -95.37]
]).addTo(Ryanmap);

polygon.bindPopup('Downtown Houston')
marker.bindPopup('Sam Houston Park')

Ryanmap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
