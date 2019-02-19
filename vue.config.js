module.exports = {
  // 选项...
  baseUrl:
    process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  css: {
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  }
};
