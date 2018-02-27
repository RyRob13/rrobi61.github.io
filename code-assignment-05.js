let projectData = []

projectData[0] = {
  id: 1,
  title: 'US Cities 1790-2009',
  url: 'https://ryrob101.maps.arcgis.com/apps/webappviewer/index.html?id=47977d40bdaf4c49812182b0036cd7e7',
  hasThumbnail: true
}

projectData[1] = {
  id: 2,
  title: 'LA Parish Income',
  url: 'https://ryrob101.maps.arcgis.com/apps/webappviewer/index.html?id=9f64f4ca35e24300bc216c6ac2a77783',
  hasThumbnail: false
}

for (let i = 0; i < projectData.length; i++) {
  if (projectData[i].hasThumbnail === true) {
    console.log('images/ss-project-' + projectData[i].id + '.png')
  } else {
    console.log('no-preview.png')
  }
}
