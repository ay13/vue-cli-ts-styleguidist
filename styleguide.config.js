module.exports = {
  components: './src/components/**/[A-Z]*.vue',
  webpackConfig: {
    module: require("./node_modules/@vue/cli-service/webpack.config.js").module
  },
  showUsage: true,
  showCode: true
}