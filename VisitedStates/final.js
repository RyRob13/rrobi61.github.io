let Finalmap = L.map('final').setView([39, -98], 4)

let Graybasemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
let NatGeobasemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
let Streetbasemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'

let myGraymap1 = L.tileLayer(Graybasemap).addTo(Finalmap)
let myLightmap1 = L.tileLayer(NatGeobasemap)
let myStreetmap1 = L.tileLayer(Streetbasemap)

let myBasemaps = {
  'Gray Basemap' : myGraymap1,
  'NatGeo Basemap' : myLightmap1,
  'Street Basemap' : myStreetmap1
}

let myPinIcon = L.icon({
  iconUrl: 'PIN.png',
  iconSize: [25, 40], // size of the icon
  iconAnchor: [12.5, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

let batonRouge = L.marker([30.471165, -91.147385], {icon: myPinIcon}).addTo(Finalmap);
let opLayers = {
  "Birthplace: Baton Rouge": batonRouge
}

L.control.layers(myBasemaps, opLayers).addTo(Finalmap)

let stateStyle = function (state) {
  let Travels = state.properties.STATE_NAME
  let stateColor = 'blue'
  if (Travels == "Louisiana") {
    stateColor = 'red'
  }
  if (Travels == "Mississippi") {
    stateColor = 'red'
  }
  if (Travels == "Texas") {
    stateColor = 'red'
  }
  if (Travels == "Alabama") {
    stateColor = 'red'
  }
  if (Travels == "Colorado") {
    stateColor = 'red'
  }
  if (Travels == "North Carolina") {
    stateColor = 'red'
  }
  if (Travels == "California") {
    stateColor = 'red'
  }
  if (Travels == "Florida") {
    stateColor = 'red'
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
  layer.bindPopup('Population of ' + name + ': ' + population + '<br>Largest state (California): 38986171')
}

function stateFilter (state) {
  let name = state.properties.STATE_NAME
  if (name == 'Louisiana' || name == 'Mississippi' || name == 'Alabama' || name == 'Texas' || name == 'Colorado' || name == 'Florida' || name == 'North Carolina' || name == 'California') {
    return true
  }
}

let stateOptions = {
  style: stateStyle,
  onEachFeature: createPopup,
  filter: stateFilter
}

L.geoJSON(demographics, stateOptions).addTo(Finalmap)
