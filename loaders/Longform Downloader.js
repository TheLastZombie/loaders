// Show header
console.log('Longform Downloader')
console.log('')

// Create directory
require('../tools/directory')('Longform Editions')

// Get release database
console.log('Retrieving release database...')
console.log('')
const response = require('../tools/request')('https://longformeditions.com/page-data/editions/page-data.json', true)
require('fs').writeFileSync('page-data.json', JSON.stringify(response))

// Do for each release
for (let i = 0; i < response.result.data.allDatoCmsEdition.edges.length; i++) {
  console.log('Downloading ' + (i + 1) + '/' + response.result.data.allDatoCmsEdition.edges.length + ' (' + response.result.data.allDatoCmsEdition.edges[i].node.trackId + ')...')

  // Download audio file
  require('../tools/download')(response.result.data.allDatoCmsEdition.edges[i].node.soundFile)
}
