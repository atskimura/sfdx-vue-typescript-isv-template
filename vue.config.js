module.exports = {
  outputDir: 'sfdx-src/managed/main/default/staticresources/app',
  filenameHashing: false,
  chainWebpack: config => {
    // 画像はurl-loaderでData URI形式で埋め込む
    const imagesRule = config.module.rule('images')
    imagesRule.uses.clear();
    imagesRule
      .use('url-loader')
        .loader('url-loader')
    
    // svgはurl-loaderでData URI形式で埋め込む
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear();
    svgRule
      .use('url-loader')
        .loader('url-loader')
  }
}