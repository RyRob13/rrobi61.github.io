//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let Ryanmap = L.map('map5').setView([39, -98], 4)

let NatGeobasemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
let Graybasemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
let Topobasemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'

let myLightmap1 = L.tileLayer(NatGeobasemap).addTo(Ryanmap)
let myGraymap1 = L.tileLayer(Graybasemap)
let myTopomap1 = L.tileLayer(Topobasemap)

let myBasemaps = {
  'NatGeo Basemap' : myLightmap1,
  'Gray Basemap' : myGraymap1,
  'Topographic Basemap' : myTopomap1
}

L.control.layers(myBasemaps).addTo(Ryanmap)

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
