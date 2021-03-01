module.exports = function (name, silent, chdir = true) {
  const fs = require('fs')

  name = require('./sanitize')(name)

  if (fs.existsSync(name)) {
    if (silent) {
      if (chdir) process.chdir(name)
    } else {
      throw Error('Directory "' + name + '" already exists!')
    }
  } else {
    fs.mkdirSync(name, {
      recursive: true
    })
    if (chdir) process.chdir(name)
  }
}
