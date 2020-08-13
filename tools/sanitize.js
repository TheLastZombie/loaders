module.exports = function (input, replacement = '_') {
  return input.replace(/[\\/:*?"<>|]/g, replacement)
}
