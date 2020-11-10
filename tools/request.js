module.exports = function (url, json, headers = {}) {
  const execFileSync = require('child_process').execFileSync

  headers = Object.keys(headers).map(y => '--header=' + y + ': ' + headers[y])

  const response = execFileSync('wget', [url, '-O', '-', '-q', ...headers], {
    maxBuffer: 1024 * 1024 * 1024
  }).toString()

  if (json) return JSON.parse(response)
  return response
}
