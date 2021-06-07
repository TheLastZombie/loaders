// Show header
console.log('Quote Unquote Downloader')
console.log('')

// Create directory
require('../tools/directory')('Quote Unquote Records')

// Get release database
console.log('Retrieving release database...')
console.log('')
const response = require('../tools/request')('https://quoteunquoterecords.com/albums.htm').match(/qur\d+\.htm/g)

// Do for each release
for (let i = 0; i < response.length; i++) {
  console.log('Downloading ' + (i + 1) + '/' + response.length + ' (QUR' + response[i].match(/\d+/) + ')...')

  // Download release file
  require('../tools/download')('https://www.quoteunquoterecords.com/qur' + response[i].match(/\d+/) + '/qur' + response[i].match(/\d+/) + '.zip')
}
