module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/global.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: require("./aliases.config").webpack
    }
  }
};
