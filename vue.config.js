module.exports = {
  baseUrl: './',
  css: {
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      return {
        // externals: {
        //   'vue': 'Vue',
        //   'vue-router': 'VueRouter',
        //   'vuex' : 'Vuex',
        //   'iview': 'iView',
        // }
      }
    } else {
      // 为开发环境修改配置...
    }
  }
};
