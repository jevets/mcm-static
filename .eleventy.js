module.exports = function (config) {
  config.dir = {
    input: 'src',
    output: '_site',
    data: '_data',
  }

  config.addPassthroughCopy('src/css/style.css')
  config.addPassthroughCopy('src/robots.txt')

  config.addPassthroughCopy('src/admin/config.yml')

  config.passthroughFileCopy = true

  return config
}
