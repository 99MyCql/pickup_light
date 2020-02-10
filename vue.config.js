module.exports = {
  // webpack的打包分析工具
  configureWebpack: {
    // 防止将某些 import 的包(package)打包到 bundle 中，
    // 而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。
    // 用人话说，就是对某些包(比如CDN导入的包)不进行打包
    externals: {
      // 前面为全局变量名，后面为库名
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
    }
  },
};