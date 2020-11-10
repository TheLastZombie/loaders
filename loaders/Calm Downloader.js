// Show header
console.log('Calm Downloader')
console.log('')

// Create directory
require('../tools/directory')('Calm')

// Get scene database
console.log('Retrieving scene database...')
console.log('')
const response = require('../tools/request')('https://api.app.aws-prod.useast1.calm.com/scenes', true, {
  'x-device-platform': 'www'
})
require('fs').writeFileSync('scenes', JSON.stringify(response))

// Do for each scene
for (let i = 0; i < response.scenes.length; i++) {
  process.stdout.write('Downloading ' + (i + 1) + '/' + response.scenes.length + ' (' + response.scenes[i].id + ').')
  require('../tools/directory')(response.scenes[i].title)

  // Download audio
  if (response.scenes[i].audio) {
    require('../tools/download')(response.scenes[i].audio.url)
    process.stdout.write('.')
  }

  // Download video
  if (response.scenes[i].video) {
    require('../tools/download')(response.scenes[i].video.url)
    process.stdout.write('.')
  }

  // Download image
  if (response.scenes[i].image) {
    require('../tools/download')(response.scenes[i].image.url)
    process.stdout.write('.')
  }

  // Return and flush
  process.chdir('..')
  console.log('')
}
