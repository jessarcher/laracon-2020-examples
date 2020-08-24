module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-loader')
      .loader('vue-loader-v16') // v16 required to work with Vue 3 beta
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
}
