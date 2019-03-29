const {
  DefinePlugin,
} = require('webpack')

const webpack_config = require('../framework/webpack/main.config')
const globals = require('../framework/webpack/helpers/globals')

const {rules} = webpack_config.module

module.exports = {
  plugins: [
    new DefinePlugin(globals),
  ],
  module: {
    rules,
  },
  resolve: webpack_config.resolve,
}
