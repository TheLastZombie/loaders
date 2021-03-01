module.exports = function (url, file = require('path').basename(url), dir = '.', sanitize = true, chdir = true) {
  const path = require('path')
  const execFileSync = require('child_process').execFileSync
  const fs = require('fs')

  if (sanitize) file = require('./sanitize')(file)
  if (sanitize) dir = require('./sanitize')(dir)
  file = path.resolve(dir, file)

  require('./directory')(dir, true, chdir, sanitize)

  try {
    execFileSync('wget', [url, '-O', file, '-q'])
  } catch (e) {
    console.log('wget error, skipping download.')
    fs.unlinkSync(file)
  }
}
