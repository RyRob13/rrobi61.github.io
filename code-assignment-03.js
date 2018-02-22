// assign values to a set of variables representing a project's metadata
let projectId = 1
let projectUrl = 'http://www.arcgis.com/apps/View/index.html?appid=765b50d197f9486c910f13671d8eda5d'
let projectTitle = 'Map of Recent Earthquakes'
let projectDesc = 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 2.5 or greater that have occurred in the last 7 days. The dataset is streamed from the USGS.'
let projectThumb = true
let projectkeywords = ['earthquakes', 'usgs']

let projectArray = [
  1,
  'http://www.arcgis.com/apps/View/index.html?appid=765b50d197f9486c910f13671d8eda5d',
  'Map of Recent Earthquakes',
  'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 2.5 or greater that have occurred in the last 7 days. The dataset is streamed from the USGS.',
  true,
  ['earthquakes', 'usgs']
]

let projectObject = {
  id: 1,
  url: 'http://www.arcgis.com/apps/View/index.html?appid=765b50d197f9486c910f13671d8eda5d',
  title: 'Map of Recent Earthquakes',
  desc: 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 2.5 or greater that have occurred in the last 7 days. The dataset is streamed from the USGS.',
  thumb: true,
  keywords: ['earthquakes', 'usgs']
}

console.log('ID: ' + projectId)
console.log('URL: ' + projectUrl)
console.log('Title: ' + projectTitle)
console.log('Description: ' + projectDesc)
console.log('Has thumbnail? ' + projectThumb)
console.log('Keywords: ' + projectkeywords)
console.log(projectArray)
