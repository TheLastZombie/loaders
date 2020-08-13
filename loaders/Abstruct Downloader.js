// Show header
console.log('Abstruct Downloader')
console.log('')

// Create directory
require('../tools/directory')('Abstruct')

// Loading categories
console.log('Loading categories...')
const response = require('../tools/request')('http://api.abstruct.co/api/packs', true)
require('fs').writeFileSync('packs', JSON.stringify(response))
const categories = response.data

// Do for each category
categories.forEach(element => {
  console.log('')
  console.log('Downloading category ' + element.name + '...')
  console.log('')
  require('../tools/directory')(element.name)

  // Get amount of pages
  const pages = require('../tools/request')('http://api.abstruct.co/api/packs/' + element.id + '/wallpapers', true).last_page

  // Do for each page
  for (let i = 1; i <= pages; i++) {
    // Get list of wallpapers
    const response = require('../tools/request')('http://api.abstruct.co/api/packs/' + element.id + '/wallpapers?page=' + i, true)
    require('fs').writeFileSync('wallpapers_page=' + i, JSON.stringify(response))
    const data = response.data

    // Download wallpapers
    data.forEach(image => {
      console.log('Downloading image ' + image.name + '...')
      const download = image.url_res5 || image.url_res4 || image.url_res3 || image.url_res2 || image.url_res1 || image.url_thumb
      require('../tools/download')(download, image.name + require('../tools/extension')(download))
    })
  }

  process.chdir('..')
})
