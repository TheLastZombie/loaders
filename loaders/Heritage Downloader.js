/* eslint-disable no-eval, no-undef */

// Show header
console.log('Heritage Downloader')
console.log('')

// Create directory
require('../tools/directory')('a CLOCK')

// Get heritage database
console.log('Retrieving heritage database...')
console.log('')
const response = require('../tools/request')('https://www.sony.net/united/clock/assets/js/heritage_data.js')
require('fs').writeFileSync('heritage_data.js', response)

eval(response)

// Do for each heritage
for (let i = 0; i < a_clock_heritage_data.length; i++) {
  process.stdout.write('Downloading ' + (i + 1) + '/' + a_clock_heritage_data.length + ' (' + a_clock_heritage_data[i].id + ').')
  require('../tools/directory')(a_clock_heritage_data[i].name.en)
  const resolutions = ['3840_2160', '1920_1200', '1920_1080', '1280_1024']

  // Download music
  if (a_clock_heritage_data[i].music) {
    require('../tools/download')('https://www.sony.net/united/clock/assets/sound/theme_song_of_world_heritage_' + a_clock_heritage_data[i].music + '.mp3')
    process.stdout.write('.')
  }

  // Download soundscape
  if (a_clock_heritage_data[i].soundscape) {
    require('../tools/download')('https://www.sony.net' + a_clock_heritage_data[i].soundscape.media.mp3)
    process.stdout.write('.')
  }

  // Download photos
  for (let j = 0; j < 12; j++) {
    resolutions.forEach(x => {
      require('../tools/download')('https://di.update.sony.net/ACLK/wallpaper/' + a_clock_heritage_data[i].id + '/' + x + '/fp/' + a_clock_heritage_data[i].id + '_' + x + '_fp_' + (j + 1).toString().padStart(2, '0') + '.zip')
      process.stdout.write('.')
    })

    require('../tools/download')('https://www.sony.net/united/clock/share/img/photo/' + a_clock_heritage_data[i].id + '/fp_hd/' + (j + 1).toString().padStart(2, '0') + '.jpg')
    process.stdout.write('.')
  }

  // Download snapshots
  for (let j = 0; j < 10; j++) {
    resolutions.forEach(x => {
      require('../tools/download')('https://di.update.sony.net/ACLK/wallpaper/' + a_clock_heritage_data[i].id + '/' + x + '/ss/' + a_clock_heritage_data[i].id + '_' + x + '_ss_' + (j + 1).toString().padStart(2, '0') + '.zip')
      process.stdout.write('.')
    })
  }

  // Return and flush
  require('../tools/directory')('..', true)
  console.log('')
}
