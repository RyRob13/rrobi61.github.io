// assign values to a set of variables representing a project's metadata
let projectId = 'Ryan Earthquake Map'
let projectUrl = 'https://www.arcgis.com/apps/View/index.html?appid=db24b600c7fe4ee2846413ee75f554c0'
let projectTitle = 'Earthquake Map'
let projectDesc = 'The ArcGIS Online Web App shows worldwide earthquakes from the past 24 hours.'
let projectThumb = true
let myArray = [earthquakes, maps, ArcGIS]


// display messages in the browser's developer console, combining the values with text
console.log('ID: ' + projectId)
console.log('URL: ' + projectUrl)
console.log('Title: ' + projectTitle)
console.log('Description: ' + projectDesc)
console.log('Has thumbnail? ' + projectThumb)
console.log('array: ' + myArray)
