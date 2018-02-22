let projectArray = [
  2,
  'https://ryrob101.maps.arcgis.com/apps/GeoForm/index.html?appid=63cb19117d20480b90995a15b1b7f6ea',
  'Incidents App',
  'ArcGIS web app allows the user to report incidents.',
  true,
  ['Incident', 'ArcGIS', 'App']
]

let projectObject = {
  id: 2,
  url: 'https://ryrob101.maps.arcgis.com/apps/GeoForm/index.html?appid=63cb19117d20480b90995a15b1b7f6ea',
  title: 'Incidents App',
  desc: 'ArcGIS web app allows the user to report incidents.',
  thumb: true,
  keywords: [
    'Incident',
    'ArcGIS',
    'App'
  ]
}

console.log(projectArray[2])
console.log(projectObject.title)
console.log(projectObject["title"])
