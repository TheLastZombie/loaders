// Show header
console.log('Archillect Downloader')
console.log('')

// Create directory
require('../tools/directory')('Archillect')

// Get latest image ID
console.log('Retrieving latest image ID...')
console.log('')
const response = require('../tools/request')('http://archillect.com/')

// Do for each image
for (let i = 0; i < response.match(/<a class="post" href="\/\d+">/).toString().slice(23, -2); i++) {
  console.log('Downloading ' + (i + 1) + '/' + response.match(/<a class="post" href="\/\d+">/).toString().slice(23, -2) + ' (' + (i + 1) + ')...')

  // Download image file
  var temp = require('../tools/request')('http://archillect.com/' + (i + 1))
  require('../tools/download')(temp.match(/<img id="ii" src=".+">/).toString().slice(18, -2))
}
