module.exports = function (url, file = require('path').basename(url), dir = '.', args = [], sanitize = true) {
  const path = require('path')
  const execFileSync = require('child_process').execFileSync
  const fs = require('fs')

  if (sanitize) file = require('./sanitize')(file)
  if (sanitize) dir = require('./sanitize')(dir)
  file = path.resolve(dir, file)

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
      recursive: true
    })
  }

  try {
    execFileSync('wget', [url, '-O', file, '-q', ...args])
  } catch (e) {
    console.log('wget error, skipping download.')
  }
}
