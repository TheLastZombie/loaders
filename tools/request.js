module.exports = function (url, json, args = []) {
  const execFileSync = require('child_process').execFileSync

  const response = execFileSync('wget', [url, '-O', '-', '-q', ...args], {
    maxBuffer: 1024 * 1024 * 1024
  }).toString()

  if (json) return JSON.parse(response)
  return response
}
