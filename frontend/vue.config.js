const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // Definir las feature flags para optimizar la compilación
    plugins: [
      new (require('webpack')).DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true),  // o false si no usas la Options API
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),  // Deshabilita devtools en producción
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true)  // Habilita detalles de desajuste de hidratación
      })
    ]
  }
})
