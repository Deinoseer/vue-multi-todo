module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-todo" : "/",
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
