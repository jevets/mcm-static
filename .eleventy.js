module.exports = function (config) {
  config.dir = {
    input: 'src',
    output: '_site',
  }

  config.addPassthroughCopy('src/css/style.css')
  config.passthroughFileCopy = true

  return config
}
