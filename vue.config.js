const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: `
  //       @import '../node_modules/scss-reset/src/scss/_reset.scss';
  //       `
  //     }
  //   }
  // }
})
