
let food = 'apple'

let message = function (food) {
  console.log('The food of the day is ' + food)
  console.log('The '+ food + ' is a great snack')
}

message('apple')


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
  createTitle(projectData[i].title)
  createThumbnail(projectData[i].thumb, projectData[i].id)
  }

function createTitle (title) {
  console.log('Title: ' + title)
}

function createThumbnail (thumb, id) {
  if (thumb === true) {
    console.log('images/ss-project-' + id + '.png')
  } else {
    console.log('no-preview.png')
  }
}
