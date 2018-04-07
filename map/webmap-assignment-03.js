//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let Ryanmap = L.map('map3').setView([29.757676	, -95.372482], 13)
let basemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemap).addTo(Ryanmap)

let myTreeIcon = L.icon({
  iconUrl: 'shorttree.png',
  iconSize: [212, 300], // size of the icon
  iconAnchor: [29, 95], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

let marker = L.marker([29.76, -95.372482], {icon: myTreeIcon}).addTo(Ryanmap);



let myCoordinates = [
  [29.757676, -95.372482],
  [29.757, -95.372],
  [29.75, -95.37]
]

let myColors = {
  color: 'red',
  fillColor: 'orange'
}

let myPolygon = L.polygon(myCoordinates, myColors).addTo(Ryanmap)
