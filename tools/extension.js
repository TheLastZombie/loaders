module.exports = function (file = '') {
  const path = require('path')

  return path.parse(file).ext
}
