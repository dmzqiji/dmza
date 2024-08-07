// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// 将dist目录推送到远程分支
// git subtree push --prefix dist origin gh-pages

module.exports = {
  assetsDir:'static',
  parallel:false,
  publicPath:'./',
  devServer:{
      port:5000,//端口号
      open:true, //是否自启动
  },
}
