// Show header
console.log('Snoovatar Downloader')
console.log('')

// Create directory
require('../tools/directory')('Snoobuilder')

// Ask for session cookie
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.question('reddit_session\n\t', answer => {
  rl.close()

  // Get asset list
  console.log('accessories')
  const response = require('../tools/request')('https://snoovatar.reddit.com/api/accessories', true, {
    Cookie: 'reddit_session=' + answer
  })
  require('fs').writeFileSync('accessories.json', JSON.stringify(response))

  // Do for each category
  for (const i in response) {
    console.log('\t' + i)

    // Do for each asset set
    response[i].forEach(j => {
      console.log('\t\t' + j.id)

      // Do for each asset
      j.assets.forEach(k => {
        console.log('\t\t\t' + k.accessory_id)
        require('../tools/download')(k.image_url, undefined, i + '/' + j.id, false)
      })
    })
  }
})
