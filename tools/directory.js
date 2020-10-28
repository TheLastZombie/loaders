module.exports = function (name, silent) {
  const fs = require('fs')

  name = require('./sanitize')(name)

  if (fs.existsSync(name)) {
    if (silent) {
      process.chdir(name)
    } else {
      throw Error('Directory "' + name + '" already exists!')
    }
  } else {
    fs.mkdirSync(name, {
      recursive: true
    })
    process.chdir(name)
  }
}
