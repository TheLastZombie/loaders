// Show header
console.log('Behang Downloader')
console.log('')

// Create directory
require('../tools/directory')('Behang')

// Get wallpaper list
console.log('Getting wallpaper list...')
const response = require('../tools/request')('https://knokfirst.com/behang_manifest.json', true)
require('fs').writeFileSync('behang_manifest.json', JSON.stringify(response))

// Do for each category
for (let i = 0; i < response.wallpapers.category.length; i++) {
  console.log('')
  console.log('Downloading category ' + (i + 1) + '/' + response.wallpapers.category.length + ' (' + response.wallpapers.category[i].name + ')...')
  console.log('')

  // Create category folder
  require('../tools/directory')(response.wallpapers.category[i].name)

  // Do for each entry
  for (let j = 0; j < response.wallpapers.category[i].wallpaper.length; j++) {
    // Download image file
    console.log('Downloading image ' + (j + 1) + '/' + response.wallpapers.category[i].wallpaper.length + ' (' + response.wallpapers.category[i].wallpaper[j].name + ')...')
    require('../tools/download')(response.wallpapers.category[i].wallpaper[j].url, response.wallpapers.category[i].wallpaper[j].name + require('../tools/extension')(response.wallpapers.category[i].wallpaper[j].url))
  }

  require('../tools/directory')('..', true)
}
