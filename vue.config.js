module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .use("url-loader")
      .tap((options) => {
        options.limit = 8 * 1024
        return options
      })
  },
}
