const path = require('path');
const { defineConfig } = require('@vue/cli-service')

function resolve(dir){
  return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports = defineConfig({
  transpileDependencies: true,
  // less变量识别配置
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.resolve(__dirname, "./src/assets/styles/variable.less")
      ]
    }
  },
  //set第一个参数：设置的别名，第二个参数：设置的路径
  //注意 store 和 router 不必配置
  chainWebpack:(config) => {
    config.resolve.alias
        .set('@',resolve('./src'))
        .set('components',resolve('./src/components'))
        .set('assets',resolve('./src/assets'))
        .set('pages',resolve('./src/pages'))

  }
})
