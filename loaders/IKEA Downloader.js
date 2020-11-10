/* eslint-disable no-eval, no-undef */

// Show header
console.log('IKEA Downloader')
console.log('')

// Create directory
require('../tools/directory')('IKEA kataloger')

// Get catalogue database
console.log('Retrieving catalogue database...')
console.log('')
const response = require('../tools/request')('https://ikeamuseum.com/wp-content/themes/ikea-museum/includes/catalogues/external/listing.json')
require('fs').writeFileSync('listing.json', response)

eval(response)

// Do for each catalogue
for (let i = 0; i < listings.length; i++) {
  console.log('Downloading ' + (i + 1) + '/' + listings.length + ' (' + listings[i].id + ')...')

  // Download catalogue file
  const temp = require('../tools/request')('https://ikeacatalogues.ikea.com/sv-' + listings[i].id)
  require('../tools/download')(temp.match(/"downloadPdfUrl":".+?"/).toString().slice(18, -1), listings[i].id + '.pdf')
}
