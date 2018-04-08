//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let Ryanmap = L.map('map4').setView([39, -98], 4)
let basemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemap).addTo(Ryanmap)

let stateStyle = function (state) {
  let population = state.properties.POPULATION
  let stateColor = 'red'
  if (population < 3000000) {
    stateColor = 'blue'
  }
  let formatting = {
    color: stateColor,
    weight: 2,
    fillOpacity: 0.2
  }
  return formatting
}

let createPopup = function (state, layer) {
  let name = state.properties.STATE_NAME
  let population = state.properties.POPULATION
  layer.bindPopup('Poulation of ' + name + ': ' + population + '<br>Largest state (California): 38986171')
}

let stateOptions = {
  style: stateStyle,
  onEachFeature: createPopup
}
L.geoJSON(demographics, stateOptions).addTo(Ryanmap)
