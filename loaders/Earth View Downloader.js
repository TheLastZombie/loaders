// Show header
console.log('Earth View Downloader')
console.log('')

// Create directory
require('../tools/directory')('Earth View')

// Print warning
console.log('Some images will be skipped. This is not a bug.\nNot all digits within the 1003 to 7023 range are mapped to images.')
console.log('')

// Do for each image
for (let i = 1003; i < 7024; i++) {
  console.log('Downloading ' + (i - 1002) + '/' + (7023 - 1002) + ' (' + i + ')...')

  // Download image files
  require('../tools/download')('https://www.gstatic.com/prettyearth/assets/full/' + i + '.jpg', undefined, 'www.gstatic.com')
  require('../tools/download')('https://earthview.withgoogle.com/download/' + i + '.jpg', undefined, 'earthview.withgoogle.com')
}
