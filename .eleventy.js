const _ = require('lodash')

module.exports = function (config) {
  config.dir = {
    input: 'src',
    output: '_site',
    data: '_data',
  }

  // Pass-through files
  config.passthroughFileCopy = true
  config.addPassthroughCopy('src/assets')
  config.addPassthroughCopy('src/robots.txt')
  config.addPassthroughCopy('src/admin/config.yml')

  /*
   |------------------------------------
   | Custom collections
   |------------------------------------
   */

  // Fiber Types
  config.addCollection('fibers', function (collection) {
    return collection.getFilteredByGlob('src/fibers/*.md')
  })

  // Product Lines
  config.addCollection('productLines', function (collection) {
    let lines = collection.getFilteredByGlob('src/product-lines/*.md')
    return _.orderBy(lines, ['data.temperature', 'fielSlug'], ['desc', 'asc'])
    // let sortedByTemperatureDesc = _sortBy(lines, 'data.temperature')
    // return _reverse(_sortBy(lines, 'data.temperature', 'data.title'))
  })

  // Forms / Materials
  config.addCollection('forms', function (collection) {
    return collection.getFilteredByGlob('src/materials/*.md')
  })
  config.addCollection('materialsSimple', function (collection) {
    return collection.getFilteredByGlob('src/materials/*.md').filter(function (form) {
      return form.data.type === 'simple'
    })
  })
  config.addCollection('materialsComposite', function (collection) {
    return collection.getFilteredByGlob('src/materials/*.md').filter(function (form) {
      return form.data.type === 'composite'
    })
  })

  return config
}
